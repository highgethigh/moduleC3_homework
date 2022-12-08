/*const exampleObj = {
    city: 'Moscow',
    since: 1147
};
*/       // example as city

function printOwnProperty(exampleObj) {
    for (let key in exampleObj) {
        if (exampleObj.hasOwnProperty(key)) {
            console.log(key, exampleObj[key]);
        }
    }
}


// printOwnProperty(exampleObj);  - call function 