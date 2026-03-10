console.log("Hello World");

const var1 = 15;

let var2 = 20;
var2 = true;
var2 = "cica";

//primitiv -> number,string,boolean,null,undefined
//osszetett -> tomb, objektum

const age =  25;

if (age <18) {
    console.log("Kiskoru!4!");
}else if(age <21){
    console.log("Mar majdnem ihatsz Amerikaban");
} else{
    console.log("letsgo inni");
}

//truthy -> true, 23, 'cica', tömb, objektum
//falsy -> false, 0, '', null, undefined

let i = 5;
while (i < 10){
    console.log("Cica");
    i++;
}

for (let index = 0; index <= 5; index++) {
    console.log(i);
}


const arr = [1,2,3,true,undefined,'sandor'];

for (let index in arr) {
    console.log(arr[index]);
}

for (let element of arr) {
    console.log(element);
}

//callback fuggvenyek
const names = ["Bence","Mate","Sandor"];
names.forEach((name) => {
    console.log("Szia", name);
});

const exchangeRates = [375,401,405,398,390,405];

const huf = exchangeRates.map(rate => 1500 / rate);

console.log(huf);

const under400 = exchangeRates.filter(rate => rate < 400);

function cica(nev){
    console.log("Itt egy cica",nev);
}
cica("Bence");

function square(num){
    return num * num;
}

const negyzet = exchangeRates.map(rate => square(rate));
console.log(negyzet);


const ember = {
    nev : "Mate",
    elet : 67,
    male : false,
    info: function(){
        console.log(this.nev,this.elet,this.male);
    }
}

ember.info();

