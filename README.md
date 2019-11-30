TO DO LIST APP

Application has built using Angular CLI, Angular 8, RESTful API, Bootstrap and JSON server for testing CRUD functions.

Fuctions presented in this app are:
- CRUD - display, adding new tasks, updating of existing tasks and deleting
- individual deleting and multiple deleting using check box
- search/filtering data from table
- sorting data from table
- pagination
- connection with JSON server for storing inserted data and testing CRUD functions.

Launching the application:

1. Install Angular CLI
npm install @angular/cli -g

2. Install Bootstrap
npm install bootstrap

3. Download file from Github

4. Install JSON server
npm install -g json-server
npm touch server/db.json 

5. Initiate JSON server
json-server --watch server/db.json

6. Check if db.json file is on json server, open: http://localhost:3000/tasks

7. Initiate Angular application within the downloaded project
ng serve --open
Open: http://localhost:4200


