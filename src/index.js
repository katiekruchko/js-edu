module.exports = function getTimeForEducation(
  focus = 'family', 
  knowsProgramming = true,
  config = {family: 4}
  ) {
    let weeks;
    if (knowsProgramming) {
      weeks = 800
    }
    else {
      weeks = 1300
    }
    
    return Math.ceil(weeks / config[focus]);
};