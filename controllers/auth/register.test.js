const request = require('supertest')
const app = require('../../app')

// eslint-disable-next-line no-undef
describe('test listContacts controller', () => {
  // eslint-disable-next-line no-undef
  beforeAll(() => app.listen(3000))
  // eslint-disable-next-line no-undef
  test('listContacts GET ', async() => {
    const response = await request(app).post('/api/auth/register')
    console.log(response.status)
  })
})
