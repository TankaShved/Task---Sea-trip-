var menuButton = document.getElementById("menu_button")
var menu = document.getElementById("menu_wrapper")

var closeBtn = document.getElementById("closebtn")
var popup = document.getElementById("jspopup")


var opening = true

menuButton.onclick = function(){
    if (opening == true){
        menu.style.width = "420px"
        opening = false
    }else{
        menu.style.width = "0"
        opening = true
    }
}

closeBtn.onclick = function(){
    popup.style.display = "none"
}


