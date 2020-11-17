console.log('blurrer run');
let checked = true;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.checked){
            checked = true;
        }
        else {
            checked = false;
        }
        blurNSFW();
    });


let spinner = document.querySelector('.stories-feed__spinner');
let load = false;
window.addEventListener('scroll', function (e) {
    getLoad();
})

function getLoad() {
    if (spinner.querySelectorAll('.player').length){
        load = true;
        setTimeout(getLoad, 500);
    }
    else if(load){
        blurNSFW();
        load = false;
    }
}

function blurNSFW() {
    load = false;
    document.querySelectorAll('article.story').forEach(function (story) {
        let tags = [];
        story.querySelectorAll('.tags__tag').forEach(function (tag) {
            tags.push(tag.innerText.toUpperCase());
        });
        if (tags.includes('nsfw'.toUpperCase())){
            if (checked){
                story.querySelectorAll('.story-image, .player').forEach(function (image) {
                    image.style.filter = 'blur(40px)';
                })
            }
            else {
                story.querySelectorAll('.story-image, .player').forEach(function (image) {
                    image.style.filter = 'none';
                })
            }
        }
    })
}
blurNSFW();