

console.log("Script is injected");
document.addEventListener('mouseup',function(event)
{ 
    var text = window.getSelection().toString();
    // check if anything is actually highlighted
    if(text !== '') {
        // we've got a highlight, now do your stuff here
        chrome.storage.local.set({text: text});
        console.log(inputText);
    }
})


