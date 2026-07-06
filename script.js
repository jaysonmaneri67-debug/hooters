
// PAGE SWITCHING

function showPage(pageID){

    let pages = document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.remove("active");

    });


    let selected = document.getElementById(pageID);

    if(selected){

        selected.classList.add("active");

    }

}





// SEARCH SYSTEM

function searchWiki(){

    let input = document
    .getElementById("searchBar")
    .value
    .toLowerCase();


    let pages = document.querySelectorAll(".page");


    if(input === ""){

        pages.forEach(page=>{

            page.style.display="";

        });

        return;

    }



    pages.forEach(page=>{


        let text = page.innerText.toLowerCase();


        if(text.includes(input)){


            page.style.display="block";


        }

        else{


            page.style.display="none";


        }


    });


}







// MATCHUP SYSTEM


const fighters = [

{
name:"Bonnie",
power:90,
reason:"Silence of the Great allows him to convert noise into cursed energy blasts."
},


{
name:"Nightmare Bonnie",
power:95,
reason:"His cursed energy consumption lets him grow stronger during battle."
},


{
name:"Monty",
power:80,
reason:"Ruin Drive increases his power through momentum."
},


{
name:"Foxy",
power:85,
reason:"His intelligence and planning give him a huge advantage."
},


{
name:"Puppet",
power:88,
reason:"Prize Box Shikigami and tricks make him difficult to fight."
},


{
name:"Freddy",
power:65,
reason:"His broadcast abilities give him information control."
},


{
name:"Chica",
power:70,
reason:"Her chaotic fighting style makes her unpredictable."
}


];





function generateFight(){


let fighter1 =
fighters[Math.floor(Math.random()*fighters.length)];


let fighter2 =
fighters[Math.floor(Math.random()*fighters.length)];



while(fighter1.name === fighter2.name){


fighter2 =
fighters[Math.floor(Math.random()*fighters.length)];


}




let winner;


if(fighter1.power > fighter2.power){


winner = fighter1;


}

else{


winner = fighter2;


}




document.getElementById("fightBox").innerHTML =

`

<h2>
${fighter1.name} ⚔️ ${fighter2.name}
</h2>


<p>
🏆 Winner:
<b>${winner.name}</b>
</p>


<p>
Why:
${winner.reason}
</p>

`;

}
