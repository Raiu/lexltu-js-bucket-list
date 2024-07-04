const theList = document.querySelector(".list");

/* let firstParagraph = document.createElement("p");
firstParagraph.appendChild(document.createTextNode("Earn two million dollars"));
theList.appendChild(firstParagraph);

let secondParagraph = document.createElement("p");
secondParagraph.appendChild(document.createTextNode("Eat a lot of pizza"));
theList.insertAdjacentElement("beforeend", secondParagraph);

console.log(theList.innerHTML);

let thirdParagraph = "<p>Take a vacation</p>";
theList.innerHTML += thirdParagraph; */

let thirdParagraph = "<p>Take a vacation</p>";
theList.insertAdjacentHTML("beforeend", thirdParagraph);

for (let i = 0; i < 3; i++) {
    theList.insertAdjacentHTML("beforeend", `<p>${i + 1}. new item list</p>`);
}

console.log(theList.children.length);

document.querySelector("h2.owner").innerHTML = "Viktor\'s";

let firstReplaceParagraph = document.createElement("p");
firstReplaceParagraph.appendChild(document.createTextNode("Earn two million dollars"));
theList.replaceChild(firstReplaceParagraph, theList.children[0]);

let secondParagraph = document.createElement("p");
secondParagraph.appendChild(document.createTextNode("Find fountain of youth"));

let protoArray = Array.prototype.slice.call(theList.children);
protoArray[2] = secondParagraph;
theList.replaceChildren(...protoArray);

theList.removeChild(theList.lastElementChild);
