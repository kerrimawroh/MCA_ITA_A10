
// Get the current date and time
function updateDateTime() {
    const now = new Date();

    // Format the date and time
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    // Combine date and time
    const dateTimeString = `${date} ${time}`;

    // Update the content of the 'datetime' span
    document.getElementById('datetime').textContent = dateTimeString;
}

// Call the function initially to display the current date and time
updateDateTime();

// Update the date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);
