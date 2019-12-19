let imgs = document.getElementsByTagName('img');

let filenames = [ "ankit1.jpg","ankit2.jpg","ankit3.jpg","ankit4.jpg"];
for (let imgElt of imgs) {              //images element pointed to by imgs

  let r = Math.floor(Math.random() * filenames.length);
  let file = 'Ankit/' + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);
}