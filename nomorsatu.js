const kaosKaki = (items) => {
  const arr = items;
  const duplicates = Array.from(
    new Set(arr.filter((item, i, array) => i !== array.indexOf(item)))
  );

  const value = arr.filter(
    (item) => item === duplicates.find((dup) => dup === item)
  );

  const total = value.length;

  const res = total % 2 === 0 ? total / 2 : (total - 1) / 2;
  return res;
};

console.log(kaosKaki([5, 7, 7, 9, 10, 4, 5, 10, 6, 5]));
