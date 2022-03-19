class Bullets{
    constructor({canvas , ctx , key , virus}) {
        this.canvas = canvas
        this.ctx = ctx
        this.key = key
        this.virus = virus

        this.width = 5
        this.height = 20

        this.bullets = [
            // { x: this.key[0].x + (this.key[0].width/2) , y : this.key.y , width : this.width , height : this.height},
            // { x: this.key[1].x + (this.key[1].width/2) , y : this.key.y , width : this.width , height : this.height},
            // { x: this.key[2].x + (this.key[2].width/2) , y : this.key.y , width : this.width , height : this.height},
            // { x: this.key[3].x + (this.key[3].width/2) , y : this.key.y , width : this.width , height : this.height},
        ]
    }

    draw(){
        this.bullets.forEach((bullet , bullet_index) => {
            this.ctx.beginPath()
            this.ctx.fillStyle = "whitesmoke"
            this.ctx.rect(bullet.x , bullet.y , this.width , this.height)
            this.ctx.fill()
            this.ctx.closePath()
            bullet.y -= 2

            if (bullet.y < 0 - this.height){
                this.bullets.splice(bullet_index , 1)
            }

        })
    }
}