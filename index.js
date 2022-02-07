/* GLOBALS */

let collection = document.querySelector('#collection')


/* FETCH REQUESTS */
function getData() {
    console.log('getting')
    //debugger
    fetch('http://localhost:3000/data')
    .then(res => res.json())
    .then(jsons => {
        jsons.forEach(json => {
            //console.log(json);
            render(json);
        })}
)}

function postSubmitted(obj) {
    console.log(obj)
    fetch('http://localhost:3000/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            "greeting": obj.greeting.value,
        })
    })
    //How is the new greeting posted to the DOM without the following 2 .then's?
    // .then(res => res.json())
    // .then((newObj) => {
    //     debugger
    //     render(newObj);
    // })
}

/* RENDERER */
function render(obj) {
    const card = document.createElement('div');
    card.className = "key";
    card.innerHTML = `
        <p">${obj.greeting}<p>
    `
    collection.append(card);
}

/* WHEN THE DOM LOADS*/
document.addEventListener('DOMContentLoaded', () => {
    
    getData(); //initialize

    const form = document.querySelector('#add-form');

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        postSubmitted(event.target);
    })

})