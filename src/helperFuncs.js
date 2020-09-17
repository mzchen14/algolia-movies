const createStar = (rating) => {
  let result = new Array(5).fill(0);
  for (let i = 0; i < rating; i++) {
    result[i] = 1;
  }
  return result;
};

export { createStar };
