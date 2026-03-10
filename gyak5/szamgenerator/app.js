const eredmeny = parseInt(Math.random() * 1000000);
let count = 1;
let tip;
//console.log(eredmeny);

while (tip !== eredmeny && count <= 20) {
    tip = parseInt(prompt("Add meg a tippedet:"));
    if(isNaN(tip)){
        alert("Kérem számot adjon meg!");
        continue;
    }
    if(tip == eredmeny){
        alert("Gratulálok, " + count + " lépésből eltaláltad!");
        break;
    }else if(tip > eredmeny){
        alert(count + ". tipp nem talált: A megoldás kisebb.");
    }else if(tip < eredmeny){
        alert(count +  ". tipp nem talált: A megoldás nagyobb.");
    }else{
        alert("Error");
    }
    count++;
}

if (count > 20){
    alert("Sajnos ez most nem sikerült! A megoldás: "+eredmeny);
}