function cariDuplikat(nums) {
  let result = [];
  for (var i = 0; i < nums.length; i++) {
    let value = Math.abs(nums[i]);
    let index = value - 1;
    if (nums[index] < 0) {
      result.push(value);
    } else {
      nums[index] *= -1;
    }
  }
  return result.length;
}

console.log(cariDuplikat([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
