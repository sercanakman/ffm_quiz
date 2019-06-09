interface ReplacementObject {
    tmpl: string;
    data: {
        [key: string]: string
    };
}

const exampleObject = {
    tmpl: "My friend is a {opt1}",
    data: {
        opt1: "jedi"
    }
};

const exampleString = "I once ate 7 cheesburgers";

const exampleArray = [
    exampleObject,
    exampleString,
];

const exampleNestedArray = [
    exampleObject,
    exampleString,
    exampleArray,
    [
        ...exampleArray,
        [
            ...exampleArray
        ]
    ]
];

const transformDataObjectToString = (object: ReplacementObject): string => {
    let string = object.tmpl;
    if (Object.keys(object.data).length) {
        Object.keys(object.data).map((key: string) => {
            string = string.replace(new RegExp(`{${key}}`), object.data[key]);
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
const processData = (data: any) => {
    switch (data.constructor.name) {
        case 'String': {
            return data;
        }
        case 'Array': {
            const results = [];
            for (let index = 0; index < data.length; index++) {
                results.push(processData(data[index]));
            }
            return results.join('\n');
        }
        case 'Object': {
            return transformDataObjectToString(data);
        }
    }
};

const stringResult = processData(exampleString);
console.log('String Result', stringResult);

const objectResult = processData(exampleObject);
console.log('Object Result', objectResult);

const arrayResult = processData(exampleArray);
console.log('Array Result', arrayResult);

const nestedArrayResult = processData(exampleNestedArray);
console.log('Nested Array Result', nestedArrayResult);
