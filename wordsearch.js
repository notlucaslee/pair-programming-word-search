const wordSearch = (letters, word) => {
  if (!letters) return false;
  const horizontalJoin = letters.map(ls => ls.join(''));
  const horizontalBackJoin = letters.map(ls => ls.reverse().join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const verticalBackJoin = transpose(letters).map(ls => ls.reverse().join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (const l of horizontalBackJoin) {
    if (l.includes(word)) return true;
  }
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  for (const l of verticalBackJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const transpose = function(matrix) {
  let result = [];
  let innerArray = [];
  let counter = 0;
  while (counter < matrix[0].length) {
    for (let item of matrix) {
      innerArray.push(item[counter]);
    }
    result.push(innerArray);
    innerArray = [];
    counter++;
  }
  return result;
};

  
module.exports = wordSearch;