function sayHello() {
  alert("こんにちは！さでぃー。さん");
}
function showMessage(){
document.getElementById("message").innerText = "がんばってるね、さでぃー。";
}
function showDateTime(){
    const now = new Date();
    const formatted = now.toLocaleDateString();
    document.getElementById("datetime").innerText = formatted;
}