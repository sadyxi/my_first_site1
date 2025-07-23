function sayHello() {
  alert("こんにちは！さでぃー。さん");
}
function showMessage(){
document.getElementById("message").innerText = "がんばってるね、さでぃー。";
}
function showDateTime(){
    const now = new Date();
    const formatted = now.toLocaleString();
    document.getElementById("datetime").innerText = formatted;
}
function greetUser(){
    console.log("greetUser関数が呼び出されました"); 
   const name = document.getElementById("nameInput").value;
   const message = `こんにちは、${name}さん！`;
   document.getElementById("greetingMessage").innerText = message; 
}
