console.log("Chrome extension go?");



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {      //receive message sent by background script
  console.log(message.txt);
  if (message.txt === "It worked") {
    let paragraphs = document.getElementsByTagName('p');
    for (elt of paragraphs) {
      elt.style['background-color'] = '#FF00FF';
    }
  }
}