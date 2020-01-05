class Hydration {
	constructor(user, hydro) {
    this.userID = user.id,
    this.date = 0,
    this.numOunces = 0,
    this.hydroData = hydro
	}
  
  locateUserById(userId) {
	  let currentUser = this.dataUser.filter(player => player.id === userId)
	}

	findHydrationByDate(date) {
	  let userRecords = this.hydroData.filter(record => record.userID === this.userID)
	  let foundDate = userRecords.find(day => day.date === date)
    return `${foundDate.numOunces} Ounces`
	}

  returnWeeklyHydration() {
  	let weeklyHydroData = [];
  	let userRecords = this.hydroData.reduce((acc, record) => {
	  	if (record.userID === this.userID) {
	  		acc = acc.concat(record)
	  	}
	  	return acc
	  }, []).reverse().map(user => {
    	if (weeklyHydroData.length < 7) {
    		weeklyHydroData.push(user)
    	}
    })
    return weeklyHydroData
  }

};



if (typeof module !== 'undefined') {
  module.exports = Hydration;
}