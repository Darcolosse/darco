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
    document.addEventListener('DOMContentLoaded', function () {
    var observer = new MutationObserver(function () {
        var yearElem = document.getElementById('year');
        if (yearElem) {
            var currentYear = new Date().getFullYear();
            yearElem.innerHTML = currentYear;
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
});
}
navbar();
footer();



