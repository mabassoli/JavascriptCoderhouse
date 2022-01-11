// FICHAJE DE OBREROS

let user = prompt("Introduzca su nombre de usuario: ");

alert("Nombre introducido: " + user);

const DNI = Number(prompt("Introduzca su DNI: "));

if ((user == "Waldo") || (user == "waldo")) {
    alert("Bienvenido " + user +"!!!" + " Feliz año!!!");
    console.log(("Usuario: ") + user + (" DNI: ") + Number(DNI));
} else if ((user == "martin") || (user == "Martin")){
    alert("Bienvenido " + user + " usted tiene una deuda de $ARS 30000 con la empresa");
    console.log(("Usuario: ") + user + (" DNI: ") + Number(DNI));
} else {
    alert("Bienvenido " + user);
    console.log(("Usuario: ") + user + (" DNI: ") + Number(DNI));
}