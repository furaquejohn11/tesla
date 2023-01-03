window.onload = () => {
    document.getElementById('desc4').style.display = "none";
    document.getElementById('desc5').style.display = "none";
    document.getElementById('desc6').style.display = "none";
    document.getElementById('desc7').style.display = "none";
    document.getElementById('desc8').style.display = "none";
    document.getElementById('desc9').style.display = "none";
    document.getElementById('btnS').style.color = "white";
    
}

btnS = () => {
    btnSetBlack();
    contentColor();
    document.getElementById('btnS').style.color = "white";

    document.getElementById('header').style.color = "black"

    document.getElementById('main').style.backgroundImage = "url(img/models.jpg)"
    document.getElementById('modelName').innerHTML = "Model S";
    document.getElementById('modelDesc').innerHTML = "Plaid";

    document.getElementById('th1').innerHTML = "396 mi";
    document.getElementById('th2').innerHTML = "1.99 s";
    document.getElementById('th3').innerHTML = "200 mph";
    document.getElementById('th4').innerHTML = "1,020 hp";

    document.getElementById('tp1').innerHTML = "Range (EPA est.)";
    document.getElementById('tp2').innerHTML = "0-60 mph*";
    document.getElementById('tp3').innerHTML = "Top Speed";
    document.getElementById('tp4').innerHTML = "Peak Power";

    //displaying description
    document.getElementById('desc1').style.display = "block";
    document.getElementById('desc2').style.display = "block";
    document.getElementById('desc3').style.display = "block";

    //hiding other description
    document.getElementById('desc4').style.display = "none";
    document.getElementById('desc5').style.display = "none";
    document.getElementById('desc6').style.display = "none";
    document.getElementById('desc7').style.display = "none";
    document.getElementById('desc8').style.display = "none";
    document.getElementById('desc9').style.display = "none";

}
btn3 = () => {
    const buttons = document.getElementById('header').getElementsByTagName("button");
    for (const button of buttons) {
        button.style.color = "lightgrey";
    }

    const h1 = document.getElementById('main').getElementsByTagName("h1");
    for (const h of h1) {
        h.style.color = "white";
    }

    const h2 = document.getElementById('main').getElementsByTagName("h2");
    for (const h of h2) {
        h.style.color = "white";
    }

    const p = document.getElementById('main').getElementsByTagName("p");
    for (const p1 of p) {
        p1.style.color = "white";
    }

    const buttonsSP = document.getElementById('specs').getElementsByTagName("button");
    for (const button of buttonsSP) {
        button.style.color = "white";
        button.style.borderColor = "white";
    }

    document.getElementById('btn3').style.color = "white";
    document.getElementById('teslaImg').style.color = "white";



    document.getElementById('main').style.backgroundImage = "url(img/model3.jpg)"
    document.getElementById('modelName').innerHTML = "Model 3";
    document.getElementById('modelDesc').innerHTML = "<u>" + "Schedule a Demo Drive" + "</u>";

    document.getElementById('th1').innerHTML = "3.1 s";
    document.getElementById('th2').innerHTML = "358 mi";
    document.getElementById('th3').innerHTML = "AWD";

    document.getElementById('tp1').innerHTML = "0-60 mph*";
    document.getElementById('tp2').innerHTML = "Range (EPA est.)";
    document.getElementById('tp3').innerHTML = "Dual Motor";

    document.getElementById('add').style.display = "none";


     //displaying description
     document.getElementById('desc4').style.display = "block";
     document.getElementById('desc5').style.display = "block";
     
 
     //hiding other description
     document.getElementById('desc1').style.display = "none";
     document.getElementById('desc2').style.display = "none";
     document.getElementById('desc3').style.display = "none";
     document.getElementById('desc6').style.display = "none";
     document.getElementById('desc7').style.display = "none";
     document.getElementById('desc8').style.display = "none";
     document.getElementById('desc9').style.display = "none";

}

btnX = () => {
    btnSetBlack();
    contentColor();
    document.getElementById('btnX').style.color = "white";

    document.getElementById('main').style.backgroundImage = "url(img/modelx.jpg)"
    document.getElementById('modelName').innerHTML = "Model X";
    document.getElementById('modelDesc').innerHTML = "Plaid";

    document.getElementById('th1').innerHTML = "333 mi";
    document.getElementById('th2').innerHTML = "2.5 s";
    document.getElementById('th3').innerHTML = "9.9 s";
    document.getElementById('th4').innerHTML = "1,020 hp";

    document.getElementById('tp1').innerHTML = "Range (EPA est.)";
    document.getElementById('tp2').innerHTML = "0-60 mph*";
    document.getElementById('tp3').innerHTML = "1/4 Mile";
    document.getElementById('tp4').innerHTML = "Peak Power";

    displayTP4();

     //displaying description
     document.getElementById('desc6').style.display = "block";
     document.getElementById('desc7').style.display = "block";
     
 
     //hiding other description
     document.getElementById('desc1').style.display = "none";
     document.getElementById('desc2').style.display = "none";
     document.getElementById('desc3').style.display = "none";
     document.getElementById('desc4').style.display = "none";
     document.getElementById('desc5').style.display = "none";
     document.getElementById('desc8').style.display = "none";
     document.getElementById('desc9').style.display = "none";
}
btnY = () => {
    btnSetBlack();
    contentColor();
    document.getElementById('btnY').style.color = "white";
    

    document.getElementById('main').style.backgroundImage = "url(img/modely.jpg)"
    document.getElementById('modelName').innerHTML = "Model Y";
    document.getElementById('modelDesc').innerHTML = "<u>" + "Schedule a Demo Drive" + "</u>";

    document.getElementById('th1').innerHTML = "76 cu ft";
    document.getElementById('th2').innerHTML = "330 mi";
    document.getElementById('th3').innerHTML = "AWD";

    document.getElementById('tp1').innerHTML = "Cargo Space";
    document.getElementById('tp2').innerHTML = "Range (EPA est.)";
    document.getElementById('tp3').innerHTML = "Dual Motor";

    document.getElementById('add').style.display = "none";


     //displaying description
     document.getElementById('desc8').style.display = "block";
     document.getElementById('desc9').style.display = "block";
     
 
     //hiding other description
     document.getElementById('desc1').style.display = "none";
     document.getElementById('desc2').style.display = "none";
     document.getElementById('desc3').style.display = "none";
     document.getElementById('desc6').style.display = "none";
     document.getElementById('desc7').style.display = "none";
     document.getElementById('desc4').style.display = "none";
     document.getElementById('desc5').style.display = "none";

}


//Configs
displayTP4 = () => {
    document.getElementById('add').style.display = "inline";
}

btnSetBlack = () => {
    const buttons = document.getElementById('header').getElementsByTagName("button");
    for (const button of buttons) {
        button.style.color = "black";
    }
}

contentColor = () => {
    const buttons = document.getElementById('header').getElementsByTagName("button");
    for (const button of buttons) {
        button.style.color = "black";
    }

    const h1 = document.getElementById('main').getElementsByTagName("h1");
    for (const h of h1) {
        h.style.color = "black";
    }

    const h2 = document.getElementById('main').getElementsByTagName("h2");
    for (const h of h2) {
        h.style.color = "black";
    }

    const p = document.getElementById('main').getElementsByTagName("p");
    for (const p1 of p) {
        p1.style.color = "black";
    }

    const buttonsSP = document.getElementById('specs').getElementsByTagName("button");
    for (const button of buttonsSP) {
        button.style.color = "black";
        button.style.borderColor = "black";
    }
}