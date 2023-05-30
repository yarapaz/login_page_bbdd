const sendLoginToApi = (login) => {
  return fetch("http://localhost:8088/users", {
    method: "POST",
    body: JSON.stringify(login),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

//Hacer diferentes fetch dependiendo de la url
let hostname = window.location.hostname;
console.log(hostname);

export default sendLoginToApi;
