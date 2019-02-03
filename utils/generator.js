//Generate random number
const generator = function(min, max){
    return Math.floor(Math.random() * (max-min)+ min);
}

module.exports = generator;
