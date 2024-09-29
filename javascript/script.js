// Modify the content of the h1 element
document.querySelector('h1').textContent = "Web Development and Modern Technologies";

// Change color of paragraph when button is clicked
document.getElementById('changeColourButton').addEventListener('click', function() {
    document.getElementById('colourParagraph').style.color = 'blue';
});

// Validate the form input
document.getElementById('myForm').addEventListener('submit', function(event) {
    let nameInput = document.getElementById('name').value;
    let errorMessage = document.getElementById('errorMessage');

    if (nameInput === '') {
        errorMessage.textContent = 'Name cannot be empty!';
        event.preventDefault(); // Prevent form submission
    } else {
        errorMessage.textContent = ''; // Clear error message
    }
});
