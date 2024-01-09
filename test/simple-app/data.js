const createObjects = (n) => {
  const objects = [];
  for (let i = 1; i <= n; i++) {
    const obj = {
      name: `Object ${i}`,
      value: i * 10,
      id: i,
    };
    objects.push(obj);
  }
  return objects;
};

module.exports = {
  createObjects,
};
