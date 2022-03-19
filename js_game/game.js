const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 395
canvas.height = 600
canvas.style.backgroundColor = 'grey'

const key = new Key({canvas , ctx});
const space = new Space({canvas , ctx , key});
const path = new Path({canvas , ctx , key , space});
const hitArea = new HitArea({canvas , ctx , key , space});
const virus = new VirusDrop({canvas , ctx , key , hitArea});

const play = () => {
    ctx.clearRect(0 , 0 , canvas.width , canvas.height)
    key.draw()
    space.draw()
    path.draw()
    hitArea.draw()
    virus.draw()
    requestAnimationFrame(play)
}

play()