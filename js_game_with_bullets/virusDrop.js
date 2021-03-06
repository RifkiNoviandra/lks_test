class VirusDrop extends Component{
    constructor({canvas , ctx , key , hitArea , bullets}) {

        // this.canvas = canvas
        // this.ctx = ctx

        super({canvas, ctx});
        this.bullets = bullets
        this.key = key
        this. hit = hitArea
        this.img = document.createElement('img')
        this.img.src = "assets/beta.png"
        this.width = this.key.width / 2
        this.height = 50
        this.x = 15
        this.y = 15
        this.speed = 2
        this.virus = []
        this.score = 0
        this.miss = 0

        setInterval(() => {
            this.random_virus(Math.floor(this.score/ 20))
        } , 1000)
    }

    random_virus(data){
        let i = 0
        for ( i ; i <= data ; i++){
            this.virus.push(this.randomize())
        }
    }
    draw(){
        this.virus.forEach((items , index) => {
            this.ctx.drawImage(this.img , items.x , items.y , this.width , this.height)
            items.y += this.speed + (Math.floor(this.score / 20)*2)
            // if (this.key.press.keyD && items.position === 0 && items.y >= this.hit.y - this.height && items.y <= this.hit.y + this.hit.height){
            //     this.virus.splice(index,1)
            //     this.score += 1
            // }
            // if (this.key.press.keyF && items.position === 1 && items.y >= this.hit.y - this.height && items.y <= this.hit.y + this.hit.height){
            //     this.virus.splice(index,1)
            //     this.score+=1
            // }
            // if (this.key.press.keyJ && items.position === 2 && items.y >= this.hit.y - this.height && items.y <= this.hit.y + this.hit.height){
            //     this.virus.splice(index,1)
            //     this.score+=1
            // }
            // if (this.key.press.keyK && items.position === 3 && items.y >= this.hit.y - this.height && items.y <= this.hit.y + this.hit.height){
            //     this.virus.splice(index,1)
            //     this.score+=1
            // }
            if (items.y > this.hit.y + this.hit.height){
                this.virus.splice(index , 1)
                this.miss += 1
                console.log(this.miss);
            }


            this.bullets.bullets.forEach((bullet , bullet_index) => {
                // console.error(items.y + this.height, bullet.y);
                if (items.position === bullet.position && items.y + this.height > bullet.y){
                    this.virus.splice(index , 1)
                    this.bullets.bullets.splice(bullet_index , 1)
                    this.score += 1
                }
            })

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