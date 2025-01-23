import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../../../index.js'
import sinon from 'sinon'
const { expect } = chai

chai.use(chaiHttp)

afterEach(() => {
  sinon.restore()
})

describe('GET /files/data', function () {
  it('should fetch all files data and return status 200', function (done) {
    chai.request(server)
      .get('/files/data')
      .end(function (err, res) {
        if (err) done(err)
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('array')
        done()
      })
  })
})

describe('GET /files/data?fileName=file', function () {
  it('should fetch data and return status 200 with the correct fileName', function (done) {
    chai.request(server)
      .get('/files/data?fileName=test9.csv')
      .end(function (err, res) {
        if (err) done(err)
        expect(res).to.have.status(200)
        done()
      })
  })

  it('should return status 500 with the invalid fileName', function (done) {
    chai.request(server)
      .get('/files/data?fileName=test9.cs')
      .end(function (err, res) {
        if (err) done(err)
        expect(res).to.have.status(500)
        done()
      })
  })
})
