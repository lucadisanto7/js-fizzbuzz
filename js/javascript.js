const grid = document.getElementById('fizzbuzz-grid');
for (let i = 1; i <= 100; i++) {

    const square = document.createElement('div')
    square.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'border', 'rounded', 'm-1', 'p-2')

    if (i % 3 === 0 && i % 5 === 0) {
        square.innerText = 'Fizzbuzz';
        square.classList.add = ('bg-danger');
    } else if (i % 3 === 0) {
        square.innerText = 'Fizz';
        square.classList.add = ('bg-success');
    } else if (i % 5 === 0) {
        square.innerText = 'Buzz';
        square.classList.add = ('bg-warning');
    } else {
        square.textContent = i;
        square.classList.add('bg-primary');
    }
    grid.appendChild(square);
}
