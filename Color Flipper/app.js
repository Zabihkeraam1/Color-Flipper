//color flipper
const btn = document.querySelector('button');
const color = document.querySelector('.color')
const colorHex = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F'
]
function colorGenerator(){
    let colorCode = '#';
    for(let i = 0; i < 6; i++){
        colorCode += colorHex[Math.floor(Math.random()*colorHex.length)];
    }
    document.body.style.backgroundColor = colorCode
    color.textContent = colorCode
}
btn.addEventListener('click', colorGenerator)