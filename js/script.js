const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".img-wrapper");

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.x;
    prevScrollLeft = carousel.scrollLeft;
}

const dragStop = () => {
    isDragStart = false;
}

const dragging = (e) => {
    if(!isDragStart) return;
     e.preventDefault();
     let position = e.x - prevPageX;
     carousel.scrollLeft = prevScrollLeft - position;
}

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);

prev.addEventListener("click", function() {
    carousel.scrollLeft += -500;
    
})

next.addEventListener("click", function() {
    carousel.scrollLeft += 500;
    
})

const images = document.querySelectorAll(".img-content");
const myModal = document.querySelector(".myModal");
const closeBtn = document.querySelector(".close-modal-icon");

images.forEach(img => {
    img.addEventListener("click", () => {
        myModal.style.display = "block";
    })
})

closeBtn.addEventListener("click", () => {
    myModal.style.display = "none";
})

const validationCheck= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const emailInput = document.querySelector("input[name=email]");
const submit = document.querySelector(".btn");
const message = document.querySelector(".validation");

submit.addEventListener("click", (e) => {
    if(emailInput.value.match(validationCheck)) {
        const feedBack = alert("terima kasih suda mengisi!")
        return feedBack;
    } else {
        e.preventDefault();
        message.style.display = "block";
    }
})

const accordion = document.querySelectorAll(".accordion");

accordion.forEach(accor => {
    accor.addEventListener("click", function() {
      const panel = this.nextElementSibling;

      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    })
});

