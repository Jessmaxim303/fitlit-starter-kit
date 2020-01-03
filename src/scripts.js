
// console.log(user)
// console.log(activityData)
// console.log(hydrationData)
// console.log(sleepData)
// console.log(userData)

let jsUserName = document.querySelector('.js_user-name');
let jsUserEmail = document.querySelector('.js_user-email');
let jsUserGoal = document.querySelector('.js_user-goal');
let jsStepsAverage = document.querySelector('.js_steps-average');
let jsHydroDate = document.querySelector('.js_hydro-date');
let jsHydroInput = document.querySelector('.js_hydro-input');
let jsHydroButton = document.querySelector('.js_hydro-button');
let currentUser;
let hydration;


const startTracker = () => {
  let randomUserId = Math.floor(Math.random() * (userData.length - 1 + 1)) + 1;

  let user = userData.filter(player => player.id === randomUserId)
  currentUser = user[0]
  let userRepo = new UserRepository(userData, activityData)
  hydration = new Hydration(currentUser, hydrationData)
  jsUserName.innerText = currentUser.name
  jsUserEmail.innerText = currentUser.email
  jsUserGoal.innerText = `Daily step goal = ${currentUser.dailyStepGoal}`
  jsStepsAverage.innerText = userRepo.averageStepGoal()
  // jsHydroDate.innerText = hydration.findHydrationByDate("2019/06/15")
}

window.onload = startTracker();

const getUserById = () => {
	let repo = new UserRepository(userData)
  repo.locateUserById()
}

const getHydroByDate = () => {
	jsHydroDate.innerText = hydration.findHydrationByDate(jsHydroInput.value)
}

jsHydroButton.addEventListener("click", getHydroByDate);


