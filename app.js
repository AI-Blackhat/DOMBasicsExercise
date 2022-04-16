// DOM Basics Exercise

// 1
console.log(`1 * By ID x-men div *`);
const xMen = document.getElementById(`x-men`);
console.log(xMen);
console.dir(xMen);

console.log(`=`.repeat(25));

// 2
console.log(`2 * By Class Name - centered *`);
const centered = document.getElementsByClassName(`center`);
console.log(centered);
console.dir(centered);

console.log(`=`.repeat(25));

// 3
console.log(`3 * Query Selector div-Batman *`);

// best solution
const batman = document.querySelector(`#batman`);

 
// const batman = document.querySelector(`div h2`);
// doesn't get h3 so not as good
console.log(batman);
console.dir(batman);
console.log(`=`.repeat(25));

// 4
console.log(`4 * Query Selector All h3 *`);
const h3s = document.querySelectorAll(`h3`);
console.log(h3s);
console.dir(h3s);
console.log(`=`.repeat(25));

// 5a
/*
console.log(`5a * By Tag Name - h1 *`);
const h1 = document.getElementsByTagName(`h1`);
console.log(h1);
console.dir(h1);
console.log(`=`.repeat(25));
*/

// or

console.log(`5a * Query Selector - h1 *`);
const h1 = document.querySelector(`h1`);
console.log(h1);
console.dir(h1);
console.log(`=`.repeat(25));

// 5b
console.log(`5b * Change text: inner text *`);
h1.innerText = `The Best Animated Superhero TV Shows Ever!`;
// Displays the updated text content value for the h1
console.log(h1.innerText); // The Best Animated Superhero TV Shows Ever!
console.dir(h1.innerText);

// 6a
console.log(`6a * Select div: getElementById *`);
const honorableMentions = document.getElementById(`honorable-mentions`);
// or
//const honorableMentions = document.querySelector(`#honorable-mentions`);
console.log(honorableMentions);
console.dir(honorableMentions);
console.log(`=`.repeat(25));

// 6b
console.log(`6b * Change HTML to p, change text *`);
honorableMentions.innerHTML = `<p>OTHER GREAT SHOWS</p>`;
console.log(honorableMentions);
console.dir(honorableMentions);
console.log(`=`.repeat(25));

// 7a
console.log(`7a * a tag selection *`);
const aTag = document.querySelector(`a`);
console.dir(aTag);
// Displays the href value of the first A element
console.log(aTag);
console.log(`=`.repeat(25));

// 7b
console.log(`7b * Change the href attribute *`);
// Sets a new href value for the first A element in the document and the change is applied to the webpage
aTag.href = `https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/`;
// Displays the updated href value of the first A element, which is the only A element in this case.
console.dir(aTag);
// Displays the href value of the first A element
console.log(aTag);
console.log(`=`.repeat(25));

// 8
console.log(`8 * Using classList, ADD both the "background" and "text-color" classes to the h1 *`);
h1.classList.add(`text-color`, `background`);
console.log(h1);
console.dir(h1);
console.log(`=`.repeat(25));

// 9
console.log(`9 * Using classList, remove the "background" class from the h1 *`);
h1.classList.remove(`background`);
console.log(h1);
console.dir(h1);
console.log(`=`.repeat(25));

// 10a
console.log(`10a * Using createElement, create an h4 element and set it to a const variable called h4 *`);
const h4 = document.createElement(`h4`);
console.log(h4);
console.dir(h4);
console.log(`=`.repeat(25));

// 10b
console.log(`10b * Using innerText add text *`);
h4.innerText = `Is Avatar: The Last Airbender A Superhero Show?`;
console.log(h4);
console.dir(h4);
console.log(`=`.repeat(25));

// 10c
console.log(`10c * Using prepend, add the h4 to the start of the webpage/document *`);
h4.innerText = `Is Avatar: The Last Airbender A Superhero Show?`
// Selects the body element
const body = document.querySelector(`body`);
// Adds h4 as the first child of a parent element
body.prepend(h4);
console.log(h4);
console.dir(h4);
console.log(`=`.repeat(25));

// 11a
console.log(`11a * Using createElement, create an h5 element *`);
const h5 = document.createElement(`h5`);
console.log(h5);
console.dir(h5);
console.log(`=`.repeat(25));

// 11b
console.log(`11b * Using innerText add text *`);
h5.innerText = `Heroes in a half shell Turtle Power!`;
console.log(h5);
console.dir(h5);
console.log(`=`.repeat(25));

// 11c
console.log(`11c * Using insertAdjacentElement, add the h5 after the closing tag *`);
// Adds the new span1 element after the wrigleyImg (img) element
aTag.insertAdjacentElement(`afterend`, h5);
console.log(h5);
console.dir(h5);
console.log(`=`.repeat(25));

// 12
console.log(`12 * Using remove, remove the "Superman" li *`);
const li1 = document.querySelector(`li`);
li1.remove();
console.log(li1);
console.dir(li1);
console.log(`=`.repeat(25));

// Bonus
// 13a
console.log(`13a * Select all the divs and set them to a const variable called divs. *`);
const divs = document.querySelectorAll(`div`);
console.log(divs);
console.dir(divs);
console.log(`=`.repeat(25));

// 13b
// Note: function names were all changed to "d" to make comparison of the 3 displayed solutions easier.
console.log(`13b * Using classList, TOGGLE the "background" class on for all the divs *`);
divs.forEach((d) => {
    d.classList.toggle(`background`);
});

// or

document.querySelectorAll(`div`).forEach(function(d){
    d.classList.toggle(`background`);
});
// Note: This 2nd solution combines 13a and 13b in 1 step.

// or

for (d of divs){
    d.classList.toggle(`background`);
}


// 14a
console.log(`14a * Create an array *`);
const avengers = ["Forever", "Fight", "As", "One", "AVENGERS", "ASSEMBLE!"];
console.log(avengers);
console.dir(avengers);
console.log(`=`.repeat(25));

// 14b
console.log(`14a * Using a loop, add each item from the avengers array as span elements/tags to the bottom of the document/webpage *`);

const newRay = document.createElement(`span`);
function adding (a){
    for(i=0; i<a.length; i++){
        newRay.innerText += a[i]+ ` `;
    }
    body.append(newRay);
}
adding(avengers);


// or
/*
// Note: doesn't wrap in a span but visually looks the same.
for (a of avengers){
    body.append(a + ` `)
}
*/
// or

//Austin's solution doesn't have spaces between the words
/*
for (item of avengers){
    const newSpan = document.createElement(`span`);
    newSpan.innerText = item;
    body.insertAdjacentElement(`beforeend`, newSpan);
}
*/
