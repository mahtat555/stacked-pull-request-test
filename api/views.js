const { inverseModulo } = require("../mathLogic/inverse")

const prime = 109;

/**
 * Error 404 not found
 */
const notFound404 = (req, res, message) => {
  res.writeHead(404);
  res.json({ message: `The route  ${req.method} ${req.url} not exist !!` });
}


const inverseView = (req, res) => {
  if (req.method == "GET") {
    notFound404(req, res);
    return;
  }
  // Calculate the inverse modulo
  const integer = req.data.integer;
  const inverse = inverseModulo(integer, prime)

  res.writeHead(200);
  res.json({ inverse });
}


module.exports = {
  notFound404, inverseView
}