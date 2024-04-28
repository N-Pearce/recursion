process.env.NODE_ENV = "test";
const request = require('supertest')

const rec = require('./recursion')

describe('test product of nums', () => {
    test('test procuct', () => {
        let product = rec.product([2,3,4])
        expect(product).toEqual(24)
    })
    test('test procuct if array empty', () => {
        let product = rec.product([])
        expect(product).toEqual(1)
    })
})

describe('test longest word', () => {
    test('test longest', () => {
        let longest = rec.longest(['hello', 'hi', 'hola'])
        expect(longest).toEqual(5)
    })

    test('test longest if array empty', () => {
        let longest = rec.longest([])
        expect(longest).toEqual(0)
    })
})

describe('test every other character', () => {
    test('test everyOther', () => {
        let everyOther = rec.everyOther('hello')
        expect(everyOther).toEqual('hlo')
    })

    test('test everyOther if empty string', () => {
        let everyOther = rec.everyOther('')
        expect(everyOther).toEqual('')
    })
})

describe('test is palindrome', () => {
    test('test isPalindrome', () => {
        let isPalindrome = rec.isPalindrome('tacocat')
        expect(isPalindrome).toEqual(true)
    })

    test('test isPalindrome if false', () => {
        let isPalindrome = rec.isPalindrome('tacodog')
        expect(isPalindrome).toEqual(false)
    })
})

describe('test find index', () => {
    test('test findIndex', () => {
        let animals = ['duck', 'cat', 'pony']
        let idx = rec.findIndex(animals, 'cat')
        expect(idx).toEqual(1)
    })

    test('test findIndex if not in array', () => {
        let animals = ['duck', 'cat', 'pony']
        let idx = rec.findIndex(animals, 'porcupine')
        expect(idx).toEqual(-1)
    })
})

describe('test reverse string', () => {
    test('test revString', () => {
        let rev = rec.revString('porcupine')
        expect(rev).toEqual('enipucrop')
    })
})

describe('test gather strings', () => {
    test('test gatherStrings', () => {
        let nestedObj = {
            firstName: "Lester",
            favoriteNumber: 22,
            moreData: {
              lastName: "Testowitz"
            },
            funFacts: {
              moreStuff: {
                anotherNumber: 100,
                deeplyNestedString: {
                  almostThere: {
                    success: "you made it!"
                  }
                }
              },
              favoriteString: "nice!"
            }
          };
        let strings = rec.gatherStrings(nestedObj)
        expect(strings).toEqual(['Lester', 'Testowitz', 'you made it!', 'nice!'])
    })
})