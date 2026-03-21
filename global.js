var siren = new Audio('amber.mp3')
window.onload = warningInit()
    let warningBox = document.getElementById("warning");
    warningOff();    
    function randNum(min, max) {
         return Math.floor(Math.random() * (max - min) ) + min;
    }
    function warningOn() {
        warningBox.style.display = "block";
        siren.play()
    }
    function warningOff() {
        warningBox.style.display = "none";
        siren.pause();
        siren.currentTime = 0;
    }
    function warning() {
        if ( randNum(0,4)== 0) {
        warningOn();
        setTimeout(warningOff,10000);
        }
    } 
    function warningInit() {
        setTimeout(warning,(randNum(5000,15000)));
    }
