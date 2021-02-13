// Initialize the row id to zero
let id = 1;

// When the user clicks the Submit button in the form, run this function to
// add a row to the table.
document.getElementById('submit').addEventListener('click', (e) => {
    // Get values from the form
    let firstName = document.getElementById('first').value;
    let lastName = document.getElementById('last').value;
    let emailAddress = document.getElementById('email').value;

    // If all the form inputs have text, then proceed
    if (firstName && lastName && emailAddress) {   
        // Add a new row to the table
        let table = document.getElementById('table');
        let row = table.insertRow(id);
        row.setAttribute('id', id);

        // Display the new values in that row
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = firstName;
        cell2.innerHTML = lastName;
        cell3.innerHTML = emailAddress;

        // Increment the row id
        id += 1;

        // Clear the form
        document.getElementById('first').value = '';
        document.getElementById('last').value = '';
        document.getElementById('email').value = '';
    } 
    // If any of the fields in the form are empty, display an error and return.
    else {
        alert("Enter first name, last name, and email address.")
    }

    // Don't refresh the page
    e.preventDefault();
});
