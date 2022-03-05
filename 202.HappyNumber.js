var isHappy = function(n) {
    let currentSum = n;
    const trackSum = new Map();


    while(true){
        const numbers = currentSum.toString().split("");
        let total = 0;
        numbers.forEach(currN=>{

           total +=  Math.pow(currN,2)
        })

        currentSum = total;

        if(currentSum === 1) return true

        if(trackSum.has(currentSum)){
            return false;
        }else{
            trackSum.set(currentSum, true)
        }


    }
    
};

const n =2

console.log(isHappy(n))