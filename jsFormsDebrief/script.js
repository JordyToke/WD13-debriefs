// save form as a variable
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener("click", () => {

  // get feedback form
  const feedback = document.querySelector('#feedback');
  // listen for mouseovers on feedback form
  feedback.addEventListener("mouseover", event => {

  });

  // get form inputs
  const form = {};
  form.name = feedback.querySelector("#name").value;
  form.email = feedback.querySelector("#email").value;
  form.message = feedback.querySelector("#message").value;
  console.log(form);

  // input validation

  // alert on submit
  alert('Thank you!');
})