
function handleCalculateCastles() {
  var userInput = document.getElementById("castle-input").value
  // parse user input
  var inputArr = userInput.split(',')
  // trim the whitespace from the array
  inputArr = inputArr.map(function(i) {
    return parseInt(i.trim())
  })

  var numCastles = calculateCastles(inputArr)

  document.getElementById("castle-output").innerHTML = numCastles + " castles"
}


/** @param array of integers
 *  @returns number of castles that can be built on this 'land'
 * - You can always build a castle at the start of the array, provided it is non-empty
 * - We only want to build one castle per peak or valley.
 * - A peak is an integer or series of integers that is above the immediately preceding and following
 *   ints. For example, in the sequence [2,6,6,6,3] the sequence of 3 6s is a peak.
 * - A valley is an integer or series of integers that is below the immediately preceding and
 *   following ints. For example, in the sequence [6,1,4] the "1" would be a valley.
 */
function calculateCastles(land) {
  var castles = 0
  var currentElevation // false = valley, true = peak
  var previousHeight

  land.forEach(function(height) {
    if(Number.isInteger(height)) {
      var elevation
      if(previousHeight === undefined) {
        castles++
      } else {
        if(height > previousHeight) {
          elevation = true
        } else if (height < previousHeight) {
          elevation = false
        } else {
          elevation = currentElevation
        }

        // currentElevation will be undefined for first iteration only
        if(currentElevation !== undefined && currentElevation !== elevation) {
          castles++
        }
        currentElevation = elevation
      }

      previousHeight = height
    }
  })

  return castles
}



function handleRandomTests({ numTests, landLength }) {
  const range = 10
  const _landLength = (landLength === undefined) ? 15 : landLength
  var testInputs = []
  var i, j
  // Create test arrays of random numbers
  for(i = 0; i < numTests; i++) {
    var landArray = []
    for(j = 0; j < _landLength; j++) {
      landArray.push(Math.floor(Math.random() * range))
    }
    testInputs.push(landArray)
  }


  testInputs.forEach(function(input) {
    var castles = calculateCastles(input)
    var div = document.createElement("div")
    var text = document.createTextNode(input.toString() + " : " + castles + " castles")
    div.appendChild(text)
    document.getElementById("castle-test-output").appendChild(div)
  })

}
