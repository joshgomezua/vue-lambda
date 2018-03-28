'use strict'

class Validation {
  constructor ({ id, name, }) {
    this._id = id
    this._name = name
  }

  get id () {
    return this._id
  }

  get name () {
    return this._name
  }

  execute (field, parameters) {
    console.warn('Unimplemented validation.')
  }
}

export default Validation
