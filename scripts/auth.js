// Auth Status
auth.onAuthStateChanged(user => {
  if (user) {
    // GET DATA
    db.collection("guides")
      .get()
      .then(snapshot => {
        // console.log(snapshot.docs);
        setupGuides(snapshot.docs);
        setupUI(user);
      });
  } else {
    setupGuides([]);
    setupUI();
  }
});

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
    const modal = document.querySelector("#modal-signup");
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

//Log Out
const logout = document.querySelector("#logout");
logout.addEventListener("click", e => {
  e.preventDefault();
  auth.signOut();
});

//Log In
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", e => {
  e.preventDefault();

  //Get the User Info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    const modal = document.querySelector("#modal-login");
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});

