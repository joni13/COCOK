const fs = require('fs')
const toMs = require('ms')


const checkPremiumGc = (gcId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gcId) {
            status = true
        }
    })
    return status
}

module.exports = {  checkPremiumGc  }