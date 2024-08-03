document.getElementById("countdown").addEventListener('click',() =>{
    chrome.runtime.sendMessage({action: "setOption", option:"countdown"});
});

document.getElementById('puzzle').addEventListener('click', () => {
    chrome.runtime.sendMessage({action: "setOption", option:"puzzle"});
});
  
document.getElementById('quote').addEventListener('click', () => {
    chrome.runtime.sendMessage({action: "setOption", option:"quote"});
});
  
//Send message (option) to background.js and it will direct the message to contentScript.js
//Can't send message to contentScript.js directly because they run in separate execution environments (popup.js: popup, contextScript.js: webpage)
//To facilitate communication between them, we need a service worker as a mediator, which is background.js