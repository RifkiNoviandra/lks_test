const canvas = document.querySelector('canvas')

const virus_game = new Virus_game({canvas})
const banner_name = document.getElementById('banner_name')
const button_name = document.getElementById('submit')
const name = document.getElementById('name')


button_name.addEventListener('click' , function (){
    if (name.value === ""){

    }else {
        localStorage.setItem('username' , name.value)
        banner_name.style.display = 'none'
        virus_game.play()
    }
})