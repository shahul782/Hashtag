
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
  
  
  document.getElementById('inputText').addEventListener('input', extractHashtags);
  