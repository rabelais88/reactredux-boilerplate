// action creators are not really necessary,
// they exist just for creating action templates easier
import { ADD, SUBTRACT } from './actionTypes'

export function addNo(value) {
  return {
    type: ADD,
    value
  }
}

export function subNo(value) {
  return {
    type: SUBTRACT,
    value
  }
}