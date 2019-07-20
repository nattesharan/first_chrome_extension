console.log("Yeah it works!!!");
// https://thoughtbot.com/blog/how-to-make-a-chrome-extension

function gotMessage(message, sender, reponse) {
    console.log(message);
}
chrome.runtime.onMessage.addListener(gotMessage);