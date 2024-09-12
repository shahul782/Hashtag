function extractHashtags() {
  const text = document.getElementById('inputText').value;
  const hashtags = text.match(/#\w+/g);

  const hashtagContainer = document.getElementById('hashtags');
  hashtagContainer.innerHTML = '';

  if (hashtags) {
    hashtags.forEach(hashtag => {
      const span = document.createElement('span');
      span.textContent = hashtag;
      hashtagContainer.appendChild(span);
    });
  } else {
    hashtagContainer.innerHTML = '<span>No hashtags found</span>';
  }
}

function copyHashtags() {
  const hashtagContainer = document.getElementById('hashtags');
  const hashtags = hashtagContainer.innerText;

  if (hashtags) {
    const textarea = document.createElement('textarea');
    textarea.value = hashtags;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Hashtags copied to clipboard!');
  } else {
    alert('No hashtags to copy.');
  }
}

document.getElementById('inputText').addEventListener('input', extractHashtags);
document.getElementById('copyButton').addEventListener('click', copyHashtags);
