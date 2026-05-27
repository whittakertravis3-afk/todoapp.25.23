## NOTES FROM CLASS:

\*Terminal > (open shortcut - Ctrl + ~)
\*NEW COMMAND - (cd backend / npm run dev)

\*When opening a new terminal, always START WITH..
\*CD - (Change Directory) - eg (cd backend)

\*Express = Frame work for JS (backend)
\*NodeJS - sandbox on the computer
\*NPM - (Node Package Manager) - helps install packages for projects
\*PWD - (Print Workinng Directory)
\*LS - (List)
\*CommonJS - (big error message - change to Module)
\*Kill Server - (Ctrl + C) = everytime you make a change to (Index.JS) + Reload / install package

\*Nodemon wasn't working - (Package.json/ scripts/ under "test" / added -"dev": "nodemon index.js" )
\*Dev - Developer mode
\*Start - Production mode

\*Server has many highways - middleware (job) directs it in the right place / the right data type, the right matter etc
\*Use the data fromm Json
\*Sercurity uses lots more 'middleware' for authentication

\*API - Application Programming Interface
2way bridge - send a request to a server / recieve a response back from the server

1s. eg = Get data from the end point / return the respone from the userData

\*API ROUTE: - BACKEND
app.get("/users", (req, res) => {
res.json(userData);
});

\*API CALL: - FRONTEND

\*Async - happens independently with the console.log - anything external / use ASYNC operations

CRUD: - HTTP METHODS
*Creating = Post Method
*Reading = Get Method
*Updating = Put/ Patch Method
*delete = Delete Method
