let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 100)] //generar ett nummer mellan 0 - 100

btn.addEventListener('click', function() {
    let input = document.getElementById('userInput').value;
    if (input==number){
        output.innerHTML = `Du gissade rätt, din gissning var ${number}`
    } else if (input < number){
        output.innerHTML = 'Du gissade för lågt!'
    };
    if (input > number){
        output.innerHTML = 'Du gissade för högt!'
    }
});