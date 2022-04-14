/*
| The Unit tests
*/

const { inverseModulo } = require("../mathLogic/inverse");

/**
 * Handling tests
 */
const assertEqual = (first, second) => {
    if (first === second) {
        return true;
    } else {
        throw new Error(`Expect ${second}; Get ${first} !!`);
    }
}

/**
 * Test the math logic
 */
const TestMathLogic = () => {
    let inverse;

    /* Should return null */
    inverse = inverseModulo(2, 108);
    assertEqual(inverse, null);

    /* Should return the inverse */
    inverse = inverseModulo(2, 109);
    assertEqual(inverse, 55);
}


TestMathLogic();