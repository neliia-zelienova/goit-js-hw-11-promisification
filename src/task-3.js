// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, 
// а принимала всего один параметр transaction и возвращала промис.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
    
    
    const promise = new Promise((resolve, reject) => {
        const delay = randomIntegerFromInterval(200, 500);
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
            if (canProcess) {
                resolve([transaction.id, delay]);
            } else {
                reject(transaction.id);
            }
        }, delay);
    }
    );
    return promise;
};

const logSuccess = ([id, time]) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

export {
    makeTransaction,
    logSuccess,
    logError
}