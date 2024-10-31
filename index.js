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
                <img class="icon heart" src="images/icon-heart.png" alt="" />
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
// LIKES
const postEl = document.querySelectorAll(".post");
const likesEl = document.querySelectorAll(".likes");
const heartEl = document.querySelectorAll(".heart");
// LIKES first section
postEl[0].addEventListener("dblclick", () => {
  posts[0].likes += 1;
  likesEl[0].innerHTML = `<p class="likes bold likes${0}">${
    posts[0].likes
  } likes</p>`;
});

heartEl[0].addEventListener("click", () => {
  posts[0].likes += 1;
  likesEl[0].innerHTML = `<p class="likes bold likes${0}">${
    posts[0].likes
  } likes</p>`;
});

// LIKES second section
postEl[1].addEventListener("dblclick", () => {
  posts[1].likes += 1;
  likesEl[1].innerHTML = `<p class="likes bold likes${1}">${
    posts[1].likes
  } likes</p>`;
});

heartEl[1].addEventListener("click", () => {
  posts[1].likes += 1;
  likesEl[1].innerHTML = `<p class="likes bold likes${1}">${
    posts[1].likes
  } likes</p>`;
});

// LIKES third section
postEl[2].addEventListener("dblclick", () => {
  posts[2].likes += 1;
  likesEl[2].innerHTML = `<p class="likes bold likes${2}">${
    posts[2].likes
  } likes</p>`;
});

heartEl[2].addEventListener("click", () => {
  posts[2].likes += 1;
  likesEl[2].innerHTML = `<p class="likes bold likes${2}">${
    posts[2].likes
  } likes</p>`;
});
