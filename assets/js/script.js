const video = document.querySelector('video');




video.addEventListener('ended',(event)=>{
    
    document.getElementById('buttonChoice').className = "buttonChoiceBlock"
    
    
    document.getElementById('opening').className = "displayNone"
    
   
})

function RemoveLoop() {

    document.getElementById('opening').removeAttribute("loop")
}

setTimeout(RemoveLoop,35000); 