## NOTES FROM CLASS:

\*ALWAYS MAKE SURE TO (CTRL + S) - AFTER EVERY NEW CHANGE!

\*Error message - check using the right code symbols

\*Application/json - send the request over / send the data over in json format

\*Changed - "success" with "tasks" / res.json(tasks) = is talking with "tasks" from DUMMY TASKS.

\*CONST / DUMMY TASK - (let id = 1;) - replace ID numbers with (id: id++) = means last "ID" implemented by one

\* ARRAY = Collection of data - always starts with "0"
( find a certain index )

// ----- SETTING NEW TASK / POST ------
\*Const ( title, dueDate ) = req.body; = information from the body
("title": "Test Task", / "dueDate": "2026-03-20", / "completed": false ) = body of the req.

\*Everytime we create a new task (createAt:) = ( Date.now() ) / = locks the time on computer
\*Completed: (value) = false / = as tasks are yet to do
\*Always send back #1 res = to connect the bridge

\*PROGRAM ERROR MESSAGE - backend \*
#GET METHOD -
(CUT - res.json(tasks);) / replace with ( tryCatch)
INSIDE - ( TRY ) : 🔽
res.json(tasks);
INSIDE - (CATCH ) :🔽
console.log("Failed to get tasks:", error); //-- INTERNAL --
res.status(5000).json({ message: "Failed to get task" }); //-- EXTERNAL --

---

#POST METHOD -
(CUT - res.json(tasks);) / replace with ( tryCatch)
INSIDE - ( TRY ) : 🔽
const { title, dueDate } = req.body;

    const newTask = {
      id: id++,
      title: title,
      dueDate: dueDate,
      completed: false,
      createdAt: Date.now(),
    };
    tasks.push(newTask);

    res.json({ message: "created a task", task: newTask });

INSIDE - ( CATCH ) : 🔽
console.log("Failed to create tasks:", error); //-- INTERNAL --
res.status(5000).json({ message: "Failed to create task" }); //-- EXTERNAL --

---

#PATCH METHOD -

\* Same method for COMP / INCOMP - making sure to change the sub text - [eg: Failed to complete task / task is incomplete ]

(CUT - res.json(tasks);) / replace with ( tryCatch)
INSIDE - ( TRY ) : 🔽
const taskId = req.params.id;
const task = tasks.find((item) => item.id == taskId);

     if (!task) {
      return res.status(404).json({ message: "Task not found!" });
    }

    task.completed = true;

    res.json({ message: "Task completed", task: task });

INSIDE - ( CATCH ) : 🔽
console.log("Failed to complete tasks:", error); //-- INTERNAL --
res.status(500).json({ message: "Failed to complete task" }); //-- EXTERNAL --

---

#DELETE METHOD -
(CUT - res.json(tasks);) / replace with ( tryCatch)
INSIDE - ( TRY ) : 🔽
const taskId = req.params.id;
const index = tasks.findIndex((item) => item.id == taskId);

    if (index == -1) {
      return res.status(404).json({ message: "Task not found!" });
    }

    const [task] = tasks.splice(index, 1);

    res.json({ message: "Task deleted", task: task });

    INSIDE - ( CATCH ) : 🔽
     console.log("Failed to delete task:", error); //-- INTERNAL --
    res.status(500).json({ message: "Failed to delete task" }); //-- EXTERNAL --
