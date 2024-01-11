//Increase Button
let incr = document.querySelector('#incr');
let node = document.querySelector('.content');
//Adding click event listener to the increase button
incr.addEventListener('click', () => {
    let num = Number(node.innerText);
    node.innerText = num + 1;
})

//Reset Button
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    node.innerText = 0;
})

//Decrease Button
let dec = document.getElementById('dec');
dec.addEventListener('click', () => {
    let num = Number(node.innerText);
    if (num > 0) {
        node.innerText = num - 1;
    }
})

