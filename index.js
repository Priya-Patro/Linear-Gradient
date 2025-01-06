let btn1 = document.getElementById('myButton')
let btn2 = document.getElementById('myButton2')
let rgb1 = "#004773"
let rgb2 = "#54d542"
    // let font = " black"

let copyDiv = document.querySelector('.copyCode')

const hexValues = () => {
    let myHexaValues = '0123456789abcdef'
    let colors = "#"
        // console.log(myHexaValues[6]);
    for (let i = 0; i < 6; i++) {
        colors = colors + myHexaValues[Math.floor(Math.random() * 16)];
        // console.log(myHexaValues[i]);
    }
    return colors;

}

const handleButton1 = () => {
    rgb1 = hexValues();
    console.log(rgb1);
    // btn1.style.backgroundColor = rgb2
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`

    document.querySelector('#myButton').textContent = `${rgb1}`

    // btn1.style.color = `${font}`


}
const handleButton2 = () => {
    rgb2 = hexValues();
    console.log(rgb2);
    // btn1.style.color = `${font}`
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`

    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`

    document.querySelector('#myButton2').textContent = `${rgb2}`
        // btn2.style.backgroundColor = rgb1


}

btn1.addEventListener('click', handleButton1)
btn2.addEventListener('click', handleButton2)



copyDiv.addEventListener('click', () => {
    alert("Copy the code", navigator.clipboard.writeText(copyDiv.innerText))
})