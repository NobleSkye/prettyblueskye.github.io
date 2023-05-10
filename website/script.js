$(document).ready(function() {
    // Handle login form submission
    $("form").submit(function(event) {
      event.preventDefault();
      // Redirect to dashboard.html on successful login
      window.location.href = "dashboard.html";
    });
  });
  // Retrieve user input
  var newUser = {
    "username": document.getElementById("username-input").value,
    "password": document.getElementById("password-input").value
  };
  
  // Retrieve existing users from the logins.json file
  fetch("/logins.json")
    .then(response => response.json())
    .then(data => {
      var users = data.users;
  
      // Add the new user to the existing array of users
      users.push(newUser);
  
      // Encode the updated users array as JSON and save it back to logins.json
      var updatedData = JSON.stringify({"users": users});
      var blob = new Blob([updatedData], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "logins.json");
    });