let Mostra_formacao = document.getElementById('mostrar_formacao');
let formacao = document.getElementById('formacao');

let Mostra_habilidades = document.getElementById('mostrar_habilidades');
let habilidades = document.getElementById('habilidades');

let Mostra_emprego = document.getElementById('mostrar_emprego');
let emprego = document.getElementById('emprego');

Mostra_formacao.addEventListener('click', (event) => {
    event.preventDefault();

    if (formacao.style.display === 'none' || formacao.style.display === '') {
        formacao.style.display = 'block';
        const info = ['IT technical', 'Software enginer(in progress)'];
        formacao.innerHTML = `<p>${info[0]} <br> ${info[1]}</p>`
    } else {
        formacao.style.display = 'none';
    }

})

Mostra_emprego.addEventListener('click', (event) => {
    event.preventDefault();

    if (emprego.style.display === 'none' || emprego.style.display === '') {
        emprego.style.display = 'block';
        const info = ['UFMT IT technical', 'Escola Linus PJ'];
        emprego.innerHTML = `<p>${info[0]} <br> ${info[1]}</p>`
    } else {
        emprego.style.display = 'none';
    }

})

Mostra_habilidades.addEventListener('click', (event) => {
    event.preventDefault();

    if (habilidades.style.display === 'none' || habilidades.style.display === '') {
        habilidades.style.display = 'block';
        const info = ['NodeJS', 'SQL','Python'];
        habilidades.innerHTML = `<p>${info[0]} <br> ${info[1]} <br> ${info[2]}</p>`
    } else {
        habilidades.style.display = 'none';
    }

})