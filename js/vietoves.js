(function() {

    let vtp = new XMLHttpRequest();

    vtp.onreadystatechange = function() {
        if (vtp.readyState === 4) {
            let vietsarasas = JSON.parse(vtp.responseText);
            console.log(vietsarasas)
            let optionsarasas = document.querySelector('#vietoves');
            for (let i = 0; i < vietsarasas.lenght; i++) {
                let option = document.createElement('option')
                option.value = vietsarasas[i].name;
                optionsarasas.appendChild(option);
            }

        }
    };

    vtp.open('GET', 'https://api.meteo.lt/v1/places');
    vtp.send();

})();