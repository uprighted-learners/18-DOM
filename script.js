// prove that we're running javascript in the browser
console.log("Hi team!")

// change the text content of an html element
const messageElement = document.getElementById("message")
messageElement.textContent = "Updated Title with JavaScript."

// change the text content of the main content area
const contentArea = document.getElementById("contentArea")
contentArea.textContent = "This is a new message."

// console.log("DOM document: ", document)

window.x = 7;
x === 7;
y = 9;
window.y === 9;

parseInt("123")
window.parseInt("123")

// console.log("Window object: ", window)

let allTheParagraphs = document.getElementsByTagName("p")
let firstParagraph = allTheParagraphs[0]
console.log("All the paragraphs: ", allTheParagraphs)
console.log("First paragraph: ", firstParagraph)

firstParagraph.innerHTML = "HEY ALEX"

let article = document.getElementById("article")
console.log("Article: ", article)

let elementsWithButtonCLass = document.querySelectorAll("#button")
console.log("Elements with button class: ", elementsWithButtonCLass)

// let someMessage = "SHAZAM"
// let somePrompts = prompt("What's your first superhero movie?")
// alert(somePrompts)

let target = document.getElementById("someElement")

let paragraph = document.createElement("p")
paragraph.textContent = "This is a new paragraph."

target.appendChild(paragraph)