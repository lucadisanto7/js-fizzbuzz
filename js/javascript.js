const grid = document.getElementById('fizzbuzz-grid');
for (let i = 1; i <= 100; i++) {
    const square = document.createElement('div');
    square.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'border', 'rounded', 'm-1', 'p-2');
    
    if (i % 3 === 0 && i % 5 === 0) {
        square.innerText = 'FizzBuzz';
        square.classList.add('bg-danger');  // Per rendere "FizzBuzz" di colore rosso
    } else if (i % 3 === 0) {
        square.innerText = 'Fizz';
        square.classList.add('bg-success');  // Per rendere "Fizz" di colore verde
    } else if (i % 5 === 0) {
        square.innerText = 'Buzz';
        square.classList.add('bg-warning');  // Per rendere "Buzz" di colore giallo
    } else {
        square.textContent = i;
        square.classList.add('bg-primary');  // Per rendere i numeri di colore blu
    }
    grid.appendChild(square);
}
