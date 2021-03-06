// sessions have conditions have trials
export default {
  name: 'Pocket Project',
  order: [
    'C1'
  ],
  conditions: {
    C1: {
      name: 'condition 1',
      trials: 10,
      iti: 2,
      keys: [
        ['L5', 'R5'],
        ['STAY_0.1', 'SWITCH_0.9']
      ]
    }
  },
  keys: {
    L1: { name: 'left', probability: 0.1 },
    L5: { name: 'left', probability: 0.5 },
    L9: { name: 'left', probability: 0.9 },
    R1: { name: 'right', probability: 0.1 },
    R5: { name: 'right', probability: 0.5 },
    R9: { name: 'right', probability: 0.9 },
    'STAY_0.1': { name: 'stay', probability: 0.1 },
    'STAY_0.5': { name: 'stay', probability: 0.5 },
    'STAY_0.9': { name: 'stay', probability: 0.9 },
    'SWITCH_0.1': { name: 'switch', probability: 0.1 },
    'SWITCH_0.5': { name: 'switch', probability: 0.5 },
    'SWITCH_0.9': { name: 'switch', probability: 0.9 }
  }
}
