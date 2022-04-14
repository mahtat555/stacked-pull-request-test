/**
 * Use JSON Format
 */
const useJson = async (req, res) => {

  const readData = () => {
    return new Promise(resolve => {
      let data = [];
      req.on('data', (chunk) => {
        data.push(chunk);
      })
      req.on('end', () => {
        try {
          req.data = JSON.parse(data)
        } catch (error) {
          req.data = ""
        }
        resolve(0);
      })
    });
  }

  await readData();

  res.setHeader("Content-Type", "application/json");
  res.json = (object) => {
    res.end(JSON.stringify(object));
  }
}

module.exports = {
  useJson,
}