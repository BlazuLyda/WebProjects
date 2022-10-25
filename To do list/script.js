class TaskManager {
    constructor() {
        self.taskList = document.querySelector("ul")
        self.inputText = document.getElementById("inputBoxText")
        self.taskId = 0
        self.inputActive = false
    }

    get taskList() {
        return this.taskList
    }
    
    createNewTask() {
        let taskName = document.getElementById("taskInput").value
        if (taskName==="") return
        let template = document.querySelector("template")
        let clone = template.content.cloneNode(true)

        clone.querySelector("li").setAttribute("data-id", self.taskId)
        clone.getElementById("newTaskName").innerHTML = taskName
        
        self.taskList.append(clone)
        let newTask = self.taskList.querySelector(`[data-id='${self.taskId}']`)
        newTask.querySelector("button").onclick = () => {
            self.taskList.removeChild(newTask)
        }
        document.getElementById("taskInput").value = ""
        self.taskId++
    }

    taskNameActive() {
        self.inputActive = true

        self.inputText.style.transform = "translate(-71.5%, -125%)"
        self.inputText.style.fontSize = "1.3rem"
        self.inputText.style.opacity = ".8"
    }

    taskNameReset() {
        self.inputActive = false

        self.inputText.style.transform = "translate(-50%, -50%)"
        self.inputText.style.fontSize = "1.8rem"
        self.inputText.style.opacity = "1"
    }

    manageTaskName(e) {
        const taskInput = document.getElementById("taskInput")

        if (e.target === taskInput && !self.inputActive) {
            this.taskNameActive()
            return
        }
        
        if (e.target !== taskInput && self.inputActive && document.getElementById("taskInput").value === "") {
            this.taskNameReset()
            return
        }
    }
}

const taskManager = new TaskManager

document.getElementById("inputBox").addEventListener("keyup", (e) => {
    if (e.key === "Enter") taskManager.createNewTask()
})

document.addEventListener("click", (e) => taskManager.manageTaskName(e))