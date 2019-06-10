var exampleObject = {
  tmpl: "My friend is a {opt1}",
  data: {
    opt1: "jedi"
  }
};
var exampleString = "I once ate 7 cheesburgers";
var exampleArray = [
  exampleObject,
  exampleString,
];
var exampleNestedArray = [
  exampleObject,
  exampleString,
  exampleArray,
  exampleArray.concat([
    exampleArray.slice()
  ])
];
var transformDataObjectToString = function (object) {
  var string = object.tmpl;
  if (Object.keys(object.data).length) {
    Object.keys(object.data).map(function (key) {
      string = string.replace(new RegExp("{" + key + "}"), object.data[key]);
    });
  }
  return string;
};
/*
    NOTE: the recursiveness is NOT limited to 4 levels deep but rather all-inclusive

    Edge cases are not handled (as not specified in the required context) such as:
    - a mismatch of length between replacement and replacer values
        (i.e one existing in tmpl, the other missing in data or vice versa)
    - case sensitivity of replacements
    - multiple occurences of the replacement (i.e {opt1} = happy:  'I am a {opt1}, {opt1} cat' equalling 'I am a happy happy cat')
    - ReplacementObject (interface) validation (does not throw error or warn user
        if there is an invalid object provided (or as a child of array)
 */
var processData = function (data) {
  switch (data.constructor.name) {
    case 'String': {
      return data;
    }
    case 'Array': {
      var results = [];
      for (var index = 0; index < data.length; index++) {
        results.push(processData(data[index]));
      }
      return results.join('\n');
    }
    case 'Object': {
      return transformDataObjectToString(data);
    }
  }
};
var stringResult = processData(exampleString);
console.log('String Result', stringResult);
var objectResult = processData(exampleObject);
console.log('Object Result', objectResult);
var arrayResult = processData(exampleArray);
console.log('Array Result', arrayResult);
var nestedArrayResult = processData(exampleNestedArray);
console.log('Nested Array Result', nestedArrayResult);
