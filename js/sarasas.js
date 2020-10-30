(function() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var mokiniai = JSON.parse(xhr.responseText);
            console.log(mokiniai);
            var sarasas = '<ul>';
            for (let i = 0; i < mokiniai.lenght; i++) {
                if (mokiniai[i].lokacija === true) {
                    sarasas += '<li class="yra">'
                } else {
                    sarasas += '<li class="nera">'
                }
                sarasas += mokiniai[i].vardas;
                sarasas += '</li>';
            }
            sarasas += '</ul>';
            document.querySelector('.mokiniai').innerHTML = sarasas;
        }
    }

    xhr.open('GET', 'duomenys/mokiniai.json');
    xhr.send();

})();