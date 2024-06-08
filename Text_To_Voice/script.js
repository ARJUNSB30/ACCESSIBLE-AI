const textInput = document.getElementById('textInput');
const speakButton = document.getElementById('speakButton');

speakButton.addEventListener('click', () => {
  const text = textInput.value.trim();
  if (text !== '') {
    speakText(text);
  } else {
    alert('Please enter some text to speak.');
  }
});

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}
