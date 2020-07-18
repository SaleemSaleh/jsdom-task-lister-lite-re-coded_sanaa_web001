document.addEventListener("DOMContentLoaded", () => {

  let submit = document.getElementById('create-task-form');
  submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("input");


  });
  /*
  function Submit (e){

    let input = document.getElementById("new-task-description").value;
    let list = document.querySelector("div.list ul");
    list.innerHTML= `<li> ${input} </li>`;
    console.log(input);
    */

  }


});
