const chai = require('chai');
const expect = chai.expect;

const User = require("../src/User")
const Hydration = require("../src/Hydration")

let user, hydro;

beforeEach(() => {
  user = new User({"id": 1, "name": "Luisa Hane", "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697", "email": "Diana.Hayes1@hotmail.com", "strideLength": 4.3, "dailyStepGoal": 10000, "friends": [ 16, 4, 8] })
	hydro = new Hydration(user, [{ "userID": 1, "date": "2019/06/15", "numOunces": 37}])
});

describe('Hydration', () => {

	it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

	it('should locate and return the users ID', function() {
    expect(hydro.userID).to.be.equal(1);
  });

  it('should be return hydration by date', () => {
    expect(hydro.findHydrationByDate("2019/06/15")).to.equal('37 Ounces')
  });

});
