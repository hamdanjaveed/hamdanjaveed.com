var domContent = document.getElementsByTagName('main')[0];

document.addEventListener("DOMContentLoaded", function(e) {
    attachStatefulEventListeners(document.getElementsByClassName('sidebar')[0]);
    goToPage('html/projects.html');
});

function goToPage(url) {
    getHTML(url, setMainContent);
}

function getHTML(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'document';
    
    xhr.onload = function(e) {
        if (xhr.readyState !== 4) return;
        if (this.status !== 200) return console.log("GET " + url + " failed with status: " + this.status);

        callback(this.response.firstChild);
    }

    xhr.onerror = function(err) {
        console.log("Failed to GET " + url, err);
    }

    xhr.send(null);
}

function setMainContent(node) {
    attachStatefulEventListeners(node);

    domContent.innerHTML = '';
    domContent.appendChild(node);
}

function attachStatefulEventListeners(node) {
    var links = node.getElementsByClassName('stateful');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            goToPage(e.target.href);

            e.preventDefault();
        }, false);
    }
}
