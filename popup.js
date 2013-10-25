var bgPage = chrome.extension.getBackgroundPage();
var toggle = document.getElementById('toggleTicker');



function toggleTicker(){
    console.log("insideToggleTicker");
    if(document.getElementById('toggleTicker').checked)
        bgPage.timerGo();
    else
        bgPage.timerStop();
}

function clickHandler(e){
    toggleTicker();
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('input').addEventListener('click', clickHandler);
});