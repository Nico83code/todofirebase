//add task
document.querySelector('.addtask').onsubmit = (task) => {
    postData(task.target.description.value);
}

const allTask = async () => {
    const data = await getData();
    return data.forEach((data) => {
        // const todo = document.querySelector(".todo");
        const addNewTaskRow = document.createElement("li");
        const checkBox = document.createElement("input");
        const label = document.createElement("label");
        const taskName = document.createTextNode(data.description)
        const taskList = document.getElementById("taskslist")
        const editButton = document.createElement("img");
        const deleteButton = document.createElement("img");
        const editInput = document.createElement("input");


        taskList.appendChild(addNewTaskRow)
        addNewTaskRow.appendChild(checkBox)
        addNewTaskRow.appendChild(label)
        addNewTaskRow.appendChild(editButton)
        addNewTaskRow.appendChild(deleteButton)
        label.appendChild(taskName)
        addNewTaskRow.appendChild(editInput)

        //add task id
        addNewTaskRow.setAttribute("id", data.id)


        //checkbox
        checkBox.type = "checkbox";
        editInput.type = "text";


        //edit task
        editButton.addEventListener("click", (event) => {
            console.log(event)
            const editInput = addNewTaskRow.querySelector("input[type=text]");
            const label = addNewTaskRow.querySelector("label");
            const containsClass = addNewTaskRow.classList.contains("editMode");

            const editTask = (task) => {
                if (containsClass) {
                    label.innerText = editInput.value;
                    // console.log("off")
                    putData(data.id, editInput.value)

                } else {
                    editInput.value = label.innerText;
                    // console.log("on")

                }
                // toggle edit mode
                addNewTaskRow.classList.toggle("editMode");
            }
            editTask()
        })


        //strikethrough
        label.setAttribute("class", "strikethrough")


        // edit button
        editButton.setAttribute("src", "editicon.png")
        editButton.setAttribute("width", "50");
        editButton.setAttribute("height", "50");

        // delete button
        deleteButton.setAttribute("src", "deleteicon.jpg")
        deleteButton.setAttribute("width", "50");
        deleteButton.setAttribute("height", "50");
        deleteButton.addEventListener("click", (event) => {
            return removeData(data.id)
        })
    });
};


allTask();
