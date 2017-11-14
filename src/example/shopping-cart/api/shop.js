/**
 * Mocking client-server processing
 */

const TIMEOUT = 100

export default {
    getProducts: (cb, timeout) => {

        let _products = [
            {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 3},
            {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
            {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
        ]
        setTimeout(() => cb(_products), timeout || TIMEOUT)
    },
    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
