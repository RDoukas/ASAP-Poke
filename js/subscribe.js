let subscribedUsers = [];

function submitSubscribe(event) {
  let isValid = true;
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
  // Iterate through object to pull value

  //Removes non numeric characters from phone number
  subscriber.phoneNumber = subscriber.phoneNumber.replace(/\D/g, "");

  // conditional to confirm the form is filled out correctly, span triggered if incorrect

  // if (subscriber.birthdate === "") {
  //   isValid = false;
  //   document.getElementById("birthdateError").innerHTML =
  //     "Please enter your birthday, we want to celebrate!";
  //   console.log("The user has not entered their birthdate");
  // } else {
  //   document.getElementById("birthdateError").innerHTML = "";
  // }
  // if (subscriber.zipCode === "" || subscriber.zipCode.length !== 5) {
  //   isValid = false;
  //   document.getElementById("zipCodeError").innerHTML =
  //     "Please enter a valid Zip Code";
  //   console.log("The user has not entered a valid zip code");
  // } else {
  //   document.getElementById("zipCodeError").innerHTML = "";
  // }

  let information = document.getElementsByTagName("input");
  console.log(information);
  let errorMessage = document.getElementById("errorMessage").innerHTML;

  for (let i = 0; i < information.length - 1; i++) {
    let currentInput = information[i].value;
    let inputName = information[i].placeholder;
    if (currentInput === "") {
      isValid = false;
      console.log(`This user is missing ${inputName}`);
      document.getElementById(
        "errorMessage"
      ).innerHTML = `Please enter a valid ${inputName}`;
    } else {
      document.getElementById("errorMessage").innerHTML = "";
    }
  }

  if (subscriber.phoneNumber.length > 10) {
    isValid = false;
    errorMessage = "Your phone number is too long";
    console.log("The users phone number is too long");
  } else if (subscriber.phoneNumber.length < 10) {
    isValid = false;
    errorMessage = "Your phone number isn't long enough";
    console.log("Your phone number isn't long enough");
  } else {
    errorMessage = "";
  }
  if (subscriber.zipCode.length < 5) {
    isValid = false;
    errorMessage = "Your zip code isn't long enough";
    console.log("Your zip code isn't long enough");
  } else if (subscriber.zipCode.length > 5) {
    isValid = false;
    errorMessage = "Your zip code is too loo long";
    console.log("Your zip code is too loo long");
  }

  if (isValid) {
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
