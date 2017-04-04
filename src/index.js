// LevelUP
const levelup = require('level')

const levelDB = levelup('./levelDB')

function getNameLevel () {
  levelDB.get('name', (err, value) => {
    if (err) {
      levelDB.put('name', 'Goncy', (err, value) => {
        if (err) return console.log('Oops!, there was an error: ', err)
        console.log('Response: ', value)
      })
    }
    console.log('Response: ', value)
  })
}

getNameLevel()

// NeDB
const Datastore = require('nedb')

const nedbDB = new Datastore({filename: './nedbDB', autoload: true})

function getNameNedb () {
  nedbDB.findOne({name: 'Goncy'}, (err, value) => {
    if (err || !value) {
      nedbDB.insert({name: 'Goncy'}, (err, value) => {
        if (err) return console.log('Oops!, there was an error: ', err)
        console.log('Response: ', value)
      })
    }
    console.log('Response: ', value)
  })
}

getNameNedb()
