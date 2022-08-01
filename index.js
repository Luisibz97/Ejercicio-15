const name = "Luis";
const surname = "Ibañez";
const nameAndSurname = {
    name: "Luis",
    surname: "Ibañez"
}

function setCookie(name,value,minExpirate) {
    var expires = (new Date(Date.now() + minExpirate * 60000)).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/;`;
}

setCookie('Person',JSON.stringify(nameAndSurname),2)
