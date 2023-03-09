// function copyCode() {
//   // Get the code snippet element
//   const codeSnippet = document.querySelector('.code-snippet code');
  
//   // Create a temporary textarea element
//   const textarea = document.createElement('textarea');
//   textarea.value = codeSnippet.innerText;
  
//   // Append the textarea element to the body
//   document.body.appendChild(textarea);
  
//   // Select the text inside the textarea element
//   textarea.select();
  
//   // Copy the selected text to the clipboard
//   document.execCommand('copy');
  
//   // Remove the textarea element from the body
//   document.body.removeChild(textarea);
  
//   // Alert the user that the text has been copied
//   alert('Text copied to clipboard!');
// }


/* JavaScript */

function copyCode() {
  // Get the code snippet element
  const codeSnippet = document.querySelector('.code-snippet code');
  
  // Create a temporary textarea element
  const textarea = document.createElement('textarea');
  textarea.value = codeSnippet.innerText;
  
  // Append the textarea element to the body
  document.body.appendChild(textarea);
  
  // Select the text inside the textarea element
  textarea.select();
  
  // Copy the selected text to the clipboard
  document.execCommand('copy');
  
  // Remove the textarea element from the body
  document.body.removeChild(textarea);
  
  // Alert the user that the text has been copied
  alert('Text copied to clipboard!');
}
