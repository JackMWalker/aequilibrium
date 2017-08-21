var tbLeftFighters, tbRightFighters, tbHeader, tbFooter, decepticons, autobots, decepticonTeam, autobotTeam

/**
 *  Initialise the battleground by setting up variables and teams
 */
function initialiseBattleground() {
  // TRANSFORMERS from data/transformer.js
  var transformers = TRANSFORMERS.slice()
  // Initialise DOM element variables
  tbLeftFighters = document.getElementById("tb-left-fighters")
  tbRightFighters = document.getElementById("tb-right-fighters")
  tbHeader = document.getElementById("tb-header")
  tbFooter = document.getElementById("tb-footer")
  // Initialise to empty arr
  decepticons = []
  autobots = []
  // each transformer object in TRANSFORMERS
  transformers.forEach(function(transformer){
    if(transformer.allegiance === "D") {
      decepticons.push(transformer)
    } else if (transformer.allegiance === "A") {
      autobots.push(transformer)
    }
  })

  // Initialise the two teams with 1 fighter each
  decepticonTeam = [0]
  autobotTeam = [0]

  renderFighters()
}

/**
 *  Handles the previous fighter click
 */
function previousFighter({allegiance, index}) {
  var result
  if(allegiance === 'autobot') {
    result = (autobotTeam[index] - 1).mod(autobots.length)
    autobotTeam[index] = result
  } else if(allegiance === 'decepticon') {
    result = (decepticonTeam[index] - 1).mod(decepticons.length)
    decepticonTeam[index] = result
  }
  renderFighters()
}

/**
 *  Handles the next fighter click
 */
function nextFighter({allegiance, index}) {
  var result
  if(allegiance === 'autobot') {
    result = (autobotTeam[index] + 1).mod(autobots.length)
    autobotTeam[index] = result
  } else if(allegiance === 'decepticon') {
    result = (decepticonTeam[index] + 1).mod(decepticons.length)
    decepticonTeam[index] = result
  }
  renderFighters()
}

/**
 *  Adds a fighter to the given allegiance's roster
 */
function addFighter({allegiance}) {
  if(allegiance === 'autobot') {
    autobotTeam.push(0)
  } else if(allegiance === 'decepticon') {
    decepticonTeam.push(0)
  }

  renderFighters()
}

/**
 *  Resets the fighters sides and then redraws them
 *  based upon the current state of the game
 */
function renderFighters() {
  var i
  tbLeftFighters.innerHTML = ""
  tbRightFighters.innerHTML = ""

  i = 0
  autobotTeam.forEach(function(fighterIndex) {
    var fighter = createFighter({
      allegiance: 'autobot',
      teamIndex: i,
      fighterIndex: fighterIndex
    })
    tbLeftFighters.appendChild(fighter)
    i++
  })

  i = 0
  decepticonTeam.forEach(function(fighterIndex) {
    var fighter = createFighter({
      allegiance: 'decepticon',
      teamIndex: i,
      fighterIndex: fighterIndex
    })
    tbRightFighters.appendChild(fighter)
    i++
  })
}


/**
 *  @returns a fighter element from the given allegiance and index
 */
function createFighter({allegiance, teamIndex, fighterIndex}) {
  var i
  var transformer = (allegiance === 'autobot') ? autobots[fighterIndex] : decepticons[fighterIndex]
  // Create the wrapper element
  var fighter = document.createElement("div")
  fighter.classList.add('tb-fighter')
  // Create the previous button element
  var previousButton = document.createElement("button")
  previousButton.innerHTML = "<"
  previousButton.type = "button"
  previousButton.onclick = function() {
    previousFighter({
      allegiance: allegiance,
      index: teamIndex
    })
  }
  // Create the next button element
  var nextButton = document.createElement("button")
  nextButton.innerHTML = ">"
  nextButton.type = "button"
  nextButton.onclick = function() {
    nextFighter({
      allegiance: allegiance,
      index: teamIndex
    })
  }
  var fighterBio = document.createElement("div")
  var fighterName = document.createElement("h4")
  fighterName.innerHTML = transformer.name
  var fighterStatsWrapper = document.createElement("div")
  var leftStats = document.createElement("table")
  var rightStats = document.createElement("table")

  i = 0
  for(var key in transformer.stats) {
    var row = (i < 4) ? leftStats.insertRow(i.mod(4)) : rightStats.insertRow(i.mod(4))
    var title = row.insertCell(0)
    var score = row.insertCell(1)
    title.innerHTML = key
    score.innerHTML = transformer.stats[key]
    i++
  }

  fighterStatsWrapper.appendChild(leftStats)
  fighterStatsWrapper.appendChild(rightStats)

  fighterBio.appendChild(fighterName)
  fighterBio.appendChild(fighterStatsWrapper)

  fighter.appendChild(previousButton)
  fighter.appendChild(fighterBio)
  fighter.appendChild(nextButton)

  return fighter
}

/* The Battle Logic */
var gameOver = false



/**
 *  Start the battle
 *  First sort the teams by rank
 */
