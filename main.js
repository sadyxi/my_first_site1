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
function toggleProfile(){
    const box = document.getElementById("profileBox");
    if (box.style.display === "none") {
        box.style.display = "block";
    } else{
        box.style.display ="none";
    }
}
function changeContent() {
  const content = document.getElementById("contentBox");
  content.innerHTML = "<p>📌 新しいコンテンツに切り替わりました！</p>";
}
function showSkills(){
    const skills= ["HTML","CSS","JavaScript","Git","VSCode"];
    const list =document.getElementById("skillsList");
    // 一旦リストを空にする
    list.innerHTML = "";

    // 配列の要素1つずつliにして追加
    for(let i = 0; i < skills.length; i++) {
        const item = document.createElement("li");
        item.textContent = skills[i];
        list.appendChild(item);
    }
}

function showProjects() {
  const projects = [
    { title: "プロフィールサイト", year: 2025 },
    { title: "経費管理アプリ", year: 2025 },
    { title: "音楽プレイヤー", year: 2024 }
  ];

  const list = document.getElementById("projectList");
  list.innerHTML = ""; // リセット

  for (let i = 0; i < projects.length; i++) {
    const item = document.createElement("li");
    item.textContent = `${projects[i].title}（${projects[i].year}年）`;
    list.appendChild(item);
  }
}
function saveName(){
    const name = document.getElementById("savedNameInput").value;
    localStorage.setItem("savedName",name); //データ保存
    showSavedName();
}
function showSavedName(){
    const name = localStorage.getItem("savedName");
    const message = name ? `ようこそ、${name}さん！` : "まだ名前が保存されていません。";
    document.getElementById("savedNameMessage").innerText = message;
}

//
window.onload = function () {
  showSavedName();
};