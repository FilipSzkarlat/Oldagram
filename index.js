const mainEl = document.querySelector("main");

const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

for (let i = 0; i < posts.length; i++) {
  mainEl.innerHTML += `<section>
        <div class="user-container container">
          <img
            class="avatar"
            src="${posts[i].avatar}"
            alt="Profile picture of Vintent van Gogh."
          />
          <div class="user-data-container">
            <p class="name bold">${posts[i].name}</p>
            <p class="location">${posts[i].location}</p>
          </div>
        </div>
        <img class="post" src="${posts[i].post}" alt="" />
        <div class="bottom-section container">
          <div class="btns-container">
            <button class="btn">
              <img class="icon" src="images/icon-heart.png" alt="" />
            </button>
            <button class="btn">
              <img class="icon" src="images/icon-comment.png" alt="" />
            </button>
            <button class="btn">
              <img class="icon" src="images/icon-dm.png" alt="" />
            </button>
          </div>
          <p class="likes bold">${posts[i].likes} likes</p>
          <p class="comment">
            <span class="username bold">${posts[i].username}</span>${posts[i].comment}
          </p>
        </div>
      </section>`;
}
