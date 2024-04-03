document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = form.querySelector('#username').value;
    const title = form.querySelector('#title').value;
    const content = form.querySelector('#content').value;

    const newPost = {
      username,
      title,
      content
    };
    saveToLocalStorage('blogPosts',newPost);

    window.location.href = 'blog.html';
  });
});


document.querySelector('.toggle-dark-mode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
