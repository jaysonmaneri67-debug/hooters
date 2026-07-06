// Plush Kaisen Wiki Script
// Part 1/3


// ==========================
// PAGE NAVIGATION
// ==========================

function showPage(pageID) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });


    const selectedPage = document.getElementById(pageID);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

}



// ==========================
// SEARCH SYSTEM
// ==========================


function searchWiki() {


    const searchBox = document.getElementById("searchBar");


    if (!searchBox) return;


    const query = searchBox.value.toLowerCase();



    const pages = document.querySelectorAll(".page");



    pages.forEach(page => {


        const text = page.innerText.toLowerCase();



        if (query === "") {

            page.style.display = "";

        }

        else if (text.includes(query)) {

            page.style.display = "block";

        }

        else {

            page.style.display = "none";

        }


    });


}



// ==========================
// CHARACTER DATA
// ==========================


const characters = [


{
name:"Bonnie",
power:90,
technique:"Silence of the Great",
reason:
"Bonnie can absorb background noise into his jar and convert it into cursed energy blasts."
},



{
name:"Nightmare Bonnie",
power:95,
technique:"Cursed Energy Consumption",
reason:
"Nightmare Bonnie gets stronger by consuming cursed energy during battle."
},



{
name:"Monty",
power:80,
technique:"Ruin Drive",
reason:
"Monty uses momentum to increase his physical power."
},



{
name:"Foxy",
power:85,
technique:they dont got one,
reason:
"Foxy's intelligence and teamwork give him a huge advantage."
},



{
name:"Puppet",
power:88,
technique:"Prize Box Shikigami",
reason:
"Puppet uses traps and shikigami abilities to overwhelm opponents."
},



{
name:"Freddy",
power:65,
technique:"Broadcast Control",
reason:
"Freddy uses information and broadcasts to influence fights."
},



{
name:"Chica",
power:cooking,
technique:"Pots and Pans",
reason:
"Chica's unpredictable fighting style makes her difficult to read."
}



];



// Part 2 continues below// ===============================
// SCRIPT.JS PART 2/3
// Character Expansion + Search System
// ===============================


// More Plush Kaisen Characters

const moreCharacters = {

    "mangle": {
        name: "Mangle",
        power: "Unpredictable movement and wire attacks",
        technique: "Cursed Wire Control",
        reason: "Uses her broken mechanical body and wires to attack from strange angles"
    },


    
    },


    "nightmare bonnie": {
        name: "Nightmare Bonnie",
        power: "Food",
        technique: "Cursed Comsumption",
        reason: "Eats phenomena to turn to cursed energy and becomes stronger when his rage meter fills"
    },


    "bonnie": {
        name: "Bonnie",
        power: "Game-based cursed energy",
        technique: "Gaming Domain",
        reason: "Uses video games and strategy to create attacks"
    },


    "monty": {
        name: "Montgomery Gator",
        power: "Extreme physical strength",
        technique: "Ruin Drive",
        reason: "A berserker fighter who gains power through momentum"
    },


    "foxy": {
        name: "Foxy",
        power: "Strategy and teamwork",
        technique: "Pirate's Coordination",
        reason: "Uses communication and planning to support the team"
    },


    "puppet": {
        name: "Puppet",
        power: "Cloning abilities",
        technique: "Uncanny Replica Theater",
        reason: "Creates copies and uses tricks to confuse opponents"
    },


    "freddy": {
        name: "Freddy",
        power: "Luck-based attacks and broadcasts",
        technique: "Breaking News",
        reason: "Uses his reporter abilities to change the battlefield"
    }

};


// Add characters into main database

Object.assign(characterData, moreCharacters);



// ===============================
// Character Display System
// ===============================

