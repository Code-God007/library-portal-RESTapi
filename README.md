# library-portal-RESTapi
Simple REST full service providing CRUD endpoints to the library-portal app(React App) made using Node, Express and MongoDB.

### REST api services provided are as follows:

> `/bookList` GET request which returns a JSON response containing array of books object consisting of id, name and author.

> `/add` POST request to add a new book to the DB, which is sent as an object consisting of name and author.

> `/edit/:id` POST request to edit a book on the basis of id from the DB, which is also sent as an object consisting of name and author.

> `/delete/:id` DELETE request to delete a book on the basis of id from the DB.

### To start

> Clone/Download the repository.

> cd into the project directory

> Run the following commands in the terminal

> `$ npm install`

> `$ node start `
