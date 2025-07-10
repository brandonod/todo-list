// 1. Create HTML/CSS boilerplate for a note-taking app
// 2. Design a single note layout in HTML & style it with CSS
// 3. Build a form for creating a new note (e.g., input and submit button)
// 4. Connect the form elements using JS (querySelector / getElementById)
// 5. On form submission:
//    - Prevent default form behavior
//    - Capture user input (title, content, etc.)
//    - Create new DOM elements using this data
//    - Apply CSS classes to style them like the original note template
//    - Append the note to a container (like a flexbox/grid)
// 6. Optionally: Add a delete button to remove notes
// 7. Optionally: Allow editing notes
// 8. Optionally: Save notes to localStorage for persistence


// click on button, trigger a popup 
function openForm() {
    document.getElementById("openForm").style.display = "block"
}

function closeForm() {
    document.getElementById("openForm").style.display = "flex"
}

// Note Class

class Note {
    constructor(header, paragraph) {
      this.header = header;
      this.paragraph = paragraph;
    }
  
    createNoteElement() {
      const noteDiv = document.createElement('div');
      noteDiv.classList.add('note');
      noteDiv.innerHTML = `
        <h2>${this.header}</h2>
        <p>${this.paragraph}</p>
      `;
      return noteDiv;
    }
  }

// connecting forms elemts 
const headerInput = document.getElementById("header");
const paragraphInput = document.getElementById("paragraph");
const form = document.getElementById("formNote");
const notesContainer = document.getElementById("notesContainer");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const header = headerInput.value.trim();
    const paragraph = paragraphInput.value.trim();

    const newNote = new Note(header, paragraph);

    const noteElement = newNote.createNoteElement();
    notesContainer.appendChild(noteElement);

    headerInput.value = "";
    paragraphInput.value = "";
})