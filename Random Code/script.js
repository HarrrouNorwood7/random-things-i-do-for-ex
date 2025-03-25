let clickCount = 0;

      function startChallenge() {
        document.querySelector(".enter-btn").style.display = "inline-block";
      }

      function moveButton() {
        const button = document.querySelector(".enter-btn");
        if (clickCount < 2) {
          const randomX = Math.random() * (window.innerWidth - 200);
          const randomY = Math.random() * (window.innerHeight - 200);
          button.style.position = "absolute";
          button.style.left = `${randomX}px`;
          button.style.top = `${randomY}px`;
          clickCount++;
        } else {
          button.style.display = "none";
          document.getElementById("message").style.display = "block";
          showFloatingItems();
        }
      }

      function showFloatingItems() {
        const floatingContainer = document.querySelector(".floating-items");
        for (let i = 0; i < 20; i++) {
          const item = document.createElement("div");
          item.classList.add("item");
          item.style.left = `${Math.random() * 100}vw`;
          item.style.animationDuration = `${3 + Math.random() * 3}s`;
          item.innerHTML = Math.random() > 0.5 ? "🌟" : "🌸";
          floatingContainer.appendChild(item);
          setTimeout(() => item.remove(), 5000);
        }
        setTimeout(showFinalMessage, 3000);
      }

      function showFinalMessage() {
        document.getElementById("message2").style.display = "block";
        document.getElementById("redirect-btn").style.display = "block";
      }

      function redirectToDrama() {
        window.location.href =
          "https://kisskh.co/Drama/The-Best-Thing/Episode-1?id=9579&ep=175639&page=0&pageSize=100";
      }