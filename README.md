## DataBase

MySQL engine has been used.\
The database import file is named as 

> [test_api.sql](https://github.com/bagav1/backend_Node/blob/master/test_api.sql "test_api.sql")

## Available Scripts

### `npm install`

The command `npm install` must be run in order to install all the dependencies used.

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
This command will open the script on port `3001` *(or in custom port)*.

And since it also executes the `nodemon` command, all the changes made will be reflected instantly.

## Routes

As only one table was created, the endpoints are the basic ones to perform CRUDs.

| Method | Route | Description
|--|--|--|
| **`GET`**  | /api/personal | Return all data. |
| **`GET`**  | /api/personal/:id | Returns the record specified by the `id`. |
| **`POST`**  | /api/personal | Create a new record. |
| **`PUT`**  | /api/personal/:id' | Update the record specified by the `id`. |
| **`DELETE`**  | /api/personal/:id | Delete the record specified by the `id`. |
