export default interface ICommentRenderer {
    addComment(text: string): void;
    render(deltaTime: number, ctx: CanvasRenderingContext2D): void;
    setRect(x: number,y: number):void;
}