function showCharacter(character) {

    let data = characterData[character.toLowerCase()];


    const box = document.getElementById("characterInfo");


    if (!box) {
        console.log("Character info box missing");
        return;
    }


    if (data) {

        box.innerHTML = `
        <h2>${data.name}</h2>

        <p><b>Power:</b> ${data.power}</p>

        <p><b>Cursed Technique:</b> ${data.technique}</p>

        <p><b>Description:</b> ${data.reason}</p>
        `;

    } 
    
    else {

        box.innerHTML = `
        <h2>Character Not Found</h2>
        <p>Try searching another character.</p>
        `;

    }

}



// ===============================
// Search Bar Controls
// ===============================

document.addEventListener("DOMContentLoaded", () => {


    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");



    if (searchButton && searchInput) {


        searchButton.addEventListener("click", () => {


            let search = searchInput.value.trim();


            if (search !== "") {

                showCharacter(search);

            }


        });


    }



    if (searchInput) {


        searchInput.addEventListener("keydown", (event) => {


            if (event.key === "Enter") {


                let search = searchInput.value.trim();


                if (search !== "") {

                    showCharacter(search);

                }


            }


        });


    }


});



// ===============================
// Random Character Button
// ===============================

function randomCharacter() {


    let characters = Object.keys(characterData);


    let chosen = characters[
        Math.floor(Math.random() * characters.length)
    ];


    showCharacter(chosen);


}// ===============================
// SCRIPT.JS PART 3/3
// Extra Features + Final Functions
// ===============================



// ===============================
// Page Fade Animation
// ===============================

function fadePage() {

    document.body.style.opacity = "0";


    setTimeout(() => {

        document.body.style.opacity = "1";

    }, 200);

}



window.addEventListener("load", () => {

    document.body.style.transition = "opacity 0.2s";

    document.body.style.opacity = "1";

});




// ===============================
// Character Button Setup
// ===============================

function setupCharacterButtons() {


    const buttons = document.querySelectorAll(".characterButton");


    buttons.forEach(button => {


        button.addEventListener("click", () => {


            let character = button.dataset.character;


            if (character) {

                showCharacter(character);

            }


        });


    });


}


document.addEventListener("DOMContentLoaded", setupCharacterButtons);




// ===============================
// Random Character Button Setup
// ===============================

document.addEventListener("DOMContentLoaded", () => {


    const randomButton = document.getElementById("randomButton");


    if (randomButton) {


        randomButton.addEventListener("click", () => {


            randomCharacter();


        });


    }


});




// ===============================
// Search Clear Button
// ===============================

document.addEventListener("DOMContentLoaded", () => {


    const clearButton = document.getElementById("clearButton");
    const searchInput = document.getElementById("searchInput");


    if (clearButton && searchInput) {


        clearButton.addEventListener("click", () => {


            searchInput.value = "";


            const box = document.getElementById("characterInfo");


            if (box) {


                box.innerHTML = `
                <h2>Select a character</h2>
                <p>Search or choose someone from the list.</p>
                `;


            }


        });


    }


});




// ===============================
// Secret Fun Fact System
// ===============================

const funFacts = [

    "Nightmare Bonnie's rage comes from negative energy.",

    "Monty fights like a complete berserker.",

    "Foxy uses teamwork and communication to help the group.",

    "Puppet can create replicas to confuse opponents.",

    "Freddy's broadcasts can change the battlefield.",

    "Bonnie uses noise as part of his fighting style."
 
  "Chica Secretly watches anime, favorite is death note
];



function showFact() {


    let factBox = document.getElementById("factBox");


    if (!factBox) {

        return;

    }


    let fact = funFacts[
        Math.floor(Math.random() * funFacts.length)
    ];


    factBox.innerHTML = `
    <h3>Fun Fact:</h3>
    <p>${fact}</p>
    `;


}



// ===============================
// Fun Fact Button
// ===============================

document.addEventListener("DOMContentLoaded", () => {


    const factButton = document.getElementById("factButton");


    if (factButton) {


        factButton.addEventListener("click", () => {


            showFact();


        });


    }


});



// ===============================
// Website Startup Message
// ===============================

console.log(
    "Plush Kaisen Database Loaded Successfully!"
);
