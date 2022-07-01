import { generateName } from "/nameGen.js"; //Рандомайзер имен для теста
//Рандомайзер для теста
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var taskObject = []; //Тестовый массив

//Тестовое заполнение массива
for (var i = 0; i < 50; i++) {
  taskObject[i] = {
    name: generateName(),
    class: getRandom(12, 1),
    mark: getRandom(6, 1),
  };
}
console.log(taskObject);
//Средний балл всех учашихся
function average(taskObject) {
  var n = 0;
  for (var i in taskObject) {
    var l = taskObject[i];
    n += l.mark;
  }
  console.log(n / taskObject.length);
}
//Средний балл класса
function averageClass(taskObject) {
  for (var j = 1; j < 12; j++) {
    var n = 0;
    var cnt = 0;
    for (var i in taskObject) {
      var l = taskObject[i];
      if (l.class == j) {
        cnt++;
        n += l.mark;
      }
    }
    console.log(n / cnt);
  }
}
// ТОП 5 учащихся
function TopStudents(taskObject) {
  //Сортировка по оценке
  taskObject.sort(function sortMark(a, b) {
    if (a.mark > b.mark) return -1;
    if (a.mark === b.mark) return 0;
    if (a.mark < b.mark) return 1;
  });

  taskObject = taskObject.slice(0, 5);
  //Сортировка по имени
  taskObject.sort(function sortName(a, b) {
    if (a.name > b.name) return 1;
    if (a.name === b.name) return 0;
    if (a.name < b.name) return -1;
  });
  //Форматирование вывода
  var output = "";
  for (let i = 0; i < 5; i++) {
    output +=
      "Name: " +
      taskObject[i].name +
      ", mark: " +
      taskObject[i].mark +
      ", class: " +
      taskObject[i].class +
      "\r\n";
  }
  console.log(output);
}

function menu() {
  var task = prompt(
    "1 - Аverage score \n 2 - Average score (class) \n 3 - Top 5 best students ",
    1
  );
  if (task == 1) {
    average(taskObject);
  } else {
    if (task == 2) {
      averageClass(taskObject);
    } else {
      TopStudents(taskObject);
    }
  }
}
menu();
