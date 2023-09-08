let Mostra_formacao = document.getElementById('mostrar_formacao');
let formacao = document.getElementById('formacao');

let Mostra_habilidades = document.getElementById('mostrar_habilidades');
let habilidades = document.getElementById('habilidades');

let Mostra_emprego = document.getElementById('mostrar_emprego');
let emprego = document.getElementById('emprego');

Mostra_formacao.addEventListener('click', (event) => {
    event.preventDefault();

    if (formacao.style.display === 'none' || formacao.style.display === '') {
        formacao.style.display = 'inline-block';
        const info = ['IT technical', 'Software enginer'];
        formacao.innerHTML = `<p class='habilidades'> <img src="/img/icons/tilogo.png" alt="jsicon" class='icons'>${info[0]} </p>
                                <p class='habilidades'> <img src="/img/icons/englogo.png" alt="jsicon" class='icons'> ${info[1]} </p>`
    } else {
        formacao.style.display = 'none';
    }

})

Mostra_emprego.addEventListener('click', (event) => {
    event.preventDefault();

    if (emprego.style.display === 'none' || emprego.style.display === '') {
        emprego.style.display = 'inline-block';
        const info = ['UFMT IT technical', 'Escola Linus PJ'];
        emprego.innerHTML = `<p class='habilidades'> <img src="/img/icons/logoufmt.png" alt="jsicon" class='icons'>${info[0]} </p>
                             <p class='habilidades'> <img src="/img/icons/lslogo.jpg" alt="jsicon" class='icons'>${info[1]} </p>    `
    } else {
        emprego.style.display = 'none';
    }

})

Mostra_habilidades.addEventListener('click', (event) => {
    event.preventDefault();

    if (habilidades.style.display === 'none' || habilidades.style.display === '') {
        habilidades.style.display = 'inline-block';
        const info = ['JavaScript', 'SQL','Python', 'Github'];
        habilidades.innerHTML = `
        <p class='habilidades'> <img src="/img/icons/jsicon.png" alt="jsicon" class='icons'> ${info[0]} </p>    
        <p class='habilidades'> <img src="/img/icons/sqlicon.png" alt="sqlicon" class='icons'>${info[1]}</p> 
        <p class='habilidades'> <img src="/img/icons/pythonicon.png" alt="pythonicon" class='icons'>${info[2]}</p>  
        <p class='habilidades'> <img src="giticon.png" class='icons'>${info[3]}</p>`
    } else {
        habilidades.style.display = 'none';
    }

})
