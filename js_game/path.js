class Path{
    constructor({canvas , ctx , key , space}) {
        this.canvas = canvas
        this.ctx = ctx

        this.key = key
        this.space = space

        this.width = this.key.width
        this.height = this.canvas.height - this.key.height - this.space.height
        this.y = 0
    }

    draw(){

        this.key.key.forEach((items , index) => {

            this.ctx.beginPath()
            this.ctx.fillStyle = "black"
            this.ctx.rect(items.x , this.y , this.width , this.height)
            this.ctx.fill()
            this.ctx.closePath()
        })

    }
}