const array3 = [1, 2, [3, 4, [5]]]
array3.flat(2)

//

const entries = ['bob', 'sally',,,,,,,'cindy']
entries.flat()

// flatmap()

const jurassicParkChaos = jurasicpark.flatMap(creature => creature + 'Trex')

//

const userEmail = '                    eddytheeagle@gmail.com'
const userEmail2 = 'jonnydangerous@gmail.com    '
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())

//formEntries

userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]
Object.fromEntries(userProfiles)


// try catch block

try {
   true + 'hi'
} catch {
    console.log('you messed up')
}