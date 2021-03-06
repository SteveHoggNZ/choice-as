import { createSelector } from 'reselect'
import { STATE_PATH } from './constants'

const _getName = (state) =>
  state[STATE_PATH].getIn(['entities', 'name'])

const _getOrder = (state) =>
  state[STATE_PATH].getIn(['entities', 'order'])

const _getConditions = (state) =>
  state[STATE_PATH].getIn(['entities', 'conditions'])

const _getKeys = (state) =>
  state[STATE_PATH].getIn(['entities', 'keys'])

export const getSession = createSelector(
  _getName,
  _getOrder,
  _getConditions,
  _getKeys,
  (_name, _order, _conditions, _keys) => {
    const name = _name
    const order = _order.toJS()
    const conditions = _conditions.toJS()
    const keys = _keys.toJS()
    return {
      name,
      order,
      conditions,
      keys
    }
  })

// const _getTestResult = (state) =>
//   state.getIn([STATE_PATH, 'test'])
//
// export const getTestResult = createSelector(
//   _getTestResult,
//   (_test) => {
//     const test = _test.toJS()
//     return { test }
//   }
// )
