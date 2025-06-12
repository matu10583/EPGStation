<template>
    <canvas ref="canvas" class="overlay-canvas"></canvas>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

interface CommentOnCanvas {
    text: string;
    x: number;
    y: number;
    speed: number;
}

interface ICommentBuffer {
    length(): number;
    push(c: CommentOnCanvas): void;
    itr(): {
        next: () => IteratorResult<CommentOnCanvas>;
    };
    removeIfFirst(c: CommentOnCanvas): void;
}
class CommentBuffer implements ICommentBuffer {
    private contents: CommentOnCanvas[];
    private start: number = 0;
    private end: number = 0;

    constructor(maxSize: number) {
        this.contents = new Array(maxSize).fill(null);
    }
    removeIfFirst(c: CommentOnCanvas) {
        if (this.contents[this.start] === c) {
            this.start = (this.start + 1) % this.contents.length;
        }
    }

    length() {
        return (this.end + this.contents.length - this.start) % this.contents.length;
    }

    push(c: CommentOnCanvas) {
        this.contents[this.end] = c;
        this.end = (this.end + 1) % this.contents.length;
        //リングをずらす
        if (this.end === this.start) {
            this.start = (this.start + 1) % this.contents.length;
        }
    }

    itr() {
        let index = this.start;
        return {
            next: (): IteratorResult<CommentOnCanvas> => {
                let isEnd = index === this.end;
                if (isEnd) {
                    return { value: undefined as any, done: true };
                } else {
                    const now = index;
                    index = (index + 1) % this.contents.length;
                    return { value: this.contents[now], done: false };
                }
            },
        };
    }
}

@Component
export default class CommentOverlay extends Vue {
    @Prop({ default: 100 }) readonly maxComments!: number;

    private canvasEl: HTMLCanvasElement | null = null;
    private ctx: CanvasRenderingContext2D | null = null;

    private comments: ICommentBuffer = new CommentBuffer(20);
    private animationId: number = 0;
    private resizeObserver?: ResizeObserver;
    private lastTime: number = 0;

    mounted() {
        this.canvasEl = this.$refs.canvas as HTMLCanvasElement;
        if (!this.canvasEl) return;
        const parent = this.$el.parentElement as HTMLElement;
        if (!parent) return;

        this.canvasEl.width = parent.clientWidth;
        this.canvasEl.height = parent.clientHeight;
        this.ctx = this.canvasEl.getContext('2d');
        if(!this.ctx) return;

        this.resizeFontFromCanvasSize(this.canvasEl.width, this.canvasEl.height);

        this.resizeObserver = new ResizeObserver(entries => {
            for (const e of entries) {
                const contentRect = e.contentRect;
                if (this.canvasEl) {
                    this.canvasEl.width = contentRect.width;
                    this.canvasEl.height = contentRect.height;
                    this.resizeFontFromCanvasSize(this.canvasEl.width, this.canvasEl.height);
                }
            }
        });
        this.resizeObserver.observe(parent);
        this.lastTime = performance.now();
        requestAnimationFrame(this.update.bind(this));
    }

    private resizeFontFromCanvasSize(width: number, height: number){
        if(!this.ctx) return;
        const fontsize = height/15;
        this.ctx.font = `${fontsize}px sans-serif`;
        this.ctx.lineWidth = fontsize/15;
    }

    beforeUnmount() {
        cancelAnimationFrame(this.animationId);
    }

    beforeDestroy() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }

    public addComment(text: string) {
        const newComment: CommentOnCanvas = {
            text,
            x: this.canvasEl?.width ? this.canvasEl.width : 600,
            y: this.getNextY(),
            speed: 0,
        };
        newComment.speed = this.calcCommentSpeed(newComment);
        this.comments.push(newComment);
    }

    private getNextY(): number {
        const height = this.canvasEl?.height ? this.canvasEl.height : 600;
        return Math.random() * (height - 30) + 30;
    }

    private calcCommentSpeed(comment: CommentOnCanvas): number {
        const baseDuration = 5000;
        const minDuration = 1500;
        const decreasePerChar = 150;

        const duration = Math.max(minDuration, baseDuration - decreasePerChar * comment.text.length);
        const width = this.canvasEl?.width ? this.canvasEl.width : 600;
        return width / duration;
    }
    update(currentTime: number) {
        if (!this.ctx || !this.canvasEl) return;
        const delta = currentTime - this.lastTime;
        this.lastTime = currentTime;

        this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
        this.ctx.fillStyle = 'white';
        this.ctx.strokeStyle = 'black';
        const itr = this.comments.itr();
        while (true) {
            const result = itr.next();
            if (result.done === undefined || result.done) {
                break;
            }
            const comment = result.value;
            // console.log(comment);
            //画面外
            if (comment.x + this.ctx.measureText(comment.text).width < 0) {
                //処理数を減らすために消せるようなら消す
                this.comments.removeIfFirst(comment);
                continue;
            }
            comment.speed = this.calcCommentSpeed(comment);
            comment.x -= comment.speed * delta;
            this.ctx.strokeText(comment.text, comment.x, comment.y);
            this.ctx.fillText(comment.text, comment.x, comment.y);
        }

        this.animationId = requestAnimationFrame(this.update.bind(this));
    }
}
</script>

<style scoped lang="sass">
.overlay-canvas
    top: 0
    left: 0
    position: absolute
    pointer-events: none
    z-index: 10
</style>
