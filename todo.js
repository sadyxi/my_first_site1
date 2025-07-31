function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task === "") {
    alert("やることを入力してください！");
    return;
  }

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);

  taskInput.value = ""; // 入力欄を空にする
}