class HitArea{
    constructor({canvas , ctx , key , space}) {


        this.canvas = canvas
        this.ctx = ctx
        this.key = key
        this.space = space

        this.width = this.canvas.width
        this.height = (this.canvas.height - this.key.height - this.space.height) / 3

        this.x = 0
        this.y = (this.canvas.height - this.key.height - this.space.height) / 1.5
    }

    draw(){
        this.ctx.beginPath()
        this.ctx.fillStyle = 'rgba(255, 0, 0, 0.15)'
        this.ctx.rect(this.x , this.y , this.width , this.height)
        this.ctx.fill()
        this.ctx.closePath()


    }
}