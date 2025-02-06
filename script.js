document.addEventListener("DOMContentLoaded", () => {
    // Elements for Alert
    const alertBox = document.getElementById("custom-alert");
    const alertTrigger = document.getElementById("show-alert");
    const alertClose = document.getElementById("alert-close");

    // Elements for Confirm
    const confirmBox = document.getElementById("custom-confirm");
    const confirmTrigger = document.getElementById("show-confirm");
    const confirmClose = document.getElementById("confirm-close");
    const confirmOk = document.getElementById("confirm-ok");

    // Elements for Prompt
    const promptBox = document.getElementById("custom-prompt");
    const promptTrigger = document.getElementById("show-prompt");
    const promptClose = document.getElementById("prompt-close");
    const promptOk = document.getElementById("prompt-ok");
    const promptInput = document.getElementById("prompt-input");

    // Show Alert
    alertTrigger.addEventListener("click", () => {
        alertBox.style.display = "flex";
    });

    // Close Alert
    alertClose.addEventListener("click", () => {
        alertBox.style.display = "none";
    });

    // Show Confirm
    confirmTrigger.addEventListener("click", () => {
        confirmBox.style.display = "flex";
    });

    // Close Confirm
    confirmClose.addEventListener("click", () => {
        confirmBox.style.display = "none";
    });

    confirmOk.addEventListener("click", () => {
        confirmBox.style.display = "none";
        alert("You clicked OK!");
    });

    // Show Prompt
    promptTrigger.addEventListener("click", () => {
        promptBox.style.display = "flex";
    });

    // Close Prompt
    promptClose.addEventListener("click", () => {
        promptBox.style.display = "none";
    });

    promptOk.addEventListener("click", () => {
        alert(`Hello, ${promptInput.value}!`);
        promptBox.style.display = "none";
        promptInput.value = ""; // Clear input after submission

        fireCracker();

    });


    
    function fireCracker(){
        
    const count = 200,
    defaults = {
      origin: { y: 0.7 },
    };
  
  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }
  
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  
  fire(0.2, {
    spread: 60,
  });
  
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });

    }
});
