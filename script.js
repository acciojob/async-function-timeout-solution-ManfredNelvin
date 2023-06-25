const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const outputDiv = document.getElementById("output");

async function showMessageAfterDelay() {
  const delay = parseInt(delayInput.value);
  const message = textInput.value;

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay * 1000);
  });

  outputDiv.innerHTML = message;
}

document.getElementById("btn").addEventListener("click", showMessageAfterDelay);
