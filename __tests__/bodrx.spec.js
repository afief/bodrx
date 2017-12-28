/* global describe it expect */

const bodrx = require('../bodrx')

describe('Passes', async () => {
  it('Shold get the result', async () => {
    const data = {
      name: 'Gundala Putra Petir',
      volt: 200000
    }
    const response = bodrx(data, {
      'name': 'required',
      'address': 'required|size:10'
    })
    console.log(response)
  })
})
