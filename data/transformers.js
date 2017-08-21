const TRANSFORMERS = [
  {
    "name" : "AFTERBURNER",
    "allegiance" : "A",
    "stats" : {
      "strength" : 7,
      "intelligence" : 6,
      "speed" : 6,
      "endurance" : 6,
      "rank" : 5,
      "courage" : 9,
      "firepower" : 7,
      "skill" : 7,
    }
  },
  {
    "name" : "BRAINSTORM",
    "allegiance" : "A",
    "stats" : {
      "strength" : 5,
      "intelligence" : 8,
      "speed" : 9,
      "endurance" : 6,
      "rank" : 7,
      "courage" : 9,
      "firepower" : 7,
      "skill" : 8,
    }
  },
  {
    "name" : "BUMBLEBEE",
    "allegiance" : "A",
    "stats" : {
      "strength" : 2,
      "intelligence" : 8,
      "speed" : 4,
      "endurance" : 7,
      "rank" : 7,
      "courage" : 10,
      "firepower" : 1,
      "skill" : 7,
    }
  },
  {
    "name" : "DOUBLECROSS",
    "allegiance" : "A",
    "stats" : {
      "strength" : 1,
      "intelligence" : 6,
      "speed" : 2,
      "endurance" : 10,
      "rank" : 6,
      "courage" : 9,
      "firepower" : 6,
      "skill" : 7,
    }
  },
  {
    "name" : "GROTUSUE",
    "allegiance" : "A",
    "stats" : {
      "strength" : 7,
      "intelligence" : 10,
      "speed" : 4,
      "endurance" : 6,
      "rank" : 8,
      "courage" : 10,
      "firepower" : 7,
      "skill" : 10,
    }
  },
  {
    "name" : "GROOVE",
    "allegiance" : "A",
    "stats" : {
      "strength" : 4,
      "intelligence" : 9,
      "speed" : 5,
      "endurance" : 7,
      "rank" : 6,
      "courage" : 8,
      "firepower" : 6,
      "skill" : 8,
    }
  },
  {
    "name" : "INFERNO",
    "allegiance" : "A",
    "stats" : {
      "strength" : 9,
      "intelligence" : 6,
      "speed" : 4,
      "endurance" : 8,
      "rank" : 5,
      "courage" : 9,
      "firepower" : 6,
      "skill" : 6,
    }
  },
  {
    "name" : "MIRAGE",
    "allegiance" : "A",
    "stats" : {
      "strength" : 6,
      "intelligence" : 9,
      "speed" : 7,
      "endurance" : 5,
      "rank" : 7,
      "courage" : 5,
      "firepower" : 6,
      "skill" : 10,
    }
  },
  {
    "name" : "OPTIMUS PRIME",
    "allegiance" : "A",
    "stats" : {
      "strength" : 10,
      "intelligence" : 10,
      "speed" : 8,
      "endurance" : 10,
      "rank" : 10,
      "courage" : 10,
      "firepower" : 8,
      "skill" : 10,
    }
  },
  {
    "name" : "POWERGLIDE",
    "allegiance" : "A",
    "stats" : {
      "strength" : 3,
      "intelligence" : 7,
      "speed" : 8,
      "endurance" : 7,
      "rank" : 5,
      "courage" : 8,
      "firepower" : 6,
      "skill" : 9,
    }
  },
  {
    "name" : "RAMHORN",
    "allegiance" : "A",
    "stats" : {
      "strength" : 8,
      "intelligence" : 4,
      "speed" : 3,
      "endurance" : 9,
      "rank" : 5,
      "courage" : 9,
      "firepower" : 3,
      "skill" : 4,
    }
  },
  {
    "name" : "SANDSTORM",
    "allegiance" : "A",
    "stats" : {
      "strength" : 7,
      "intelligence" : 9,
      "speed" : 6,
      "endurance" : 7,
      "rank" : 6,
      "courage" : 10,
      "firepower" : 6,
      "skill" : 9,
    }
  },
  {
    "name" : "SMOKESCREEN",
    "allegiance" : "A",
    "stats" : {
      "strength" : 4,
      "intelligence" : 9,
      "speed" : 7,
      "endurance" : 6,
      "rank" : 6,
      "courage" : 8,
      "firepower" : 7,
      "skill" : 9,
    }
  },
  {
    "name" : "ULTRA MAGNUS",
    "allegiance" : "A",
    "stats" : {
      "strength" : 9,
      "intelligence" : 9,
      "speed" : 6,
      "endurance" : 8,
      "rank" : 8,
      "courage" : 9,
      "firepower" : 6,
      "skill" : 8,
    }
  },
  {
    "name" : "WHEELJACK",
    "allegiance" : "A",
    "stats" : {
      "strength" : 7,
      "intelligence" : 9,
      "speed" : 7,
      "endurance" : 5,
      "rank" : 8,
      "courage" : 9,
      "firepower" : 7,
      "skill" : 10,
    }
  },
  {
    "name" : "ABOMINUS",
    "allegiance" : "D",
    "stats" : {
      "strength" : 10,
      "intelligence" : 1,
      "speed" : 3,
      "endurance" : 10,
      "rank" : 5,
      "courage" : 10,
      "firepower" : 8,
      "skill" : 4,
    }
  },
  {
    "name" : "BOMBSHELL",
    "allegiance" : "D",
    "stats" : {
      "strength" : 6,
      "intelligence" : 8,
      "speed" : 4,
      "endurance" : 5,
      "rank" : 6,
      "courage" : 5,
      "firepower" : 6,
      "skill" : 9,
    }
  },
  {
    "name" : "BONECRUSHER",
    "allegiance" : "D",
    "stats" : {
      "strength" : 9,
      "intelligence" : 3,
      "speed" : 2,
      "endurance" : 9,
      "rank" : 4,
      "courage" : 8,
      "firepower" : 6,
      "skill" : 6,
    }
  },
  {
    "name" : "DEVASTATOR",
    "allegiance" : "D",
    "stats" : {
      "strength" : 10,
      "intelligence" : 2,
      "speed" : 1,
      "endurance" : 9,
      "rank" : 6,
      "courage" : 10,
      "firepower" : 8,
      "skill" : 4,
    }
  },
  {
    "name" : "FRENZY",
    "allegiance" : "D",
    "stats" : {
      "strength" : 3,
      "intelligence" : 5,
      "speed" : 3,
      "endurance" : 6,
      "rank" : 5,
      "courage" : 10,
      "firepower" : 9,
      "skill" : 6,
    }
  },
  {
    "name" : "GALVATRON",
    "allegiance" : "D",
    "stats" : {
      "strength" : 10,
      "intelligence" : 9,
      "speed" : 9,
      "endurance" : 10,
      "rank" : 9,
      "courage" : 9,
      "firepower" : 9,
      "skill" : 10,
    }
  },
  {
    "name" : "MEGATRON",
    "allegiance" : "D",
    "stats" : {
      "strength" : 10,
      "intelligence" : 10,
      "speed" : 4,
      "endurance" : 8,
      "rank" : 10,
      "courage" : 9,
      "firepower" : 10,
      "skill" : 9,
    }
  },

  {
    "name" : "MINDSWIPE",
    "allegiance" : "D",
    "stats" : {
      "strength" : 8,
      "intelligence" : 6,
      "speed" : 7,
      "endurance" : 5,
      "rank" : 7,
      "courage" : 8,
      "firepower" : 7,
      "skill" : 9,
    }
  },
  {
    "name" : "ONSLAUGHT",
    "allegiance" : "D",
    "stats" : {
      "strength" : 8,
      "intelligence" : 8,
      "speed" : 3,
      "endurance" : 7,
      "rank" : 7,
      "courage" : 8,
      "firepower" : 8,
      "skill" : 9,
    }
  },
  {
    "name" : "PREDAKING",
    "allegiance" : "D",
    "stats" : {
      "strength" : 10,
      "intelligence" : 5,
      "speed" : 10,
      "endurance" : 8,
      "rank" : 7,
      "courage" : 9,
      "firepower" : 9,
      "skill" : 8,
    }
  },
  {
    "name" : "RAMJET",
    "allegiance" : "D",
    "stats" : {
      "strength" : 8,
      "intelligence" : 5,
      "speed" : 9,
      "endurance" : 9,
      "rank" : 5,
      "courage" : 8,
      "firepower" : 7,
      "skill" : 6,
    }
  },
  {
    "name" : "SIXSHOT",
    "allegiance" : "D",
    "stats" : {
      "strength" : 10,
      "intelligence" : 9,
      "speed" : 4,
      "endurance" : 9,
      "rank" : 7,
      "courage" : 8,
      "firepower" : 9,
      "skill" : 8,
    }
  },
  {
    "name" : "SNAPDRAGON",
    "allegiance" : "D",
    "stats" : {
      "strength" : 10,
      "intelligence" : 9,
      "speed" : 9,
      "endurance" : 8,
      "rank" : 6,
      "courage" : 7,
      "firepower" : 7,
      "skill" : 7,
    }
  },

  {
    "name" : "THUNDERCRACKER",
    "allegiance" : "D",
    "stats" : {
      "strength" : 7,
      "intelligence" : 4,
      "speed" : 9,
      "endurance" : 7,
      "rank" : 5,
      "courage" : 8,
      "firepower" : 7,
      "skill" : 7,
    }
  },
  {
    "name" : "VORTEX",
    "allegiance" : "D",
    "stats" : {
      "strength" : 4,
      "intelligence" : 9,
      "speed" : 6,
      "endurance" : 5,
      "rank" : 6,
      "courage" : 7,
      "firepower" : 7,
      "skill" : 8,
    }
  },
]
