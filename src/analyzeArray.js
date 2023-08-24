function analyzeArray(arr) {
    let result = {};
    result.average = (arr.reduce((acc, num) => acc + num, 0)) / arr.length; 
    result.min = Math.min(...arr)
    result.max = Math.max(...arr)
    result.length = arr.length;

  return result;
}

module.exports = analyzeArray;