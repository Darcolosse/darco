function navbar(root = './common/') {
    let head = document.getElementById('head');
    while(head.firstChild) {head.removeChild(head.firstChild);}

    fetch(root + 'head.html')
        .then(response => response.text()).then(data => {
            document.getElementById('head').innerHTML = data;
        });

    fetch(root + 'navbar.html').then(response => response.text()).then(data => {
        document.getElementById('navbar').innerHTML = data;
    });
}

function footer(root = './common/') {
    let footer = document.getElementById('footer');
    while(footer.firstChild) {footer.removeChild(footer.firstChild);}

    fetch(root + 'footer.html').then(response => response.text()).then(data => {
        document.getElementById('footer').innerHTML = data;

        const yearElem = document.getElementById('year');
        if (yearElem) {
            yearElem.innerHTML = new Date().getFullYear();
        }

        const scripts = document.getElementById('footer').querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            if (script.src) {
                newScript.src = script.src;
            } else {
                newScript.textContent = script.textContent;
            }
            document.getElementById('footer').appendChild(newScript);
        });
    });
}

navbar();
footer();
