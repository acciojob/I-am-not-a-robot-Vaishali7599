let container = document.querySelector("main");
let imagesClassNames = ["img1", "img2", "img3", "img4", "img5"];

let randomIndex = parseInt(Math.random()*imagesClassNames.length);

imagesClassNames.push(imagesClassNames[randomIndex])
console.log(imagesClassNames)


for(let t of imagesClassNames){
	let pic = document.createElement("img");
	pic.className = t;
	pic.alt = t;
	container.append(pic);
	
	
	
}

