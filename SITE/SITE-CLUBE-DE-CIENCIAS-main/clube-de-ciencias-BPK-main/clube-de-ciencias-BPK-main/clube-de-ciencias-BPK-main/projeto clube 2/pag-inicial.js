function redirecionar(url) {
    window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function() {
    const m1 = document.querySelector('.m1');
    const m2 = document.querySelector('.m2');
    const m3 = document.querySelector('.m3');
    const m4 = document.querySelector('.m4');
    const m5 = document.querySelector('.m5');
    const m6 = document.querySelector('.m6');

    m1.addEventListener('click', function() {
        redirecionar('pag-robotica.html');
    });

    m2.addEventListener('click', function() {
        redirecionar('pag-ciencias.html');
    });

    m3.addEventListener('click', function() {
        redirecionar('pag-programacao.html');
    });

    m4.addEventListener('click', function() {
        redirecionar('pag-inovacao.html');
    });

    m5.addEventListener('click', function() {
        redirecionar('pag-noticias.html');
    });

    m6.addEventListener('click', function() {
        redirecionar('pag_preclube.html');
    });
});