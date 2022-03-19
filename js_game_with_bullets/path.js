class Path{
    constructor({canvas , ctx}) {
        this.canvas = canvas
        this.ctx = ctx
        this.y = 0
    }

    draw(key){

        this.key.key.forEach((items , index) => {

            this.ctx.beginPath()
            this.ctx.fillStyle = "black"
            this.ctx.rect(items.x , this.y , this.width , this.height)
            this.ctx.fill()
            this.ctx.closePath()
        })

    }
}