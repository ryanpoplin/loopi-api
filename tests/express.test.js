// mocha is installed globally
var superagent = require('superagent');
var expect = require('expect.js');

describe('express rest api server', function () {

  var id;

  it('posts an object', function (done) {
    superagent.post('http://localhost:3000/collections/test')
    .send({
      name: 'Ryan',
      email: 'mobileupstate@gmail.com'
    })
    .end(function (e, res) {
      console.log(res.body);
      expect(e).to.eql(null);
      expect(res.body.length).to.eql(1);
      expect(res.body[0]._id.length).to.eql(24);
      id = res.body[0]._id;
      done();
    });
  });

  it('retrieves an object', function (done) {
    superagent.get('http://localhost:3000/collections/test/'+id);
    .end(function (e, res) {
      console.log(res.body);
      expect(e).to.eql(null);
      expect(typeof res.body).to.eql('object');
      expect(res.body._id.length).to.eql(24);
      expect(res.body._id).to.eql(id);
      done();
    });
  });

  

});
