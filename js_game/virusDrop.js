class VirusDrop{
    constructor({canvas , ctx , key , hitArea}) {

        this.canvas = canvas
        this.ctx = ctx
        this.key = key
        this. hit = hitArea
        this.img = document.createElement('img')
        this.img.src = "assets/beta.png"
        this.width = this.key.width / 2
        this.height = 50
        this.x = 15
        this.y = 15
        this.virus = []

        this.score = 0
        this.miss = 0

        setInterval(() => {
             this.virus.push(this.randomize())
        } ,1000)
    }

    draw(){
        this.virus.forEach((items , index) => {
            this.ctx.drawImage(this.img , items.x , items.y , this.width , this.height)
            items.y += 2
            if (this.key.press.keyD && items.position === 0 && items.y >= this.hit.y - this.height && items.y <= this.hit.y + this.hit.height){
                this.virus.splice(index,1)
                this.score += 1
            }
            if (this.key.press.keyF && items.position === 1 && items.y >= this.hit.y - this.height && items.y <= this.hit.y + this.hit.height){
                this.virus.splice(index,1)
                this.score+=1
            }
            if (this.key.press.keyJ && items.position === 2 && items.y >= this.hit.y - this.height && items.y <= this.hit.y + this.hit.height){
                this.virus.splice(index,1)
                this.score+=1
            }
            if (this.key.press.keyK && items.position === 3 && items.y >= this.hit.y - this.height && items.y <= this.hit.y + this.hit.height){
                this.virus.splice(index,1)
                this.score+=1
            }
            if (items.y > this.hit.y + this.hit.height){
                this.virus.splice(index , 1)
                this.miss += 1
                console.log(this.miss);
            }
        })

        console.log(this.score);
    }

    randomize(){
        const y = -Math.floor(Math.random() * 200)
        const position = Math.floor(Math.random() * (3+1))
        const x = this.key.key[position].x + this.key.width/2 - this.width /2

        return {x , y , position}
    }
}