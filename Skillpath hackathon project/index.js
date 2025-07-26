const input = document.getElementById("goalInput");
const searchBtn = document.getElementById("searchBtn");
const searchBar = document.querySelector(".search-bar");
const careerCards = document.querySelectorAll(".career-card");

const roadmaps = {
  "React Developer": [
    "Learn HTML, CSS, JS",
    "Learn React basics",
    "Hooks and Context",
    "State Management",
    "Build Projects"
  ],
  "Data Scientist": [
    "Learn Python",
    "Understand Pandas and Numpy",
    "Data Cleaning",
    "ML with Scikit-learn",
    "Deep Learning"
  ],
  "Frontend Developer": [
    "HTML, CSS, JS",
    "Responsive Design",
    "CSS Frameworks",
    "Version Control",
    "API Integration"
  ]
};

searchBtn.addEventListener("click", () => {
  const goal = input.value.trim();
  if (goal) {
    animateSearchBar();
    setTimeout(() => {
      localStorage.setItem("selectedGoal", goal);
      window.location.href = "roadmap.html";
    }, 1000);
  }
});

careerCards.forEach((card) => {
  card.addEventListener("click", () => {
    input.value = card.dataset.career;
  });
});

function animateSearchBar() {
  searchBar.style.transform = "scale(1.1) translateY(-50px)";
  setTimeout(() => {
    searchBar.style.transform = "translateY(-100px)";
  }, 500);
}
// Elements
const loginModal = document.getElementById("loginModal");
const loginSubmit = document.getElementById("loginSubmit");
const loginMsg = document.getElementById("loginMsg");

// Disable page access until logged in
function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  if (!isLoggedIn) {
    loginModal.style.display = "flex";
    document.body.classList.add("locked");
  } else {
    loginModal.style.display = "none";
    document.body.classList.remove("locked");
    updateAuthUI();
  }
}

// Handle login
loginSubmit.addEventListener("click", () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email === "user@example.com" && password === "123456") {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", email.split("@")[0]);
    loginModal.style.display = "none";
    document.body.classList.remove("locked");
    updateAuthUI();
  } else {
    loginMsg.innerText = "Invalid email or password";
    loginMsg.style.color = "red";
  }
});

// Update navbar UI if logged in
function updateAuthUI() {
  const authSection = document.querySelector(".auth-buttons");
  const username = localStorage.getItem("username");
  if (username) {
    authSection.innerHTML = `<p>Welcome, ${username}!</p>`;
  }
}

// Check login on page load
window.addEventListener("DOMContentLoaded", checkLoginStatus);

