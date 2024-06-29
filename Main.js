const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const buttonId = e.currentTarget.id;
    // console.log(`Button clicked: ${buttonId}`);
    body.style.backgroundColor = buttonId;
    // console.log(`Background color changed to: ${buttonId}`);
  });
});












// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body");

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener("click", function (e) {
//     console.log(e);
//     console.log(e.target);
//     const buttonId = e.target.id;
//     if (e.target.id === "grey") {
//       body.style.backgroundColor = buttonId;
//     }
//     if (e.target.id === "white") {
//       body.style.backgroundColor = buttonId;
//     }
//     if (e.target.id === "blue") {
//       body.style.backgroundColor = buttonId;
//     }
//     if (e.target.id === "yellow") {
//       body.style.backgroundColor = buttonId;
//     }
//     if (e.target.id === "red") {
//       body.style.backgroundColor = buttonId;
//     }
//     if (e.target.id === "black") {
//       body.style.backgroundColor = buttonId;
//     }
//     if (e.target.id === "purple") {
//       body.style.backgroundColor = buttonId;
//     }
//     if (e.target.id === "green") {
//       body.style.backgroundColor = buttonId;
//     }
//     if (e.target.id === "orange") {
//       body.style.backgroundColor = buttonId;
//     }
//     if (e.target.id === "tomato") {
//       body.style.backgroundColor = buttonId;
//     }
//   });
// });
