/**
 * Inverse Modulo Calculator
 * @param {integer} integer
 * @param {integer} modulo
 * @returns {integer}
 */
const inverseModulo = (integer, modulo) => {
    let a = integer, b = modulo;
    let u = 1, v = 0;

    do {
        r = a % b;
        q = Math.floor(a / b);
        a = b;
        b = r;
        [v, u] = [u - v * q, v];
    } while (r != 0);

    if (a !== 1) {
        return null;
    }

    return (modulo + u) % modulo;
}

module.exports = {
    inverseModulo
}