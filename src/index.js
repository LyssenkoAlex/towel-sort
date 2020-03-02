
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix !== [] && matrix !== undefined &&  matrix.length > 0  ? matrix.reduce((block, index, idx) => {
      if(idx % 2 === 0) {
          return block.concat(index);
      }
      else {
          return block.concat(index.reverse());
      }
  }) : [];
}
