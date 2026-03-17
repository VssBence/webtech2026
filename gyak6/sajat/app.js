const button = document.querySelector('#submit');
const lista = document.getElementById('lista');
button.addEventListener('click', () => {
    const elem = document.getElementById('bemenet-mezo');
    if (!elem.value){
        alert('Hiba: Üres mező!');
        throw Error();
    }
    
    const elemUI = document.createElement('li');
    elemUI.textContent = elem.value;
    lista.append(elemUI);
    elem.value = '';
});

lista.addEventListener('click',(event) => {
    event.target.classList.add('athuzott');
}) 
