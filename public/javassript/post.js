async function postFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value();
    const post_input = document.querySelector('textarea[name="post-title"]').value();
  
     {
      const response = await fetch('/api/post', {
        method: 'O',
        body: JSON.stringify({
          title,
          post_input
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  
  
  document.querySelector('.new-post-form').addEventListener('submit', postFormHandler);
  