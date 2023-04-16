export const isAscendingArr = (arr: number[]) => {
  if (!Array.isArray(arr)) {
    return false;
  }
  
  if (arr.some(element => typeof element !== 'number')) {
    return false;
  }
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  
  return true;
};
