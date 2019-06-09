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
    {
        tmpl: "I like to {opt1}, {opt2}",
        data: {
            opt1: "ride my",
            opt2: "bicycle"
        },
    },
    "I like to ride my bike",
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
    Edge cases are not handled (as not specified in the required context) such as:
    - a mismatch of length between replacement and replacer values (one existing, the other missing)
    - case sensitivity of replacements
    - multiple occurences of the replacement (i.e I am a {opt1}, {opt1} cat with opt1 equaling cat)
    - ReplacementObject (interface) validation
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
