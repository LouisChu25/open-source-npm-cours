const getRandomNumber = require("./app");

test('it should return an integer', () => {
    const number = getRandomNumber();
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(100);
})

