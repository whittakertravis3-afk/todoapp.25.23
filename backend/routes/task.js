import express from "express";
const router = express.Router();
import Task from "../models/Task.js";

//------ GET TASKS -------
router.get("/tasks", async (req, res) => {
  //#1 allows us to collect the info for the tasks from the dadaBase
  try {
    const filter = {};
    if (req.query.completed === "true") filter.completed = true;
    if (req.query.completed === "false") filter.completed = false;

    let query = Task.find(filter); // find all completed. incompleted tasks
    if (req.query.sort === "dueDate") query = query.sort({ dueDate: 1 }); //  #2 sorts it to the users request

    const tasks = await query;
    res.json({ message: "Tasks have landed", tasks: tasks }); //  #3 brings it back to the user
  } catch (error) {
    console.log("Tasks failed to land", error);
    res.status(500).json({ message: "Tasks failed to land" }); //  #4 sends us a error message if not acceptable, which we will see in our front end console - will show you that
  }
});

//✅

//------- CREATE / POST--------
router.post("/tasks/new", async (req, res) => {
  //#1 this is the route for creating a new task, it takes the task, we created and sends request body and creates a new task in the database
  try {
    const { title, dueDate } = req.body;

    const newTask = await Task.create({
      //#2 this creates a new task in the database with the title and due date that we sent in the request body
      title: title,
      dueDate: dueDate,
    });

    res.json({ message: "Quest Created", task: newTask });
  } catch (error) {
    console.log("Task is ineffective:", error); //#3 again ERRROR HAHAHA
    res.status(500).json({ message: "Task is ineffective" });
  }
});
//✅

//------- COMPLETE / PATCH --------
router.patch("/tasks/complete/:id", async (req, res) => {
  try {
    const taskId = req.params.id; //#1 this is the route for marking a task as complete, it takes the id of the task we want to update in the url and sets the completed field to true
    const task = await Task.findByIdAndUpdate(
      taskId,
      { completed: true },
      { returnDocument: "after" },
    );

    if (!task) {
      return res.status(404).json({ message: "Task, Back In 5min!" }); //#2 if the task is not found, it returns a 404 status with a message indicating that the task is back in 5 minutes 😁
    }

    res.json({ message: "Mission Accomplished", task: task });
  } catch (error) {
    console.log("Task Can Not Leave The Station:", error); //-- INTERNAL --
    res.status(500).json({ message: "Task Can Not Leave The Station" }); //-- EXTERNAL --
  }
});
//✅

//------- INCOMPLETE / PATCH --------
router.patch("/tasks/incomplete/:id", async (req, res) => {
  //#1 this is the route for marking a task as incomplete, it takes the id of the task we want to update in the url and sets the completed field to false
  try {
    const taskId = req.params.id; //#2 this sends the id of the task we want to update
    const task = await Task.findByIdAndUpdate(
      taskId,
      { completed: false },
      { returnDocument: "after" },
    );

    if (!task) {
      return res.status(404).json({ message: "Task Is On The Move!" }); //#3 if the task is not found, it returns a 404 status with a message indicating that the task is on the move
    }

    res.json({ message: "Quest failed successfully", task: task });
  } catch (error) {
    console.log("Quest failed successfully:", error);
    res.status(500).json({ message: "Quest failed successfully" });
  }
});
//✅

//------- DELETE --------
router.delete("/tasks/delete/:id", async (req, res) => {
  //#1 this is the route for deleting a task, it takes the id of the task we want to delete in the url and deletes it from the database
  try {
    const taskId = req.params.id; //#2 this sends the id of the task we want to delete in the url
    const task = await Task.findByIdAndDelete(taskId);

    if (!task) {
      return res.status(404).json({ message: " Quest not found!" });
    }

    res.json({ message: "The task… has vanished", task: task });
  } catch (error) {
    console.log("Failed to EXECUTE task :", error); //-- INTERNAL --
    res.status(500).json({ message: "Failed to EXECUTE task" }); //-- EXTERNAL --
  }
});
//✅
//------- UPDATING / PUT --------
router.put("/tasks/edit/:id", async (req, res) => {
  //#1 this is the route for updating a task, it takes the id of the task we want to update in the url and updates the title and due date

  try {
    const taskId = req.params.id; //#2 this sends the id of the task we want to update in the url
    const { title, dueDate } = req.body;

    const updatedTask = {
      title: title,
      dueDate: dueDate,
    };

    const task = await Task.findByIdAndUpdate(taskId, updatedTask, {
      //#3 this updates the task with the new title and due date, and returns the updated task
      returnDocument: "after",
    });

    if (!task) {
      return res.status(404).json({ message: "The task… has vanished" }); //#4 if the task is not found, it returns a 404 status
    }

    res.json({ message: "Quest UPDATED, head to the pearl!", task: task });
  } catch (error) {
    console.log(
      "I tried to edit the task, but it appears the task had other plans",
      error,
    );
    res.status(500).json({
      message:
        "I tried to edit the task, but it appears the task had other plans",
    });
  }
});
//✅

export default router;
