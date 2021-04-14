const video = document.querySelector('video');


function RemoveLoop() {

    document.getElementById('opening').removeAttribute("loop");
}

video.addEventListener('click', ()  => {
    
    document.getElementById('opening').removeAttribute("loop");
    document.getElementById('opening').className = "displayNone"
    document.getElementById('buttonChoice').className = "buttonChoiceBlock"
    
})


video.addEventListener('ended', () => {
   
    document.getElementById('opening').className = "displayNone"
    document.getElementById('buttonChoice').className = "buttonChoiceBlock"
    
    
})




