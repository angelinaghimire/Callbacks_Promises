function calculateSum(callback) {
    let sum = 0;
  
    for (let i = 1; i <= 4; i++) {
      sum += i;
    }
  
    callback(null, sum);
  }
  

  function calculateSumPromise() {
    return new Promise((resolve, reject) => {
      calculateSum((error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  
  calculateSumPromise()
    .then((result) => {
      console.log('Sum:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  