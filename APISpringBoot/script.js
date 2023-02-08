//"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="c:/carpeta_temporal

function getUsersByID(idUser) {
    let url = "http://localhost:8080/usuarios/" + idUser;//http://localhost:8080/usuarios/  
    fetch(url
        //, {
        //'mode': 'no-cors',
        //'headers': {
         //   'Access-Control-Allow-Origin': '*',
       // }
    //}
    ).then((response) => { //http://localhost:1337/api/usuarios/
        //console.log(response.json());
        return response.json();
    })
        .then((data) => {
            let element = data;
            console.log(element.id);
            console.log(url);
            document.getElementById("userID").innerHTML = data.id;
            document.getElementById("getName").innerHTML = data.name;
            document.getElementById("getSurname").innerHTML = data.surname;
            document.getElementById("getEmail").innerHTML = data.email;
            document.getElementById("getPhone").innerHTML = data.phone;
            document.getElementById("getBirthdate").innerHTML = data.birthdate;
            document.getElementById("getCountry").innerHTML = data.country;
            document.getElementById("getReference").innerHTML = data.reference;
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement("input");
    button.type = "button";
    button.id = "getUserbyID";
    button.value = "GET USERS BY ID";

    button.onclick = function () {
        var x = document.getElementById("inputID").value;
        getUsersByID(x);
    };

    var container = document.getElementById("getUserByID");
    container.appendChild(button);
    let br = document.createElement("br");
    container.appendChild(br);
}, false);

function getUsers() {
    let url = "http://localhost:8080/usuarios/";
    let divUsers = document.getElementById("users");
    let list = document.createDocumentFragment();
    fetch(url).then((response) => {
        //console.log(response.json());
        return response.json();
    })
        .then((data) => {
            let users = data;
            users.forEach(element => {
                // console.log(element.attributes.Nombre);
                let p = document.createElement("p");
                let userID = document.createElement("div");
                let name = document.createElement("div");
                let surname = document.createElement("div");
                let email = document.createElement("div");
                let phone = document.createElement("div");
                let birthdate = document.createElement("div");
                let country = document.createElement("div");
                let reference = document.createElement("div");
                userID.innerHTML = element.id;
                name.innerHTML = element.name;
                surname.innerHTML = element.surname;
                email.innerHTML = element.email;
                phone.innerHTML = element.phone;
                birthdate.innerHTML = element.birthdate;
                country.innerHTML = element.country;
                reference.innerHTML = element.reference;
                p.appendChild(userID);
                p.appendChild(name);
                p.appendChild(surname);
                p.appendChild(email);
                p.appendChild(phone);
                p.appendChild(birthdate);
                p.appendChild(country);
                p.appendChild(reference);
                list.appendChild(p);
                divUsers.appendChild(list);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}

function postUser(object) {
    const url = "http://localhost:8080/usuarios/";

    let request = new Request(url, {
        method: "POST",
        body: JSON.stringify({ data: object }),
        headers: new Headers({
            "Content-Type": "application/json; charset=UTF-8"
        })
    });

    fetch(request)
        .then(function () {
            // Handle response you get from the API
            console.log(request);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement("input");
    button.type = "button";
    button.id = "submit";
    button.value = "POST";

    button.onclick = function () {
        let nameInput = document.getElementById("name").value;
        let surnameInput = document.getElementById("surname").value;
        let emailInput = document.getElementById("email").value;
        //let passwordInput = document.getElementById("password").value;
        let phoneInput = document.getElementById("phone").value;
        let birthdateInput = document.getElementById("birthdate").value;
        let countryInput = document.getElementById("country").value;
        let referenceInput = document.getElementById("reference").value;

        let user = {
            name: nameInput,
            surname: surnameInput,
            email: emailInput,
            //password: passwordInput,
            phone: phoneInput,
            birthdate: birthdateInput,
            country: countryInput,
            reference: referenceInput
        };

        console.log(nameInput + " " + surnameInput + " " + emailInput + " " + phoneInput + " " + birthdateInput + " " + countryInput + " " + referenceInput);
        /*let test = {
            name: nameInput,
            job: surnameInput,
        };*/

        postUser(user);
        //console.log(document.getElementById("name").value);
    };

    var container = document.getElementById("POST");
    container.appendChild(button);
}, false);

function putUser(object) {
    const url = "http://localhost:8080/usuarios/";

    let request = new Request(url, {
        method: "PUT",
        body: JSON.stringify({ data: object }),
        headers: new Headers({
            "Content-Type": "application/json; charset=UTF-8"
        })
    });

    fetch(request)
        .then(function () {
            // Handle response you get from the API
            console.log(request);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    var buttonPUT = document.createElement("input");
    buttonPUT.type = "button";
    buttonPUT.id = "submit";
    buttonPUT.value = "PUT";

    buttonPUT.onclick = function () {
        let nameInput = document.getElementById("name").value;
        let surnameInput = document.getElementById("surname").value;
        let emailInput = document.getElementById("email").value;
        //let passwordInput = document.getElementById("password").value;
        let phoneInput = document.getElementById("phone").value;
        let birthdateInput = document.getElementById("birthdate").value;
        let countryInput = document.getElementById("country").value;
        let referenceInput = document.getElementById("reference").value;

        let user = {
            name: nameInput,
            surname: surnameInput,
            email: emailInput,
            //password: passwordInput,
            phone: phoneInput,
            birthdate: birthdateInput,
            country: countryInput,
            reference: referenceInput
        };

        console.log(nameInput + " " + surnameInput + " " + emailInput + " " + phoneInput + " " + birthdateInput + " " + countryInput + " " + referenceInput);
        /*let test = {
            name: nameInput,
            job: surnameInput,
        };*/

        putUser(user);
    };

    var container = document.getElementById("PUT");
    container.appendChild(buttonPUT);
}, false);

function deleteUser(idUser) {
    const url = "http://localhost:8080/usuarios/" + idUser;
    let request = new Request(url, { method: "DELETE" });

    fetch(request)
        .then(function () {
            // Handle response you get from the API
            console.log(request);
            alert("USER DELETED");
        });
}

document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement("input");
    button.type = "button";
    button.id = "submit";
    button.value = "DELETE";

    button.onclick = function () {
        var x = document.getElementById("inputID").value;
        deleteUser(x);
    };

    var container = document.getElementById("DELETE");
    container.appendChild(button);
}, false);
//deleteUser(1);


//https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data