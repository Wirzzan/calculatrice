const request = require("supertest")
const app = require("../app")
 
 
describe('POST - /api/cal/add', () => {
    test('addition valide', async () => {
        const res = await request(app)
        .post('/api/calc/add')
        .send({a: 5, b: 3})
 
        expect(res.statusCode).toBe(200)
        expect(res.body.result).toBe(8)
    })
 
    test('addition avec un seul chiffre', async () => {
        const res = await request(app)
        .post('/api/calc/add')
        .send({a: 5})
 
        expect(res.statusCode).toBe(400)
        expect(res.body.error).toBe("Both numbers a and b are required")
    })
 
    test('addition avec un chiffre et un mot', async () => {
        const res = await request(app)
        .post('/api/calc/add')
        .send({a: 5, b: 'un'})
 
        expect(res.statusCode).toBe(400)
        expect(res.body.error).toBe("Both a and b must be valid numbers")
    })
})
 
describe('POST - /api/cal/sub', () => {
    test('soustraction valide', async () => {
        const res = await request(app)
        .post('/api/calc/sub')
        .send({a: 5, b: 3})
 
        expect(res.statusCode).toBe(200)
        expect(res.body.result).toBe(2)
    })
 
    test('soustraction avec un seul chiffre', async () => {
        const res = await request(app)
        .post('/api/calc/sub')
        .send({a: 5})
 
        expect(res.statusCode).toBe(400)
        expect(res.body.error).toBe("Both numbers a and b are required")
    })
 
    test('soustraction avec un chiffre et un mot', async () => {
        const res = await request(app)
        .post('/api/calc/sub')
        .send({a: 5, b: "un"})
 
        expect(res.statusCode).toBe(400)
        expect(res.body.error).toBe("Both a and b must be valid numbers")
    })
})
 
describe('POST - /api/cal/mul', () => {
    test('multiplication valide', async () => {
        const res = await request(app)
        .post('/api/calc/mul')
        .send({a: 5, b: 3})
 
        expect(res.statusCode).toBe(200)
        expect(res.body.result).toBe(15)
    })
 
    test('multiplication avec un seul chiffre', async () => {
        const res = await request(app)
        .post('/api/calc/mul')
        .send({a: 5})
 
        expect(res.statusCode).toBe(400)
        expect(res.body.error).toBe("Both numbers a and b are required")
    })
 
    test('multiplication avec un chiffre et un mot', async () => {
        const res = await request(app)
        .post('/api/calc/mul')
        .send({a: 5, b: "un"})
 
        expect(res.statusCode).toBe(400)
        expect(res.body.error).toBe("Both a and b must be valid numbers")
    })
})
 
describe('POST - /api/cal/div', () => {
    test('division valide', async () => {
        const res = await request(app)
        .post('/api/calc/div')
        .send({a: 10, b: 5})
 
        expect(res.statusCode).toBe(200)
        expect(res.body.result).toBe(2)
    })
 
    test('division avec un seul chiffre', async () => {
        const res = await request(app)
        .post('/api/calc/div')
        .send({a: 10})
 
        expect(res.statusCode).toBe(400)
        expect(res.body.error).toBe("Both numbers a and b are required")
    })
 
    test('division avec un chiffre et un mot', async () => {
        const res = await request(app)
        .post('/api/calc/div')
        .send({a: 10, b: "un"})
 
        expect(res.statusCode).toBe(400)
        expect(res.body.error).toBe("Both a and b must be valid numbers")
    })
 
    test('division par 0', async () => {
        const res = await request(app)
        .post('/api/calc/div')
        .send({a: 10, b: 0})
 
        expect(res.statusCode).toBe(400)
        expect(res.body.error).toBe("Division by zero")
    })
})