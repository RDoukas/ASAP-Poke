let subscribedUsers = [];

function submitSubscribe(event) {
  // stops form submitting
  event.preventDefault();
  let subscriber = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    birthdate: document.getElementById("birthdate").value,
    zipCode: document.getElementById("zipCode").value,
  };
  subscribedUsers.push(subscriber);
  document.querySelector("form").reset(); //clears form

  console.log("The user's information has been added to the subscription list");
  console.log(subscribedUsers);
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("subscribeButton")
    .addEventListener("click", submitSubscribe);
});
