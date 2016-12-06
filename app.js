const ready = function() {
    const people = [
      {firstname: "Kenny",surname: "McCormick"},
      {firstname: "Kyle",surname: "Broslovski"},
      {firstname: "Stan",surname: "Marsh"},
      {firstname: "Éric",surname: "Cartman"}
     ];
    //
    const tbody = document.querySelector('tbody');
    const thead = document.querySelector('thead');

    for (let i = 0; i < people.length; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let fname = document.createTextNode(people[i].firstname);
        let td2 = document.createElement("td");
        let sname = document.createTextNode(people[i].surname);
        td.appendChild(fname);
        tr.appendChild(td);
        td2.appendChild(sname);
        tr.appendChild(td2);
        tbody.appendChild(tr);

    }

}




document.addEventListener("DOMContentLoaded", ready);
