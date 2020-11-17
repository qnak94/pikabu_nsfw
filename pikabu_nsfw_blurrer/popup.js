
let checked = true;
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {checked: checked});
});
document.querySelector('#blur').addEventListener('change', function () {
    if(this.checked) {
        checked = true;
    } else {
        checked = false;
    }
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {checked: checked});
    });
})
