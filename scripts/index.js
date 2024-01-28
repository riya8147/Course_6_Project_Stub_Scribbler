document.getElementById('signupBtn').addEventListener('click', function() {
    openModal('signupModal');
});

document.getElementById('signingBtn').addEventListener('click', function() {
    openModal('signingModal');
});

document.getElementById('allPostsBtn').addEventListener('click', function() {
    // Handle redirection to bloglist.html
    window.location.href = 'index.html';
});

document.getElementById('createPostBtn').addEventListener('click', function() {
    openModal('createPostModal');
});

/* Add these functions to your existing JavaScript file */

// Function to handle sign up form submission
\/* ... (your existing functions) */

 // Function to handle sign up form submission
 function handleSignUp() {
     var name = document.getElementById('name').value;
     var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
     var confirmPassword = document.getElementById('confirmPassword').value;
     var errorMessage = document.getElementById('signupErrorMessage');

     // Clear previous error message
     errorMessage.innerHTML = '';

     // Perform validation
     if (!name || !username || !password || !confirmPassword) {
         errorMessage.innerHTML = 'Please fill out all fields.';
         return;
     }

     // Additional validation and actions can be added here

     // Close the modal
     closeModal('signupModal');
 }

function handleSignIn() {
    var username = document.getElementById('signingUsername').value;
    var password = document.getElementById('signingPassword').value;
    var errorMessage = document.getElementById('signingErrorMessage');

    // Clear previous error message
    errorMessage.innerHTML = '';

    // Perform validation
    if (!username || !password) {
        errorMessage.innerHTML = 'Please fill out all fields.';
        return;
    }

    // Additional validation and actions can be added here

    // Close the modal
    closeModal('signingModal');
}

// Add event listener for sign in form submission
document.getElementById('signingSubmitBtn').addEventListener('click', handleSignIn);


/* ... (your existing functions) */

// Function to handle sign in form submission
function handleSignIn() {
    var username = document.getElementById('signingUsername').value;
    var password = document.getElementById('signingPassword').value;
    var errorMessage = document.getElementById('signingErrorMessage');

    // Clear previous error message
    errorMessage.innerHTML = '';

    // Perform validation
    if (!username || !password) {
        errorMessage.innerHTML = 'Please fill out all fields.';
        return;
    }

    // Additional validation and actions can be added here

    // Close the modal
    closeModal('signingModal');
}

// Add event listener for sign in form submission
document.getElementById('signingSubmitBtn').addEventListener('click', handleSignIn);
