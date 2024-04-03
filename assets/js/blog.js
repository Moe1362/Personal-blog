const toggleDarkMode = document.querySelector('.toggle-dark-mode');

toggleDarkMode.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

document.addEventListener('DOMContentLoaded', function() {
  const blogPostsContainer = document.querySelector('.blog-posts');

  const blogPosts = getFromLocalStorage('blogPosts');

  if (blogPosts.length === 0) {
    const noPostsMessage = document.createElement('p');
    noPostsMessage.textContent = 'No blog posts available.';
    blogPostsContainer.appendChild(noPostsMessage);
  } else {
    blogPosts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');
      postElement.innerHTML = `
        <div class='title'>${post.title}</div>
        <hr>
        <div class='content'>${post.content}</div>
        <div class='username'>Posted by: ${post.username}</div>
      `;
      blogPostsContainer.appendChild(postElement);
    });
  }
});
