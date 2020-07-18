document.addEventListener("DOMContentLoaded", () => {

  let submit = document.getElementById('create-task-form');
  submit.addEventListener('submit', (e) => {
    e.preventDefault();

    let input = document.getElementById("new-task-description").value;
     let list = document.querySelector(".list ul");
     let li = document.createElement("li");
     li.textContent =`${input} `;
     list..appendChild(li);


  });
  /*
  function Submit (e){

    let input = document.getElementById("new-task-description").value;
    let list = document.querySelector("div.list ul");
    list.innerHTML= `<li> ${input} </li>`;
    console.log(input);
    */




});
