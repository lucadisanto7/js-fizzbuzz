const grid = document.getElementById('fizzbuzz-grid');
for (let i = 1; i <= 100; i++) {

    const square = document.createElement('div')

    if (i % 3 === 0 && i % 5 === 0) {
        square.innerText = 'Fizzbuzz';
        square.classList.add = 'fizzBuzz';
    } else if (i % 3 === 0) {
        square.innerText = 'Fizz';
        square.classList.add = 'fizz';
    } else if (i % 5 === 0) {
        square.innerText = 'Buzz';
        square.classList.add = 'buzz';
    } else {
        square.textContent = i;
    }
    console.log(grid)
    console.log(square)
}
