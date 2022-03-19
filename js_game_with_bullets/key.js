class Key extends Component{
    constructor({canvas , ctx }) {

        super({canvas , ctx})

        this.height = 120
        this.width = 95

        this.padding = 5

        this.x = 0
        this.y = this.canvas.height - this.height

        this.key = [
            { x : this.x , y : this.y , width : this.width , height : this.height , key : "D" , color : "purple" , position : 1},
            { x : this.x + (this.width + this.padding) , y : this.y , width : this.width , height : this.height , key : "F" , color: "blue" , position : 2},
            { x : this.x + (this.width + this.padding)*2, y : this.y , width : this.width , height : this.height , key : "J" ,  color: "purple" , position : 3},
            { x : this.x + (this.width + this.padding)*3, y : this.y , width : this.width , height : this.height , key : "K" ,  color: "blue" , position : 4},
        ]

        this.press = {
            'keyD' : false,
            'keyF' : false,
            'keyJ' : false,
            'KeyK' : false
        }

        window.addEventListener('keydown' ,  (e) => {
            if (e.code === "KeyD"){
                this.press.keyD = true
            }
            if (e.code === "KeyF"){
                this.press.keyF = true
            }
            if (e.code === "KeyJ"){
                this.press.keyJ = true
            }
            if (e.code === "KeyK"){
                this.press.keyK = true
            }
        })

        window.addEventListener('keyup' , (e) => {
            if (e.code === "KeyD"){
                this.press.keyD = false
            }
            if (e.code === "KeyF"){
                this.press.keyF = false
            }
            if (e.code === "KeyJ"){
                this.press.keyJ = false
            }
            if (e.code === "KeyK"){
                this.press.keyK = false
            }
        })
    }

    draw(){
        this.key.forEach( (items , index) => {


            if (index === 0 && this.press.keyD){
                this.color = '#be1ebe'
                // if(this.bullets.bullets.filter((bullet)=> bullet.x === x).length < 3) {
                // if(this.bullets.bullets.length < 4) {
                //     this.bullets.bullets.push({x, y: items.y , position : 0});
                //     this.press.keyD = false;
                // }
            }
            else if (index === 1 && this.press.keyF){
                this.color = '#1f1fe3'
                // if(this.bullets.bullets.length < 4) {
                //     this.bullets.bullets.push({x, y: items.y , position : 1});
                //     this.press.keyF = false;
                // }
            }
            else if (index === 2 && this.press.keyJ){
                this.color = '#be1ebe'
            }
            else if (index === 3 && this.press.keyK){
                this.color = '#1f1fe3'
                // if(this.bullets.bullets.length < 4) {
                //     this.bullets.bullets.push({x, y: items.y , position : 3});
                //     this.press.keyK = false;
                // }
            }else {
                this.color = items.color
            }

            this.ctx.beginPath()
            this.ctx.fillStyle = this.color
            this.ctx.rect(items.x , items.y , items.width , items.height)
            this.ctx.fill()
            this.ctx.closePath()

            this.ctx.beginPath()
            this.ctx.font = "24px Arial"
            this.ctx.fillStyle = "white"
            this.ctx.fillText(items.key , items.x + (items.width/2) - 8 , items.y + (items.height/2))
            this.ctx.closePath()
        })
    }
}