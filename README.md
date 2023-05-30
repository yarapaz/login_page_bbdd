# 🧍 REACT - Login Page connected to DDBB

Welcome to the Login Page Demo! This project's aim was to build a fully operative login page using Reactjs and Nodejs, as we will need to resort to a **REST API** to get the allowed users' information to redirect ourselves to the proper page according to our permissions.

## 🌐 Link to the App.

Should you like to take a look to the deployed app, download this repository in your local code editor and enjoy!

> ℹ️ Please note that the first time you open the browser, it takes awhile to load.


## 🧱 Project structure

```
|– client (web)
|   |– src
|     |– components
|       |– App.js
|       |– React Components (folder / file)
|     |– images
|     |– services
|       |– api - connections to endpoints
|       |– router - redirect and reload functionalities
|     |– stylesheets - Sass
|       |– components (folder)
|       |– core (folder
|       |– App.scss
|     |– templates - common components

|– server (src)
|   |– static website - generated automatically with Gulp
|       |– static
|          |– css (folder)
|          |– js (folder)
|       |– index.html 
|   |– index.js - connection settings and database endpoints and queries
```
> 👉 The project is divided into 2 parts: On the one hand, ```client```, which contains the React App. On the other hand, ```server```, which has the REST API coded in Node.js. 

## 🚀 How to run the Apps.

### Pre-requeriments

You need to have:
1. [```Node```](https://nodejs.org/es/) previously installed in your computer. That will install not only Node JS but as well the NPM in your computer to be able to run it.
2. Once Node JS has been installed you need to install: Express (npm install express), Cors (npm install cors) and My SQL (npm install mysql) to be able to create the server we'll be using from now on.

To start using this project, clone this repo to a new directory.
> ```console
>  $ git clone https://github.com/conchaasensiomr/login_page_demo.git
> ```

### ➡️ Node
***

You have to go to server (root directory of the repository, in this case 'express_connect_2') and run npm start. It is necessary to run the server in order to connect to the database, if not you'll thrown a connection error:

> ```console
> $ cd express_connect_2
> $ npm start
> ```

Now you need to do the same thing on the client side:

> ``` console
> $ cd web
> $ npm start
> ```

## 👩‍💻 Author

This App has been developed by Yara Paz.
