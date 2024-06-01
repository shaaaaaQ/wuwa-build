export async function draw(ctx: CanvasRenderingContext2D, file: File, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number) {
    const img = new Image();
    return new Promise<void>(resolve => {
        img.src = URL.createObjectURL(file);
        img.addEventListener("load", () => {
            ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            resolve()
        });
    })
}