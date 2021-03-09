import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('Town controller', function () {
  it('it should GET all towns', (done) => {
    // const townController = new TownController({});
    chai
      .request('http://localhost:40000/api/v1')
      .get('/all-towns')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
  });
});
