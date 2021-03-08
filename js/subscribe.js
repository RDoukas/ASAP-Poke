let subscribedUsers = [];

function submitSubscribe(event) {
  // stops form submitting
  event.preventDefault();
  // pull user's information from the form
  let subscriber = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    birthdate: document.getElementById("birthdate").value,
    zipCode: document.getElementById("zipCode").value,
  };

  //Removes non numeric characters from phone number
  subscriber.phoneNumber = subscriber.phoneNumber.replace(/\D/g, "");

  // conditional to confirm the form is filled out correctly, span triggered if incorrect
  if (subscriber.firstName === "") {
    document.getElementById("firstNameError").innerHTML =
      "Please enter your first name";
    console.log("The user has not entered their first name.");
  } else if (subscriber.lastName === "") {
    document.getElementById("lastNameError").innerHTML =
      "Please enter your last name";
    console.log("The user has not entered their last name");
  } else if (subscriber.email === "") {
    document.getElementById("emailError").innerHTML =
      "Please enter your email.";
    console.log("The user has not entered their email");
  } else if (
    subscriber.phoneNumber === "" ||
    subscriber.phoneNumber.length !== 10
  ) {
    document.getElementById("phoneNumberError").innerHTML =
      "Please enter your phone number";
    console.log("The user has not entered their phone number");
  } else if (subscriber.birthdate === "") {
    document.getElementById("birthdateError").innerHTML =
      "Please enter your birthday, we want to celebrate!";
    console.log("The user has not entered their birthdate");
  } else if (subscriber.zipCode === "" || subscriber.zipCode.length !== 5) {
    document.getElementById("zipCodeError").innerHTML =
      "Please enter a valid Zip Code";
    console.log("The user has not entered a valid zip code");
  } else {
    subscribedUsers.push(subscriber);
    document.querySelector("form").reset(); //clears form
    console.log(
      `${subscriber.firstName} ${subscriber.lastName} has been added to the subscription list!`
    );
    // user has been added to the subscription array and logged in the console
    console.log(subscribedUsers);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("subscribeButton")
    .addEventListener("click", submitSubscribe);
});
