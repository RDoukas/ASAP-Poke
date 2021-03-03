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

const newsletter = {};

newsletter.subscribe = document.querySelector("#subscribe");
newsletter.form = document.querySelector("#subscribe > #subscribe-form");
newsletter.subscribe = document.querySelector(
  "#subscribe > #subscribe-form > button#subscribe"
);
newsletter.input = document.querySelector(
  "#subscribe>#subscribe-form>.form-group>input"
);
newsletter.submitButton = document.querySelector(
  "#subscribe > #subscribe-form > .form-group > button"
);
newsletter.successMessage = document.querySelector(
  "#subscribe > #subscribe-form > #success"
);

newsletter.submitDelay = 1000;

newsletter.clickHandler = (e) => {
  switch (e.target) {
    case newsletter.subscribe:
      console.log("case subscribe");
      newsletter.subscribe.style.width = "37rem";
      // e.target.classList.remove("shown");
      // newsletter.input.classList.add("shown");
      // newsletter.submitButton.classList.add("shown");
      newsletter.input.focus();
      break;
    case newsletter.submitButton:
      newsletter.submitForm();
      break;
  }
};
newsletter.handleInputKeypress = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    newsletter.submitForm();
  }
};
newsletter.submitForm = () => {
  newsletter.input.style.transition = "all .6s ease";
  newsletter.submitButton.style.transition = "all .6s ease";
  // newsletter.input.classList.remove("shown");
  // newsletter.submitButton.classList.remove("shown");
  newsletter.main.style.transition =
    "all .6s cubic-bezier(0.47, 0.47, 0.27, 1.20) .4s";
  newsletter.main.style.width = "";
  // newsletter.successMessage.classList.add("shown");
  let submission = setTimeout(
    () => newsletter.form.submit(),
    newsletter.submitDelay
  );
};

newsletter.input.addEventListener("keypress", (e) =>
  newsletter.handleInputKeypress(e)
);
document.addEventListener("click", (e) => newsletter.clickHandler(e));
