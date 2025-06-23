document.getElementById("loginform").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errormessage = document.getElementById("error-mensage");

//Simula credenciais validas (Não usar assim em produção)
const validUsername = "admin";
const validPassword = "123456";

if (username === validUsername && password === validPassword) {
    alert("Login bem sucedido");
    //Aqui voce pode redirecionar para outra pagina
    window.location.href = "www.google.com" ;
} else {
  errormessage.textContent  = "Usuario ou senha incorreto"
}
});