function header() {
    let head = document.getElementById('head');
    // Clear the head element before adding new content
    while(head.firstChild) {head.removeChild(head.firstChild);}

    // Fetch and insert the content of head.html
    fetch('head.html')
        .then(response => response.text()).then(data => {
            document.getElementById('head').innerHTML = data;
        })
    
    // Fetch and insert the content of navbar.html
    fetch('navbar.html').then(response => response.text()).then(data => {
        document.getElementById('navbar').innerHTML = data;
    })
}

function footer() {
    // Clear the footer element before adding new content
    let footer = document.getElementById('footer');
    while(footer.firstChild) {footer.removeChild(footer.firstChild);}

    // Fetch and insert the content of footer.html
    fetch('footer.html').then(response => response.text()).then(data => {
        document.getElementById('footer').innerHTML = data;

        // Update the year in the footer
        const yearElem = document.getElementById('year');
        if (yearElem) {
            yearElem.innerHTML = new Date().getFullYear();
        }

        // Select and execute scripts within the footer
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

header();
footer();


setTimeout(function() {
    // Sélectionner tous les éléments avec la classe 'point'
    const list = document.getElementsByClassName('point');
    console.log("List of points:" + list.length);
    for (let i = 0; i < list.length; i++) {
        setTimeout(function() {
            list[i].style.backgroundColor = "black";        }, 1000); // X secondes
            list[i].style.width = "10px";
            list[i].style.height = "10px";
            list[i].style.animation = "pulse 1s infinite, moveRight 2s forwards";

        console.log(list[i].style.backgroundColor);
    }
}, 3 * 1000); // 2 secondes



