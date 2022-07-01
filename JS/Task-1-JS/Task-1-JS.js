var taskObject = {
  firstLevelFirstField: {
    secondLevelFirstField: 1,
    secondLevelSecondField: {
      thirdLevelFirstField: "a2",
      thirdLevelSecondField: {
        fourthLevelFirstField: {
          fifthLevelFirstField: "a2",
          fifthLevelSecondField: 5,
          fifthLevelThirdField: "School",
        },
      },
      thirdLevelThirdField: {},
      thirdLevelFourthField: 500,
    },
    secondLevelThirdField: {},
    secondLevelFourthField: {
      thirdLevelFirstField: "JavaScript",
      thirdLevelSecondField: "margin auto",
      thirdLevelThirdField: "!important is evel",
    },
    secondLevelFifthField: "Async",
  },
  firstLevelSecondField: "easy",
  firstLevelThirdField: 123,
  firstLevelFourthField: {
    secondLevelFirstField: "React.js",
    secondLevelSecondField: {
      thirdLevelFirstField: 42,
    },
  },
};

//проверка на наличие аргументов
function isEmpty(taskObject) {
  for (var arguments in taskObject) {
    return false;
  }
  return true;
}

//проверка типа объекта
function isObject(object) {
  if (
    (typeof object === "object" || object === "function") &&
    object !== null
  ) {
    return true;
  } else {
    return false;
  }
}

//получение имени объекта
var varToString = (varObj) => Object.keys(varObj)[0];

function getName(object) {
  if (isObject(object)) {
    return varToString(object);
  }
  return object;
}
//функция раскрытия "дерева" P.S. Есть баг с выводом первого уровня
function tree(taskObject, n, level = 0, o = taskObject) {
  let output = "";
  for (var i = 0; i < level; i++) {
    output += "----|";
  }
  output += getName(taskObject);
  console.log(output);

  if (n == 0) {
    return;
  }

  if (!isEmpty(taskObject) && isObject(taskObject)) {
    level++;
    n--;
    output += "-----";
    for (var arguments in taskObject) {
      tree(taskObject[arguments], n, level);
    }
  }
}

function isString(elem) {
  if (typeof elem === "string" || elem instanceof String) {
    return true;
  }
  return false;
}

function findSubstring(str, substr) {
  if (str.search(substr) >= 0) {
    console.log("String " + str + " contain substring " + substr);
  }
}

// реализует поиск по файлу и проверяет каждое поле на вхождение заданной строки
function findInObjectTree(taskObject, substr) {
  var name = getName(taskObject);
  if (isString(name)) {
    findSubstring(name, substr);
  }

  if (!isEmpty(taskObject) && isObject(taskObject)) {
    for (var attribute in taskObject) {
      findInObjectTree(taskObject[attribute], substr);
    }
  }
}

var menu = {
  1: function () {
    var level = prompt("Level:", 1);
    tree(taskObject, level);
  },
  2: function () {
    var word = prompt("Word", "x");
    findInObjectTree(taskObject, word);
  },
};
//функция меню
function UserMenu() {
  var rad = prompt("1 - Tree \n 2 - Word", 1);
  menu[rad]();
}
UserMenu();
