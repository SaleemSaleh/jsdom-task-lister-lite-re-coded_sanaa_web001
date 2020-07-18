document.addEventListener("DOMContentLoaded", () => {
  let submit = document.getElementById('create-task-form');
  submit.addEventListener('submit', Submit);
  
  function Submit (e){
    preventDefault();
    let input = document.getElementById("new-task-description").value = "Johnny Bravo";
    //let list = document.querySelector("div.list ul");
    //list.innerHTML= `<li> ${input} </li>`;
    console.log(input);

  }

  
});
