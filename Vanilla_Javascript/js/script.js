window.onload = function() {
    const addBtn = document.querySelector('.add-btn');
    const minusBtn = document.querySelector('.minus-btn');
    
    addBtn.addEventListener('click', add);
    minusBtn.addEventListener('click', minus);
}

function add() {
    // Get DOM element
    var counter = document.querySelector('.counter');

    // Processing Data
    var count = parseInt(counter.innerText);
    count += 1;

    // Rerender
    document.querySelector('.counter').innerText = count;
}

function minus() {
    // Get DOM element
    var counter = document.querySelector('.counter');

    // Processing Data
    var count = parseInt(counter.innerText);
    count += -1;

    // Rerender
    document.querySelector('.counter').innerText = count;
}