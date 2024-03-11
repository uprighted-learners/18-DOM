// prove that we're running javascript in the browser
console.log("Hi team!")

// change the text content of an html element
const messageElement = document.getElementById("message")
messageElement.textContent = "Updated Title with JavaScript."

// change the text content of the main content area
const contentArea = document.getElementById("contentArea")
contentArea.textContent = "This is a new message."
