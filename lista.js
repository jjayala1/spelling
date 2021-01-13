
const abreLista = (listWords) =>{

    let currentDiv = document.getElementById("container");
    currentDiv.innerHTML = "";

    const data = listWords.map( (x, index) => {

        //DIV de la tarjeta completa
        let newDiv = document.createElement("div");
        newDiv.className =   "fl db h-100 w-90 w-30-ns tc bg-light-blue br3 pa3 ma2 pointer grow shadow-5";
        newDiv.style.height = "20em"
        newDiv.id = 'D'+index;

        //DIV para la palabra
        let newDivWord = document.createElement("div");
        newDivWord.className = "dn tc ma2 ttu tracked mt0 dark-blue"
        let newWord = document.createTextNode(x.word);
        newDivWord.appendChild(newWord);

        //DIV para la definicion
        let newDivDefinition = document.createElement("div");
        let newDefinition = document.createTextNode(x.definition);
        newDefinition.className = ""
        newDivDefinition.appendChild(newDefinition);

        //DIV para el ejemplo
        let newDivExample = document.createElement("div");
        newDivExample.className = "dn ma2"
        let newExample = document.createTextNode(x.example);
        newExample.className = ""
        newDivExample.style.color = "green"
        newDivExample.appendChild(newExample);

        //DIV para la imagen
        let newDivImg = document.createElement("div");
        newDivImg.className = "h4 ma2"
        let newImage = document.createElement("img");
        newImage.src = "./images/" + x.image;
        newImage.className = "h4";
        newDivImg.appendChild(newImage);

        //DIV para el input
        let newDivInput = document.createElement("div");
        newDivInput.className = "db1"
        let newInput = document.createElement("input");
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('correct', x.word);
        newInput.id = 'W'+index;
        newInput.addEventListener("keydown", logKey);
        newDivInput.appendChild(newInput);

        //Append todos los divs
        newDiv.appendChild(newDivImg);
        newDiv.appendChild(newDivWord);
        newDiv.appendChild(newDivDefinition);
        newDiv.appendChild(newDivExample);
        newDiv.appendChild(newDivInput);

        currentDiv.appendChild(newDiv)

    });

    let divs = document.querySelectorAll(".dn");
    let inputs = document.querySelectorAll(".db1");

    let verRespuestas = document.getElementById("respuestas");
    respuestas.addEventListener('click', () =>{
        console.log('click');
        divs.forEach( el => el.classList.toggle("dn"))
        inputs.forEach( el => el.classList.toggle("dn"))
        respuestas.classList.toggle("gradient-blue");
    });

};


let navs  = document.querySelectorAll(".list");
let navsa = document.querySelectorAll(".nav a:nth-child(1n)");

navs.forEach( el => el.addEventListener('click', () =>{
    list = "listWords" + el.id.substr(-2)
    navs.forEach( el1 => el1.classList.remove("gradient-blue"));
    el.classList.toggle("gradient-blue");
    abreLista(eval(list));
})
);


window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.classList.add("bg-black-60");
        navsa.forEach(el => el.classList.add("white"))
        navbar.classList.remove("mw7");
        navbar.classList.remove("mt4");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("bg-black-60");
        navsa.forEach(el => el.classList.remove("white"))
        navbar.classList.add("mw7");
        navbar.classList.add("mt4");
    }
}

function logKey(e) {

    let word = document.getElementById(this.id)
    let correct = word.getAttribute('correct');
    let press = e.key;
    let answer = ''

    if (press === "Backspace"){
        answer = word.value.substr(0,word.value.length-1);
    }
    else{
        answer = word.value + press
    }

    let tarjeta = document.getElementById('D'+this.id.substr(1,2))
    console.log(answer, correct, 'D'+this.id.substr(1,2))

    if( answer.toUpperCase().trim() == correct.toUpperCase()){
        tarjeta.className =   "fl db h-100 w-90 w-30-ns tc bg-light-green br3 pa3 ma2 pointer grow shadow-5";
    }
    else{
        tarjeta.className =   "fl db h-100 w-90 w-30-ns tc bg-light-red br3 pa3 ma2 pointer grow shadow-5";
    }
}
