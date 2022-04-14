const integerInput = document.getElementById("integer-input")
const sendRequestBtn = document.getElementById("send-request-btn")
const inverseShow = document.getElementById("inverse-show")

/**
 * Get Inverse Modulo from the Server
 */
const getInverse = () => {
  const integer = integerInput.value;
  // Request config
  const endpoint = "http://localhost:8080/inverse";
  //
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ integer })
  }

  /* Send the request to the server */
  fetch(endpoint, options)
    .then(response => response.json())
    .then(data => {
      // Get the inverse
      const inverse = data.inverse;

      // Show the result in the page
      inverseShow.value = `The inverse of ${integer} modulo 109 is ${inverse}`
    })
    .catch(error => {
      console.log(error.message)
    });
}


sendRequestBtn.addEventListener("click", getInverse);