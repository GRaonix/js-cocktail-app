import * as dbHandling from "./dbHandling.mjs";



// Searchbar init
const app = async () => {
  const searchBar = document.getElementById("search-value");

// db populate
  const database = await dbHandling.getData();
  console.log(database.drinks);
  for (let item of database.drinks) {
    let tpl = document.querySelector("#drink-template");
    let clone = document.importNode(tpl.content, true);
    clone.querySelector("h2.drink-name.text-center").textContent = item.strDrink; 
    clone.querySelector("p.drink-instructions").textContent = item.strInstructions;
    clone.querySelector(".drink-glass").textContent = item.strGlass;
    clone.querySelector(".drink-alcoholic").textContent = item.strAlcoholic;
    /*for    (let i = 0; i < item.strIngredient.length; i++) {
    const newDiv = document.createElement("li");
    const newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById(".drink-ingredients");
    document.body.insertAfter(newDiv, currentDiv);*/
  
                                                        

  
  
  
  var len= database.length;
  console.log("coucou"+len);

    
    clone.querySelector(".drink-image").src = item.strDrinkThumb;
    
    document.querySelector("#target").appendChild(clone);

  }
  
  //event listener for keyboard inputs
  searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    let nomatch = [];
    let counter = 0;
    let match = [];
    for (let item of database) {
counter ++;
    } 
    console.log(counter);
    document.getElementById("number-drinks-found").textContent=counter; // update counter number
  });
    
    // Category event listener (TO MODIFY) /////////\\\\\\\\\\\\\\\\////////////\\\\\\\\\//////////\\\\\\\\\
    document.querySelector("#search-send").addEventListener("click", () => {
    let newChar = {};
    newChar.name = document.querySelector("#nameInput").value;
    newChar.shortDescription = document.querySelector(
      "#shortDescriptionInput"
    ).value;
    
    

    let newSrc = document.querySelector("#preview").src;
    
  });
    
}
app();
