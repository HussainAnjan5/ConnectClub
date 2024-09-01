function showSection(sectionId) {
  var sections = document.getElementsByClassName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.add("hidden");
  }

  document.getElementById(sectionId).classList.remove("hidden");
}
document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.querySelector("#register-form");
  registerForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(registerForm);
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password, confirmPassword }),
      });

      const data = await response.json();
      const registerError = document.querySelector("#register-error");
      if (response.ok) {
        registerError.textContent = "";
        alert(data.message);
      } else {
        registerError.textContent = data.message;
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  });

  const loginForm = document.querySelector("#login-form");
  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      const loginError = document.querySelector("#login-error");
      if (response.ok) {
        loginError.textContent = "";
        alert(data.message);
      } else {
        loginError.textContent = data.message;
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  });
});
document
  .getElementById("registrationForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const response = await fetch(
      "http://localhost:8080/MOO755729/MOO755729/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      }
    );
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      showSection("home");
    } else {
      alert(data.message);
    }
    this.reset();
  });

document
  .getElementById("createUserForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const response = await fetch(
      "http://localhost:8080/MOO755729/MOO755729/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      }
    );
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      showSection("feed");
    } else {
      alert(data.message);
    }
    this.reset();
  });
document
  .getElementById("profileReg")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const response = await fetch(
      "http://localhost:8080/MOO755729/MOO755729/createProfile",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      }
    );
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      showSection("profile");
    } else {
      alert(data.message);
    }
    this.reset();
  });
document
  .getElementById("messagecreate")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const response = await fetch(
      "http://localhost:8080/MOO755729/MOO755729/createMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      }
    );
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      showSection("messages");
    } else {
      alert(data.message);
    }
    this.reset();
  });
async function fetchMessages() {
  try {
    const response = await fetch(
      "http://localhost:8080/MOO755729/MOO755729/getMessages"
    );
    const messages = await response.json();
    console.log(messages);
    const messagesDiv = document.getElementById("Posts");
    messagesDiv.innerHTML = "";
    messages.forEach((message) => {
      const messageDiv = document.createElement("div");
      messageDiv.innerHTML = `
        <div class="message_section">
            <div class="logo">
                <img src="/assets/ammy.jpeg" alt="" />
            </div>
            <div class="main-content">
                <div class="top">
                    <h5>${message.name}</h5>
                    <span>12:20PM</span>
                </div>
                <div class="bottom">
                    <p>${message.content}</p>
                </div>
            </div>
        </div>
    `;
      messagesDiv.appendChild(messageDiv);
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
}
window.addEventListener("load", fetchMessages);
function refreshPage() {
  if (response.ok) {
    alert(data.message);
    showSection("messages");
    location.reload();
  } else {
    alert(data.message);
  }
  location.reload("messages");
}

