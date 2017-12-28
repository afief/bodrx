/* global describe it expect */
const size = require('../../plugins/size')

describe('All Will Pass', () => {
  it('Allow Number', () => {
    expect(size(10, 10)).toBe(true)
  })
  it('Allow String', () => {
    expect(size('hello', 5)).toBe(true)
  })
  it('Allow Array', () => {
    expect(size(['korek', 'api'], 2)).toBe(true)
  })
  it('Allow Object Value', () => {
    expect(size({ rotten: 'tomatoes' }, 1)).toBe(true)
  })
  it('Allow Boolean', () => {
    expect(size(true, 1)).toBe(true)
    expect(size(false, 0)).toBe(true)
  })
})
