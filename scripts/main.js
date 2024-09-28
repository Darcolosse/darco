function header(){
    document.addEventListener('DOMContentLoaded', function () {
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
            })
            .catch(error => console.error('Erreur de chargement du header:', error));
    });
}

function navbar(){
    document.addEventListener('DOMContentLoaded', function () {
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbar').innerHTML = data;
            })
            .catch(error => console.error('Erreur de chargement de la navbar:', error));
    });
}

function footer(){
    document.addEventListener('DOMContentLoaded', function () {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;
            })
            .catch(error => console.error('Erreur de chargement du footer:', error));
    });
}

navbar();
footer();
