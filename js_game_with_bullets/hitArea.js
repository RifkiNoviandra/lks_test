class HitArea {
    constructor({canvas, ctx}) {


        this.canvas = canvas;
        this.ctx = ctx;

        this.width = this.canvas.width;
        // this.height = (this.canvas.height - this.key.height - this.space.height) / 3;

        this.x = 0;
        // this.y = (this.canvas.height - this.key.height - this.space.height) / 1.5;
    }

    setup({key, space}) {
        this.height = (this.canvas.height - key.height - space.height) / 3;
        this.y = (this.canvas.height - key.height - space.height) / 1.5;
    }

    // get height() {
    //     return this.height;
    // }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'rgba(255, 0, 0, 0.15)';
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fill();
        this.ctx.closePath();


    }
}