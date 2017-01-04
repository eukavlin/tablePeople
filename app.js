// app global variable to maintain state
const app = {
  models: {},
  views: {},
  controllers: {}
};

// app people model
app.models.people = {
  get: function() {
    return this.data;
  },
  add: function(newPerson) {
    this.data.push(newPerson);
    app.views.redraw();
  },
  // fake data to initialize example
  data: [{
      firstname: "Kenny",
      surname: "McCormick",
      age: 9,
      height: 121
  }, {
      firstname: "Kyle",
      surname: "Broslovski",
      age: 9,
      height: 125
  }, {
      firstname: "Stan",
      surname: "Marsh",
      age: 10,
      height: 122
  }, {
      firstname: "Éric",
      surname: "Cartman",
      age: 10,
      height: 119
  }]
};

// app views
app.views.redraw = function() {
  // TODO : sauver app.people dans le localStorage
  const people = app.models.people.get();
  const tbody = document.querySelector("tbody");
  const trContainer = document.createDocumentFragment();

  // Remove tbody contents
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  // Add new contents from people
  for (let i = 0; i < people.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${people[i].firstname}</td><td>${people[i].surname}</td><td>${people[i].age}</td><td>${people[i].height}</td>`;
    trContainer.appendChild(tr);
  }
  tbody.appendChild(trContainer);
};

// app controllers
app.controllers.onSubmit = function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const newPerson = {
    surname: formData.get("sname"),
    firstname: formData.get("fname"),
    age: formData.get("age"),
    height: formData.get("heights")
  };
  app.models.people.add(newPerson);
};

// DOM bindings
const ready = function() {
  // TODO charger app.people depuis le localStorage
  // Initial drawing
  app.views.redraw();
  // On form submit
  document.getElementById("addpeople").addEventListener("submit", app.controllers.onSubmit);
}
document.addEventListener("DOMContentLoaded", ready);
