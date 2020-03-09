// SignUp
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", e => {
  e.preventDefault();

  // Get User Info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  //   console.log(email, password);

  // Sign Up User
  auth.createUserWithEmailAndPassword(email, password).then(creb => {
    console.log(creb.user);
    const modal = document.querySelector("#modal-signup");
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});
