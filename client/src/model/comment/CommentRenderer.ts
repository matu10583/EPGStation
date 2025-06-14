import { injectable } from 'inversify';
import ICommentRenderer from './ICommentRenderer';

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
                const isEnd = index === this.end;
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

@injectable()
export default class CommentRenderer implements ICommentRenderer {
    maxComment: number = 20;
    private rectX: number = 0;
    private rectY: number = 0;
    private comments: ICommentBuffer = new CommentBuffer(this.maxComment);

    constructor() {}

    private resizeFontFromCanvasSize(ctx: CanvasRenderingContext2D) {
        const fontsize = this.rectY / 15;
        ctx.font = `${fontsize}px sans-serif`;
        ctx.lineWidth = fontsize / 15;
    }

    public addComment(text: string) {
        const newComment: CommentOnCanvas = {
            text,
            x: this.rectX,
            y: this.getResponeY(),
            speed: 0,
        };
        // console.log(text);

        newComment.speed = this.calcCommentSpeed(newComment, this.rectX);
        this.comments.push(newComment);
    }

    private getResponeY(): number {
        return Math.random() * (this.rectY - 30) + 30;
    }

    private calcCommentSpeed(comment: CommentOnCanvas, width: number): number {
        const baseDuration = 5000;
        const minDuration = 1500;
        const decreasePerChar = 150;

        const duration = Math.max(minDuration, baseDuration - decreasePerChar * comment.text.length);
        return width / duration;
    }

    render(deltaTime: number, ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        this.resizeFontFromCanvasSize(ctx);
        const itr = this.comments.itr();
        while (true) {
            const result = itr.next();
            if (result.done === undefined || result.done) {
                break;
            }
            const comment = result.value;

            //画面外
            if (comment.x + ctx.measureText(comment.text).width < 0) {
                //処理数を減らすために消せるようなら消す
                this.comments.removeIfFirst(comment);
                continue;
            }

            this.updateCommentPos(comment, deltaTime);

            ctx.strokeText(comment.text, comment.x, comment.y);
            ctx.fillText(comment.text, comment.x, comment.y);
        }
    }

    public setRect(x: number, y: number) {
        if (this.rectX === x && this.rectY === y) return;

        const itr = this.comments.itr();
        while (true) {
            const result = itr.next();
            if (result.done === undefined || result.done) {
                break;
            }
            const comment = result.value;

            comment.speed = this.calcCommentSpeed(comment, x);
            comment.x = this.reflect(comment.x, this.rectX, x);
            comment.y = this.reflect(comment.y, this.rectY, y);
        }
        this.rectX = x;
        this.rectY = y;
    }

    private reflect(before: number, beforeSize: number, afterSize: number): number {
        return before * (afterSize / beforeSize);
    }

    private updateCommentPos(comment: CommentOnCanvas, deltaTime: number) {
        comment.x -= comment.speed * deltaTime;
    }
}
