//Тестовые данные
////////////////////////////////////////////////////
var obj1 = {
  firstName: "Vasya",
  lastName: "Pupkin",
};

var obj2 = {
  firstName: "Vasya",
  lastName: "Pupkin",
};

var test1objNest1 = {
  firstName: "Vasya",
  lastName: "Pupkin",
  father: {
    firstName: "Ivan",
    lastName: "Pupkin",
  },
};

var test1objNest2 = {
  firstName: "Vasya",
  lastName: "Pupkin",
  father: {
    firstName: "Ivan",
    lastName: "Pupkin",
  },
};

var test2objNest1 = {
  firstName: "Vasya",
  lastName: "Pupkin",
  father: {
    firstName: "Ivan",
    lastName: "Pupkin",
  },
};

var test2objNest2 = {
  firstName: "Vasya",
  lastName: "Pupkin",
  father: {
    firstName: "Ivan",
    lastName: "Putin",
  },
};

var test3objNest1 = {
  firstName: "Vasya",
  lastName: "Pupkin",
  father: {
    firstName: "Ivan",
    lastName: "Pupkin",
  },
};

var test3objNest2 = {
  firstName: "Vasya",
  lastName: "Pupkin",
  father: {
    firstName: "Ivan",
    Name: "Pupkin",
  },
};

var test4objNest1 = {
  firstName: "Vasya",
  lastName: "Pupkin",
  father: {
    firstName: "Ivan",
    lastName: "Pupkin",
  },
};

var test4objNest2 = {
  firstName: "Vasya",
  lastName: "Pupkin",
};
////////////////////////////////////////////////////
//Добавление свойства length к прототипу объекта
if (!Object.prototype.length) {
  Object.defineProperty(Object.prototype, "length", {
    get: function () {
      return Object.keys(this).length;
    },
  });
}
//функция сравнения
function isObjectsEqual(obj1, obj2) {
  if (obj1.length != obj2.length) {
    return false;
  }

  for (var prop in obj1) {
    if (isObject(obj1[prop]) && isObject(obj2[prop])) {
      var res = isObjectsEqual(obj1[prop], obj2[prop]);
      if (res === false) {
        return false;
      }
    } else if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }

  return true;
}

function isObject(object) {
  if (
    (typeof object === "object" || typeof object === "function") &&
    object !== null
  ) {
    return true;
  }
  return false;
}
//Тесты
/////////////////////////////////////////////////////////////////////////
console.log(isObjectsEqual(obj1, obj2)); //true                       ///
console.log(isObjectsEqual(test1objNest1, test1objNest2)); //true     ///
console.log(isObjectsEqual(test2objNest1, test2objNest2)); //false    ///
console.log(isObjectsEqual(test3objNest1, test3objNest2)); //false    ///
console.log(isObjectsEqual(test4objNest1, test4objNest2)); //false    ///
/////////////////////////////////////////////////////////////////////////
