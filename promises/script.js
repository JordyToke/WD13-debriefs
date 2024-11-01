// select DOM element with id myPromise
const promisePara = document.querySelector("#myPromise");


const getUserData = (userJsonUrl) =>
  fetch(userJsonUrl)
  .then(userJson =>
    userJson.json())
  .then((user) => 
    promisePara.innerHTML = 
    `<table style="border: 1px solid black">
    <caption style="color: white;background-color: black">User Data Table</caption>
    <thead style="background-color: lightgrey">
      <tr>
        <th scope="col">Keys</th>
        <th scope="col">Values</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <th>firstName</th>
      <td>${user.firstName}</td>
    </tr>
    <tr>
      <th>lastName</th>
      <td>${user.lastName}</td>
    </tr>
    <tr>
      <th>age</th>
      <td>${user.age}</td>
    </tr>
    <tr>
      <th>country</th>
      <td>${user.country}</td>
    </tr>
    </tbody>
    </table>`
  )
  .catch(error => 
    console.log(error)
  )

getUserData("./user.json");