// Milan Mislov 101409473

const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'resolved success!' });
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('rejected with an error!'));
        }, 500);
    });
};

resolvedPromise()
    .then(result => console.log(result))    // Output: { message: 'resolved success!' }
    .catch(error => console.error(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));  // Output: Error: rejected with an error!
