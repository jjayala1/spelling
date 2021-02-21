const menuListas = () =>{

    for (l = 4; l <= 16; l++){

        let newList =  document.createElement("a");
        newList.className = "list f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph3-l"
        newList.id = 'List' + l.toString().padStart(2,'0');
        let newListText = document.createTextNode('List ' + l);
        newList.appendChild(newListText);

        let navBar = document.getElementById("navbar");
        navBar.appendChild(newList)

        let js = document.createElement("script");
        js.type = "text/javascript";
        js.src = "lists/lista" + l.toString().padStart(2,'0') + ".js";
        document.body.appendChild(js);
    }
}

const abreLista = (listWords) =>{

    let containerDiv = document.getElementById("container");
    containerDiv.innerHTML = "";

    const data = listWords.map( (x, index) => {

        let wordIndex = (index+1).toString().padStart(2, '0');
        let listIndex = list.toString().padStart(2, '0').substr(-2);

        //DIV de la tarjeta completa
        let newDiv = document.createElement("div");
        newDiv.className =   "fl db h-100 w-90 w-30-ns tc bg-light-blue br3 pa3 ma2 pointer grow shadow-5";
        newDiv.style.height = "20em"
        newDiv.id = 'D' + wordIndex;

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
        imageName = 'L' + listIndex + 'W' + wordIndex  + '.png';
        newImage.src = "./images/" + imageName;
        newImage.className = "h4";
        newDivImg.appendChild(newImage);

        //DIV para el input
        let newDivInput = document.createElement("div");
        newDivInput.className = "db1"
        let newInput = document.createElement("input");
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('correct', x.word);
        newInput.id = 'W' + wordIndex;
        newInput.addEventListener("keydown", logKey);
        newDivInput.appendChild(newInput);

        //Append todos los divs
        newDiv.appendChild(newDivImg);
        newDiv.appendChild(newDivWord);
        newDiv.appendChild(newDivDefinition);
        newDiv.appendChild(newDivExample);
        newDiv.appendChild(newDivInput);

        containerDiv.appendChild(newDiv)

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


menuListas();
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
