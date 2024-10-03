// Milan Mislov 101409473

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject('Input must be an array');
        } else {
            const result = mixedArray
                .filter(item => typeof item === 'string') // Filter only string values
                .map(item => item.toLowerCase());        // Convert to lowercase
            resolve(result);
        }
    });
}

// Example:
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));
