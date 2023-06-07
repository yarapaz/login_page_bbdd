# 🧍 REACT - Login Page connected to DDBB

Welcome to the Login Page connected to database Demo! This project's aim was to build a fully operative login page using Reactjs and Nodejs, as we will need to resort to a **REST API** to get the allowed users' information to redirect ourselves to the proper page according to our permissions.

## 🌐 Link to the App.

Should you like to take a look to the deployed app, download this repository in your local code editor and enjoy!

> ℹ️ Please note that the first time you open the browser, it takes awhile to load.


## 🧱 Project structure

```
|– client (Web)
|   |– src
|     |– components - All React components
|       |– App.js
|       |– React Components (storytelling HTML and JS)
|     |– images
|     |– services
|       |– api - connections to different endpoints
|       |– router - redirect and reload functionalities
|     |– stylesheets - Sass
|       |– components - Components styles
|       |– core - Project styles
|       |– App.scss
|     |– templates - Common re-usable components (buttons, sidebars, etc)


|– server (src)
|   |– static website - automatically generated with Gulp
|       |– static
|          |– css 
|          |– js
|       |– index.html 
|   |– index.js - connection settings and database endpoints and queries
```
> 👉 The project is divided into 2 parts: On the one hand, ```client```, which contains the React App. On the other hand, ```server```, which has the REST API coded in Node.js. 

## 🚀 How to run the Apps.

### Pre-requeriments

You need to have:

1. [```Node```](https://nodejs.org/es/) previously installed in your computer. 

2. Once is installed run in the terminal:

> ```console
>  $npm install
> ```

3. Then install all the dependencies to create your server:

# Express JS 

> ```console
>  $npm install express
> ```

# Cors

> ```console
>  $npm install cors
> ```

# My SQL

> ```console
>  $npm install mysql
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

I recommend you to split the terminal into two and have both starts running at the same time to be able to control server and cliente more accurately.

## 👩‍💻 Author

This App has been developed by Yara Paz.
