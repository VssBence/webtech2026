//http://127.0.0.1:5500/animal-description/index.html?animal=dog&param2=barmi
//query parameterekk

const params = new URLSearchParams(window.location.search);
const animal = params.get('animal');


if(!animal){
    alert("Hiba: Az állat azonosítója nem lett megadva");
    throw Error();
}

if(!Object.keys(ANIMAL_INFO).includes(animal)){
    alert("Hiba: Nem megfelelő azonosító!");
    throw Error();
}

const info = ANIMAL_INFO[animal];

const nameElem = document.getElementById('name');
nameElem.textContent = info.name;

const descElem = document.querySelector('#description');
descElem.innerHTML = info.descriptionHTML;

const imgElem = document.createElement('img');
imgElem.setAttribute('src',info.imageUrl);

descElem.prepend(imgElem);

const funFact = info.funFacts.shift();
const funFactLi = document.createElement('li');
funFactLi.textContent = funFact;
funFactLi.classList.add('fun-fact');

const funFactsUI = document.querySelector('#fun-facts');
funFactsUI.append(funFactLi);

const button = document.querySelector('#new-fun-fact-btn');
button.addEventListener('click', () => {
    const funFact = info.funFacts.shift();
    const funFactLi = document.createElement('li');
    funFactLi.textContent = funFact;
    funFactLi.classList.add('fun-fact');

    funFactsUI.append(funFactLi);

    if(info.funFacts.length === 0){
        button.remove();
    }
});

