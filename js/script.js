const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1

const cat = [
    {
        complain: function(){
            console.log("Meow");
        }
    }
];

//Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.className = "subheading";

//Question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "red";
}

//Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p style="background-color: yellow">New paragraph</p>`;

//Question 7

function myList(list){
    for( let i = 0; i < list.length; i++){
        console.log(list[i].name);
    }

}
myList(cats);

//Question 8

function createCats(cats){
    
    let html = "";

    for(let i =0; i < cats.length; i++){
        let age = "Age unknown";

        if(cats[i].age){
            age = cats[i].age;
        }
    html += `<div class="cat-container">
    <div><h5>${cats[i].name}</h5></div>
    <div><p> Age: ${age}</p></div>
    </div>`;
    }
    return html;
}
const lastContainer = document.querySelector(".cat-container");

newHTML = createCats(cats);
lastContainer.innerHTML = newHTML;

createCats(cats);