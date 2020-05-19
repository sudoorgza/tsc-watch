const { expect } = require('chai');
const runner = require('../lib/runner');

describe.only('Runner', () => {
  it('Should start a long running process and kill it before it finishes', async () => {
    const kill = runner('sleep 10')
    const result = await kill()
    expect(result).to.deep.equal([0,null])
  })
  it('Should start a short running process and not kill it before it finishes', async () => {
    const kill = runner('echo')
    const result = await kill()
    expect(result).to.deep.equal([1,0])
  })
})
