btnS = () => {
    document.getElementById('main').style.backgroundImage = "url(img/models.jpg)"
    document.getElementById('modelName').innerHTML = "Model S";
    document.getElementById('modelDesc').innerHTML = "Plaid";

    document.getElementById('modelDesc').innerHTML = "Schedule a Demo Drive";
    document.getElementById('th1').innerHTML = "396 mi";
    document.getElementById('th2').innerHTML = "1.99 s";
    document.getElementById('th3').innerHTML = "200 mph";
    document.getElementById('th4').innerHTML = "1,020 hp";

    document.getElementById('tp1').innerHTML = "Range (EPA est.)";
    document.getElementById('tp2').innerHTML = "0-60 mph*";
    document.getElementById('tp3').innerHTML = "Top Speed";
    document.getElementById('tp4').innerHTML = "Peak Power";
}
btn3 = () => {
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

}

btnX = () => {
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
}
btnY = () => {
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
}

displayTP4 = () => {
    document.getElementById('add').style.display = "inline";
}