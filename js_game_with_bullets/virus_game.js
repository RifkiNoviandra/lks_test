class Virus_game{
    constructor({canvas}) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')

        this.canvas.width = 395
        this.canvas.height = 600
        this.canvas.style.backgroundColor = 'grey'

        const args = {canvas : this.canvas , ctx : this.ctx};

        this.bullets = new Bullets(args)
        this.key = new Key(args);
        this.space = new Space(args);
        this.path = new Path(args);
        this.hitArea = new HitArea(args);
        this.virus = new VirusDrop({...args , key : this.key , hitArea: this.hitArea, bullets:this.bullets});

        this.space.y = this.key.y - this.space.height

        this.path.height = this.canvas.height - this.key.height - this.space.height

        this.path.width = this.key.width

        this.path.key = this.key

        this.hitArea.setup(this);
    }

    play(){
        this.ctx.clearRect(0 , 0 , this.canvas.width , this.canvas.height)
        this.hit_objects()
        this.key.draw()
        this.path.draw()
        this.hitArea.draw()
        this.virus.draw()
        this.bullets.draw()
        this.space.draw()
        requestAnimationFrame(this.play.bind(this))
    }

    hit_objects(){
        this.key.key.forEach((items , index) => {
            const x = items.x + (items.width/2);

            if (this.key.press.keyD && index ===0){
                if(this.bullets.bullets.length < 4) {
                    this.bullets.bullets.push({x, y: items.y , position : 0});
                    this.key.press.keyD = false;
                }
            }
            if (this.key.press.keyF && index ===1){
                if(this.bullets.bullets.length < 4) {
                    this.bullets.bullets.push({x, y: items.y , position : 1});
                    this.key.press.keyF = false;
                }
            }
            if (this.key.press.keyJ && index ===2){
                if(this.bullets.bullets.length < 4) {
                    this.bullets.bullets.push({x, y: items.y , position : 2});
                    this.key.press.keyJ = false;
                }
            }
            if (this.key.press.keyK && index ===3
            ){
                if(this.bullets.bullets.length < 4) {
                    this.bullets.bullets.push({x, y: items.y , position : 3});
                    this.key.press.keyK = false;
                }
            }
        })

    }

}