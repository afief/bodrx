/* eslint-disable*/
module.exports = (val, param) => {
  param = parseFloat(param)

  switch (typeof val) {
    case 'number' :
      return val === param
    case 'boolean' :
      return Number(val) === param
    case 'string' :
      return val.length === param
    case 'object':
      if (Array.isArray(val)) {
        return val.length === param
      } else if (val) {
        return Object.keys(val).length === param
      }
    default:
      return false
  }
}