function startBattle() {
  var i, j, rounds, results, battles,
      _autobotTeam, _decepticonTeam,
      autobotTeamHealth, decepticonTeamHealth,
      autobotLosses, decepticonLosses,
      winner, losingSurvivors

  // Sort teams by ranks
  autobotTeam.sort(function(a, b) {
    return autobots[b].stats.rank - autobots[a].stats.rank
  })
  decepticonTeam.sort(function(a, b) {
    return decepticons[b].stats.rank - decepticons[a].stats.rank
  })
  // map team array of indexs to team array of transformer objects
  _autobotTeam = autobotTeam.map(function(fighterIndex) {
    return autobots[fighterIndex]
  })
  _decepticonTeam = decepticonTeam.map(function(fighterIndex) {
    return decepticons[fighterIndex]
  })

  // initialise health arrays to all true (alive)
  autobotTeamHealth = Array(_autobotTeam.length).fill(true)
  decepticonTeamHealth = Array(_decepticonTeam.length).fill(true)

  // Only as many rounds as the least amount of fighters of the two teams
  rounds = (_autobotTeam.length < _decepticonTeam.length) ? _autobotTeam.length : _decepticonTeam.length
  battles = 0
  for(i = 0; i < rounds; i++) {
    var outcome = fight(_autobotTeam[i], _decepticonTeam[i])

    if(outcome === 0) { // Autobots (first param) won
      decepticonTeamHealth[i] = false // eliminated
    } else if(outcome === 1) { // Decepticons (second param) won
      autobotTeamHealth[i] = false // eliminated
    } else if(outcome === 2) {
      decepticonTeamHealth[i] = false
      autobotTeamHealth[i] = false
    } else if(outcome === 13) {
      decepticonTeamHealth.fill(false)
      autobotTeamHealth.fill(false)
      battles++
      break
    }
    battles++
  }

  decepticonLosses = decepticonTeamHealth.count(false)
  autobotLosses = autobotTeamHealth.count(false)

  losingSurvivors = []
  j = 0

  // Check win conditions
  if(decepticonLosses === _decepticonTeam.length && autobotLosses === _autobotTeam.length) {
    // if everything is dead
    winner = "Everything is destroyed!"
  } else if(decepticonLosses === autobotLosses) {
    // DRAW
    winner = "DRAW!"
  } else if(decepticonLosses > autobotLosses) {
    // AUTOBOTS WIN
    winner = "AUTOBOTS!"

    decepticonTeamHealth.forEach(function(health) {
      if(health) {
        losingSurvivors.push(_decepticonTeam[j])
      }
      j++
    })
  } else if(autobotLosses > decepticonLosses) {
    // DECEPTICONS WIN
    winner = "DECEPTICONS"

    autobotTeamHealth.forEach(function(health) {
      if(health) {
        losingSurvivors.push(_autobotTeam[j])
      }
      j++
    })
  }

  var resultElement = document.createElement("div")
  var resultP1 = document.createElement("p")
  var resultP2 = document.createElement("p")
  var resultP3 = document.createElement("p")

  resultP1.innerHTML = battles + " battle(s)"
  resultP2.innerHTML = "Winning team: " + winner + ""
  resultP3.innerHTML = "Survivor(s) from the losing team: "

  if(losingSurvivors.length > 0) {
    losingSurvivors.forEach(function(survivor) {
      resultP3.innerHTML += survivor.name + ", "
    })
  } else {
    resultP3.innerHTML += "None!"
  }

  resultElement.appendChild(resultP1)
  resultElement.appendChild(resultP2)
  resultElement.appendChild(resultP3)

  tbFooter.innerHTML = ""
  tbFooter.appendChild(resultElement)

  renderFighters()
}

/**
 *  @param fighter1 with index 0, fighter2 with index 1
 *  @return Index of the winner, or 2 if result is draw
 */

function fight(fighter1, fighter2) {
  var overall1 = calculateOverallRank(fighter1.stats)
  var overall2 = calculateOverallRank(fighter2.stats)
  var courageDiff = fighter1.courage - fighter2.courage
  var strengthDiff = fighter1.strength - fighter2.strength
  var skillDiff = fighter1.skill - fighter2.skill

  var name1 = fighter1.name.toLowerCase()
  var name2 = fighter2.name.toLowerCase()

  // check for special rules first
  if((name1 === "optimus prime" || name1 === "predaking") && (name2 === "optimus prime" || name2 === "predaking")) {
    return 13 // special code to end battle with all dead transformers
  }

  if(name1 === "optimus prime" || name1 === "predaking") {
    return 0
  } else if(name2 === "optimus prime" || name2 === "predaking") {
    return 1
  }

  if((courageDiff >= 4 && strengthDiff >= 3) || skillDiff >= 3) {
    return 0 // fighter 1 wins
  } else if((courageDiff <= -4 && strengthDiff <= -3) || skillDiff <= -3) {
    return 1 // fighter 2 wins
  } else if(overall1 === overall2) {
    return 2 // draw
  } else {
    // Return winner for largest overall
    return (overall1 > overall2) ? 0 : 1
  }
}

function calculateOverallRank(stats) {
  return stats.strength + stats.intelligence + stats.speed + stats.endurance + stats.firepower
}

// Mod function that handles negative mod correctly
Number.pototype.mod = function(n) {
  return ((this%n)+n)%n
}

Array.prototype.count = function(needle) {
  var count = 0
  this.forEach(function(item) {
    if(item === needle) {
      count++
    }
  })
  return count
}
