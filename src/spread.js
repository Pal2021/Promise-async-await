/**
 * Codders Gyan youtube
 * 1.register
 * 2.send-welcome-email
 * 3.logi
 * 4.get-user-data
 * 5.display user data
 */
function register() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("register end");
      resolve();
    }, 3000);
  });
}
function sendEmail() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return reject("Error while sendEmail");
      console.log("sendEmail end");
    }, 3000);
  });
}
function login() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("login end");
      resolve();
    }, 3000);
  });
}
function getUserData(callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("get User Data");
      resolve();
    }, 3000);
  });
}
function displayUserData(callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("display user data");
      resolve();
    }, 3000);
  });
}

// register(function () {
//   sendEmail(function () {
//     login(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });

// register()
//   .then(sendEmail)
//   .then(login)
//   .then(getUserData)
//   .then(displayUserData)
//   .catch((err) => {
//     console.log("Error:", err);
//   });
async function authenticate() {
  await register();
  await login();
  await getUserData();
  await displayUserData();
}
authenticate()
  .then(() => {
    console.log("All set");
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Other applicatio wor");
