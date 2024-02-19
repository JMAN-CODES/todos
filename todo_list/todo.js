let contactForm = document.getElementById("task-form");
let taskSpace = document.getElementById("task-space")
var AllTasks = {};
var id = 0;

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let newTask = document.getElementById("newtask").value;

    if (newTask == "") {
        alert("ensure you input some value!!!!!!");
    } else {
        id += 1;
        AllTasks[id] = newTask;
        console.log(AllTasks);

        document.getElementById("task-space").innerHTML += `
                <div class="card-body" id="${id}">
                    <h3>Task ID: ${id}</h3>
                    <p id="ptag_f${id}" class="card-text">${newTask}</p>
                    <div class="collapse" id="collapseEdit${id}">
                        <div class="card card-body">
                            <form id="f${id}">
                                <div class="mb-3">
                                    <label for="editTask_f${id}" class="form-label">edit</label>
                                    <input type="text" class="form-control" id="editTask_f${id}">
                                </div>
                                <span class="btn btn-primary" id="edit">save</span>
                            </form>
                        </div>
                    </div>
                    <span class="btn btn-primary" id="delete">Delete</span>
                    <a class="btn btn-primary" id="editToggle" data-bs-toggle="collapse" href="#collapseEdit${id}" role="button"
                    aria-expanded="false" aria-controls="collapseExample">
                    edit
                    </a>
                </div>
            `;
    }
});

taskSpace.addEventListener("click", function (e) {
    if (e.target.id === "delete") {
        e.target.parentElement.remove();
    }
    else if (e.target.id === "edit") {
        let idval = e.target.parentElement.id
        console.log(idval);
        let newval = document.getElementById(`editTask_${idval}`).value;
        console.log(newval);
        document.getElementById(`ptag_${idval}`).innerHTML = newval;
    }
}, false);