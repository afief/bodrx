/* global describe it expect */
const required = require('../../plugins/required')
const to = {
  a: 10,
  b: 'exists',
  c: [1, 2, 3, null, 'hore'],
  d: null,
  e: undefined,
  f: false,
  g: true
}

describe('All Will Pass', () => {
  it('Allow Number', () => {
    expect(required(to.a)).toBe(true)
  })
  it('Allow String', () => {
    expect(required(to.b)).toBe(true)
  })
  it('Allow Array', () => {
    expect(required(to.c)).toBe(true)
  })
  it('Allow Null Value', () => {
    expect(required(to.d)).toBe(true)
  })
  it('Allow Boolean True', () => {
    expect(required(to.f)).toBe(true)
    expect(required(to.g)).toBe(true)
  })
})

describe('All Will Not Pass', () => {
  it('Dont Allow Undefined Object', () => {
    expect(required(to.e)).toBe(false)
    expect(required(to.h)).toBe(false)
  })
})
