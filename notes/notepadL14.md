## NOTES FROM CLASS :

## \*STEPS TO API

\*Don't Forget the shortcut - (`${url}/tasks/......./${id}`)

\*try/ catch method:
(eg deleted)

1. (SEND OUT THE COURIER)
   const / varable = res = await / fetch data = (`${url}/task/delete/${id}`, { method: "DELETE" });
2. (CALL/ CHECK IN WITH COURIER)
   if not (!) - resposed with JSON and send return error message
   if (!res.ok) {
   const err = await res.json();
   return console.error(err.message);
   }
3. (COURIER COMING BACK TO THE SHOP - STORE THE TASKS IN THE "DATA" )
   const data = await res.json();

---

\*console.log (BACKEND) = will display in the 'terminal'
\*console.log (FRONTEND) = will display in the 'browser'

\*EditTask - ID,
Value of /Date / Task = store inside the (taskData)
eg: tasData.title / taskData.dueDate

\*Content-Type = the content coming over is in JSON FORMAT

\*CODE- 200 = OK / standard response for a successful request

\*ShortCut - to find selected code in script / index
( Ctrl + F / pulls up search bar )

---

## task.js

\* deleted 'dummy tasks'
create new folder - routes/ file - task.js
cut + copy API ROUTES into the new folder - 'task.js'
Import = API / express cod / router cod  
\*App. into router. \* export default router - end of cod
\*MONGOOSE - database library that interacts with the database

---

\* Import express from "express"; = using the JS framework, to then use for the "middleware" \* Middleware - only accepts Json data into server / only allow certain access into my server
\*APP - ref to JS express frame work - eg: const app = "express"
\*Router - contorl the API routes \* // LIFE - - ( () => {})(); = function that runs itself

---

ONE DATABASE, WITH CLUSTERS
\*Clusters - way to separate data in your database
