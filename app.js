const ready = function() {
    const people = [
      {firstname: "Kenny",surname: "McCormick", age: 9, gender: "Garçon" },
      {firstname: "Kyle",surname: "Broslovski", age: 9, gender: "Garçon"},
      {firstname: "Stan",surname: "Marsh", age: 10, gender: "Garçon"},
      {firstname: "Éric",surname: "Cartman", age: 10, gender: "Garçon"}
     ];
    //
    const tbody = document.querySelector("tbody");

    let trContainer = document.createDocumentFragment();

    for(let i = 0; i < people.length; i++) {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${people[i].firstname}</td><td>${people[i].surname}</td><td>${people[i].age}</td><td>${people[i].gender}</td>`;
        trContainer.appendChild(tr);
    }

    tbody.appendChild(trContainer);
}




document.addEventListener("DOMContentLoaded", ready);
