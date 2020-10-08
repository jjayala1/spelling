
const abreLista = (listWords) =>{

	let currentDiv = document.getElementById("container");
	currentDiv.innerHTML = "";

	const data = listWords.map( x => {

		let newDiv = document.createElement("div");
		newDiv.className =   "fl db h-100 w-90 w-30-ns tc bg-light-green br3 pa3 ma2 pointer grow shadow-5";
		newDiv.style.height = "20em"

		let newDivWord = document.createElement("div");
		newDivWord.className = "dn tc ma2 ttu tracked mt0 dark-blue"
		let newWord = document.createTextNode(x.word);
		newDivWord.appendChild(newWord);

		let newDivDefinition = document.createElement("div");
		let newDefinition = document.createTextNode(x.definition);
		newDefinition.className = ""
		newDivDefinition.appendChild(newDefinition);

		let newDivExample = document.createElement("div");
		newDivExample.className = "dn ma2"
		let newExample = document.createTextNode(x.example);
		newExample.className = ""
		newDivExample.style.color = "green"
		newDivExample.appendChild(newExample);

		let newDivImg = document.createElement("div");
		newDivImg.className = "h4 ma2"
		let newImage = document.createElement("img");
		newImage.src = "./images/" + x.image;
		newImage.className = "h4";
		newDivImg.appendChild(newImage);

		let newDivInput = document.createElement("div");
		let newInput = document.createElement("input");
		newInput.setAttribute('type', 'text');
		newDivInput.appendChild(newInput);

		newDiv.appendChild(newDivImg);
		newDiv.appendChild(newDivWord);
		newDiv.appendChild(newDivDefinition);
		newDiv.appendChild(newDivExample);
		newDiv.appendChild(newDivInput);

		currentDiv.appendChild(newDiv)

	});

	let verRespuestas = document.getElementById("respuestas");
	let divs = document.querySelectorAll(".dn");

	respuestas.addEventListener('click', () =>{
		console.log('click');
		divs.forEach( el => el.classList.toggle("dn"))
	});

};


let navs = document.querySelectorAll(".list");

navs.forEach( el => el.addEventListener('click', () =>{
	list = "listWords" + el.id.substr(-1)
	navs.forEach( el1 => el1.classList.remove("gradient-blue"));
	el.classList.toggle("gradient-blue");
	abreLista(eval(list));
	})
);


