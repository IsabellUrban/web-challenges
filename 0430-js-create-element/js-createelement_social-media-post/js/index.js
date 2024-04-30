console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
newPost.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newPost.append(postContent);

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");
newPost.append(postFooter);

const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@username";
postFooter.append(postUsername);

const postButton = document.createElement("button");
postButton.classList.add("post__button");
postButton.textContent = "♥ Like";
postFooter.append(postButton);

postButton.addEventListener("click", handleLikeButtonClick);

document.body.append(newPost);
