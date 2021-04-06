let coutner = 0;

plus = () => {
    coutner++;
    update();
}

minus = () => {
    coutner--;
    update();
}

update = () => {
    document.getElementById('counterValue').innerHTML = coutner;
}
