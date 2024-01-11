function clicknumber(arg) {
    document.getElementById('screen').innerHTML += `${arg}`;
}
function calculate() {
    let c = eval(document.getElementById('screen').innerHTML);
    document.getElementById('calculatedvalue').innerHTML = `${c}`;
    document.getElementById('screen').innerHTML="";
}