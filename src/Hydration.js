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
	  let userRecords = this.hydroData.reduce((acc, record) => {
	  	if (record.userID === this.userID) {
	  		acc = acc.concat(record)
	  	}
	  	return acc
	  }, [])

	  let foundDate = userRecords.filter(day => {
	  	if (day.date === date) {
	  		return day
	  	}
	  })
    return `${foundDate[0].numOunces} Ounces`
	}

}



if (typeof module !== 'undefined') {
  module.exports = Hydration;
}