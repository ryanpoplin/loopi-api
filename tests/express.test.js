// all tests should fail currently

/**
Steps to run these tests:
1. go to you terminal and access this file
2. type in 'mocha express.test.js'
*/

// mocha is installed globally
var superagent = require('superagent');
var expect = require('expect.js');

describe('express rest api server', function () {

  var id; // the id of a document in mongodb

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
    superagent.get('http://localhost:3000/collections/test/' + id)
    .end(function (e, res) {
      console.log(res.body);
      expect(e).to.eql(null);
      expect(typeof res.body).to.eql('object');
      expect(res.body._id.length).to.eql(24);
      expect(res.body._id).to.eql(id);
      done();
    });
  });

  it('retrieves a collection', function (done) {
    superagent.get('http://localhost:3000/collections/test')
    .end(function (e, res) {
      console.log(res.body);
      expect(e).to.eql(null);
      expect(res.body.length).to.be.above(0);
      // TODO: research .map in js more...
      expect(res.body.map(function (item) {
        return item._id;
      })).to.contain(id);
      done();
    });
  });

  it('updates an object', function (done) {
    superagent.put('http://localhost:3000/collections/test' + id)
    .send({
      name: 'Byrdan Fox',
      email: 'byrdan@loopi.io'
    })
    .end(function (e, res) {
      console.log(res.body);
      expect(e).to.eql(null);
      expect(typeof res.body).to.eql('object');
      expect(res.body.msg).to.eql('success');
      done();
    });
  });

  it('checks an updated object', function (done) {
    superagent.get('http://localhost:3000/collections/test/' + id)
    .end(function (e, res) {
      console.log(res.body);
      expect(e).to.eql(null);
      expect(typeof res.body).to.eql('object');
      expect(res.body._id.length).to.eql(24);
      expect(res.body._id).to.eql(id);
      expect(res.body.name).to.eql('Byrdan Fox');
      done();
    });
  });

  it('deletes an object', function (done) {
    superagent.del('http://localhost:3000/collections/test/' + id)
    .end(function (e, res) {
      console.log(res.body);
      expect(e).to.eql(null);
      expect(typeof res.body).to.eql('object');
      expect(res.body.msg).to.eql('success');
      done();
    });
  });

});
