module.exports = function check(str, config) {
  if (typeof (str) !== "string" || str.split("").length % 2 !== 0) return false
  var opPair = [], clPair = [], opStack = [], clStack = []
  console.log(config)
  console.log(str)
  for (let key of config) {
    opPair.push(key[0])
    clPair.push(key[1])
  }
  let strMass = str.split("")
  for (let key of strMass) {
    if (opPair.indexOf(key) >= 0 && clPair.indexOf(key) < 0) { // OP [NonPair]
      opStack.push(key)
    }
    if(opPair.indexOf(key) >= 0 && clPair.indexOf(key) >= 0){ // OP [Pair]!!!
      if(opStack[opStack.length-1] === key) opStack.pop()
      else opStack.push(key)
    }
    if(opPair.indexOf(key) < 0 && clPair.indexOf(key) >= 0){ // CL [NonPair]
      if(opStack[opStack.length-1]===opPair[clPair.indexOf(key)]) opStack.pop()
      else opStack.push(key)
    }
  }
  if(opStack.length===0 && clStack.length===0) return true
  else return false
}
