const chai = require('chai');
const expect = chai.expect;

const User = require("../src/User")

let user;

beforeEach(() => {
  user = new User({id: 1, name: "Hunter", address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697", email: "Diana.Hayes1@hotmail.com"})
});

describe('User', () => {

	it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should have an id', function() {
  	expect(user.id).to.equal(1)
  })

  it('should have a name', function() {
  	expect(user.name).to.equal("Hunter")
  })

  it('should have an adress', function() {
  	expect(user.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697")
  })

  it('should return an email address', () => {
    expect(user.email).to.equal("Diana.Hayes1@hotmail.com")
  });

  it('should be able to return a name', () => {
    expect(user.findName()).to.equal("Hunter")
  });

});