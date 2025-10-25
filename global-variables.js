window.canvas = document.getElementById("overlay");
window.ctx = canvas.getContext("2d");
window.savebox = document.getElementById("savebox");
window.boxCenterTop = document.getElementById("boxcentertop");
window.editName = document.getElementById("edit-name");
window.editPassword = document.getElementById("edit-password");
window.sPassword = document.getElementById("show-password");
window.saveDirections = document.getElementById("savedirections");
window.message = document.getElementById("message");
window.worlds = document.getElementById("worlds");
window.loadedWorlds = document.getElementsByClassName("world");
window.quota = document.getElementById("quota");
window.fileUpload = document.getElementById("fileInput");
window.playerLocation = document.getElementById("location");
window.hudTxt = document.getElementById("hud")
window.progressBar = document.getElementById("loadingProgress");
window.progress = document.getElementById("progress");
window.settingsInfo = document.getElementById("settingsInfo1");
window.blockInfo = document.getElementById("blockInfo");
window.title = document.getElementsByTagName("title");
window.nameColor = document.getElementsByClassName("name-color");
window.selected = document.getElementsByClassName("selected");
window.info = document.getElementById("info");
window.lock = document.getElementsByClassName("lock");

var hoverbox = document.getElementById("onhover");
var hoverboxSlider = document.getElementById("onhover-sliders");

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var MathGlob = Math;
