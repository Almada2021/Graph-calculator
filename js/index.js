let pixelScale = 1;
let change1 = 0;
let columna1 = document.getElementById('column1');

function increment() {
    columna1.style.height = (pixelScale * change1) + "px";
    return
}

function ValueChange() {
    if (document.getElementById('num1').value <= 0 | document.getElementById('num1').value == 0;) {
        columna1.style.height = 20 + "px";
        return
    } else {
        change1 = document.getElementById("num1").value;
        increment();
    }

}
setInterval(ValueChange, 200);