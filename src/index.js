module.exports = function check(str, bracketsConfig) {
  let str_length = str.length, number, add = [], checker, barter, nav = 0, nav_nav = 0;
  console.log(str);
  console.log(bracketsConfig);
  let brackets_length = bracketsConfig.length;
  if (str.length % 2 !== 0 || str.length === 0) return false;
  for (let i = 0; i < str_length; i++) {
    number = -1;
    for (let j = 0; j < brackets_length; j++) {
      if (str[i] === bracketsConfig[j][0]) number = j;
    }
    if (number === -1 && i === 0) return false;
    if (number === -1) continue;
    checker = 0;
    barter = 0;
    nav_nav = 0;
    if (str[i] === bracketsConfig[number][1]) {
      for (let k = 0; k < str_length; k++) {
        if (str[k] === bracketsConfig[number][1]) nav_nav++;
      }
      console.log(`${str[i]} : ${nav_nav}`);
      if (nav_nav % 2 === 0);
      else return false;
    }
    else {
      for (let j = i; j < str.length; j++) {
        if (str[j] === bracketsConfig[number][0]) checker++;
        else if (str[j] === bracketsConfig[number][1]) checker--;
        barter++;
        if (checker === 0) break;
      }
      if (checker !== 0) {
        console.log(30);
        console.log(str[i]);
        console.log(checker);
        return false;
      }
      if (barter % 2 !== 0) return false;
    }
  }
  return true;
}
