var x = 0;
var intervalID = 0;
var verbottenURLs = ["*://www.cnn.com/*", "*://www.reddit.com/*"];

function timerGo() {
    timerStop();
    intervalID = setInterval(function(){
    console.log(x);
    x++;},1000);
}
function timerStop(){
    clearInterval(intervalID);
}

chrome.webRequest.onBeforeRequest.addListener(
    function(details){
        timerStop();
        var length = verbottenURLs.length;
        for (var i=0; i<length; i++){
        if(details.url.indexOf(verbottenURLs[i]) != -1){
            console.log(verbottenURLs[i]);
            timerGo();
            
        }
            
        }
        return {cancel: true};
    },
    {urls: ["<all_urls>"]}
);
