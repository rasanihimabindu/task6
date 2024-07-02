const current=document.querySelector('#current')
 console.log(current)
 
 
const imgs=document.querySelectorAll('.imgs')
const img=document.querySelectorAll('.imgs img')

img.forEach((img)=>{
    img.addEventListener('click',imageClicked)
})

function imageClicked(e){
    current.src=e.target.src
    const selectedImage=e.target
    const preImg=document.querySelector('#selected')
    preImg.id=' '
    console.log(preImg)
    selectedImage.id='selected'
}
