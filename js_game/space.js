class Space{
    constructor({canvas , ctx , key}) {
        this.canvas = canvas
        this.ctx = ctx
        this.key = key

        this.width = this.canvas.width
        this.height = 10

        this.x = 0
        this.y = this.key.y - this.height
    }

    draw(){
        this.ctx.beginPath()
        this.ctx.fillStyle = "silver"
        this.ctx.rect(this.x , this.y , this.width , this.height)
        this.ctx.fill()
        this.ctx.closePath()
    }
}