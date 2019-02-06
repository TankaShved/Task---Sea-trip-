var menuButton = document.getElementById("menu_button")
var menu = document.getElementById("menu_wrapper")

var closeBtn = document.getElementById("closebtn")
var popup = document.getElementById("jspopup")
var lenta = document.getElementById("lenta")


menuButton.onclick = function(){
    if (menu.style.width == "420px"){
        menu.style.width = "0"
    }else{
        menu.style.width = "420px"
    }
}

closeBtn.onclick = function(e){
    popup.style.display = "none"
}

function imagesClick(targetId){
    var target = document.getElementById(targetId)
    lenta.innerHTML = ""
    var cloneAdv = target.cloneNode(true)
    lenta.appendChild(cloneAdv)
    popup.style.display = "flex"
    var a = document.querySelectorAll("#lenta .fotos-preview > img")
  
    for(var i = 0; i < a.length; i ++){
        a[i].onclick = prewImagesClick
    }

}

function prewImagesClick(cant){
    var fed = document.querySelector("#lenta .foto > img")
    fed.src = cant.target.src
}




