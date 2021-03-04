/** code by webdevtrick.com ( https://webdevtrick.com ) **/
var validateEmail = function (elementValue) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(elementValue);
};
$("#email").keyup(function () {
  var value = $(this).val();
  var valid = validateEmail(value);

  if (!valid) {
    $(this).css("color", "red");
    $(".addbut1").prop("disabled", true);
  } else {
    $(this).css("color", "#2bb673");
    $(".addbut1").prop("disabled", false);
  }
});

let newsletterMembers = {};
console.log(newsletterMembers);

newsletterMembers.subscribe = document.querySelector("#subscribe");
newsletterMembers.form = document.querySelector("#subscribe > #subscribe-form");
newsletterMembers.subscribe = document.querySelector(
  "#subscribe > #subscribe-form > button#subscribe"
);
newsletterMembers.input = document.querySelector(
  "#subscribe>#subscribe-form>.form-group>input"
);
newsletterMembers.submitButton = document.querySelector(
  "#subscribe > #subscribe-form > .form-group > button"
);
newsletterMembers.successMessage = document.querySelector(
  "#subscribe > #subscribe-form > #success"
);

console.log(newsletterMembers.successMessage);

newsletterMembers.submitDelay = 1000;

newsletterMembers.clickHandler = (e) => {
  switch (e.target) {
    case newsletterMembers.subscribe:
      console.log("case subscribe");
      newsletterMembers.subscribe.style.width = "37rem";
      // e.target.classList.remove("shown");
      // newsletterMembers.input.classList.add("shown");
      // newsletterMembers.submitButton.classList.add("shown");
      newsletterMembers.input.focus();
      break;
    case newsletterMembers.submitButton:
      newsletterMembers.submitForm();
      break;
  }
};
newsletterMembers.handleInputKeypress = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    newsletterMembers.submitForm();
  }
};
newsletterMembers.submitForm = () => {
  newsletterMembers.input.style.transition = "all .6s ease";
  newsletterMembers.submitButton.style.transition = "all .6s ease";
  // newsletterMembers.input.classList.remove("shown");
  // newsletterMembers.submitButton.classList.remove("shown");
  newsletterMembers.main.style.transition =
    "all .6s cubic-bezier(0.47, 0.47, 0.27, 1.20) .4s";
  newsletterMembers.main.style.width = "";
  // newsletterMemmbers.successMessage.classList.add("shown");
  let submission = setTimeout(
    () => newsletterMemmbers.form.submit(),
    newsletterMemmbers.submitDelay
  );
};

newsletter.input.addEventListener("keypress", (e) =>
  newsletterMemmbers.handleInputKeypress(e)
);
document.addEventListener("click", (e) => newsletterMemmbers.clickHandler(e));
