//add task
document.querySelector('.addtask').onsubmit = (task) => {
    postData(task.target.description.value);
}

// const todo = document.querySelector(".todo");

const allTask = async () => {
    const data = await getData();
    return data.forEach((data) => {
        const todo = document.querySelector(".todo");
        const addNewTaskRow = document.createElement("li");
        const checkBox = document.createElement("input");
        const label = document.createElement("label");
        const taskName = document.createTextNode(data.description)
        const taskList = document.getElementById("taskslist")
        const deleteButton = document.createElement("img");

        taskList.appendChild(addNewTaskRow)
        addNewTaskRow.appendChild(checkBox)
        addNewTaskRow.appendChild(label)
        addNewTaskRow.appendChild(deleteButton)
        label.appendChild(taskName)

        //checkbox
        checkBox.type = "checkbox";

        //strikethrough
        label.setAttribute("class", "strikethrough")

        //add task id
        addNewTaskRow.setAttribute("id", data.id)

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
