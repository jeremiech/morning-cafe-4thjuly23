
setInterval(()=>randomly(),2000)
let randomImage=['./images/art-tablet.webp','./images/Content-Card-Microsoft-365-For-Business-Woman-Teams-Call.webp','./images/Content-Card-Test-Surface-Laptop-5-Sandstone-02.webp','./images/Highlight-Slim-mobile-landing.webp','./images/JIC-DPS-CP01.webp']
function randomly(){
    let image=document.querySelector('#image')
let randomChoice=Math.floor(Math.random()*randomImage.length)
image.src=randomImage[randomChoice]
}
