// GH_ACCESS_TOKEN betöltve a config.js-ből

function loadNavigation(){
    fetch('./navbar.html')
        .then(res => res.text())
        .then(navbarHTML => {
            document.body.insertAdjacentHTML('afterbegin',navbarHTML);
        })
        .catch(err => {
            console.log(err);
            alert("Hiba a menürerndszer betöltésekor.");
        });
}

loadNavigation();


