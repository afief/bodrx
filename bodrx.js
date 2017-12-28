const plugins = require('./plugins')

const checkRule = function (data, rule) {
  const params = rule.split(':')
  const pluginName = params.shift()
  const plugin = plugins[pluginName] || false

  if (plugin) {
    return plugin(pluginName, ...params)
  }
  return false
}

const checkRules = function (data, rulesString) {
  const rules = rulesString.split('|')
  console.log('check rules', data, rules)
  let pass = true
  for (let i = 0; (i < rules.length && pass); i++) {
    pass = checkRule(data, rules[i])
  }
  return pass
}

module.exports = function (data, rules) {
  const result = {}
  const errors = {}

  for (let prop in rules) {
    if (checkRules(data[prop], rules[prop])) {
      result[prop] = data[prop]
    } else {
      errors[prop] = data[prop]
    }
  }

  return {
    all: data,
    result,
    errors
  }
}
