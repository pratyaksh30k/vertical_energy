function page1() {
  const page = document.getElementById("page1");
  page.classList.remove("hidden");

  // GSAP timeline
  const tl = gsap.timeline();

  // Stage 1: Fade + scale in background
  tl.fromTo(
    "#page1",
    { opacity: 0 },
    { opacity: 1, duration: 3, ease: "power2.out" }
  );

  // Stage 2: Header and content
  tl.from(
    "header",
    {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=1.2"
  );

  tl.from(".delay-1", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  tl.from(".delay-2", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  tl.from(".delay-3", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
}

function page3() {
  // Card hover animation
  document.querySelectorAll(".card").forEach((card) => {
    const imgURL = card.dataset.bg?.slice(5, -2);
    if (imgURL) {
      const img = new Image();
      img.src = imgURL;
    }
  });

  document.querySelectorAll(".card").forEach((card) => {
    const bg = card.getAttribute("data-bg");
    card.style.setProperty("--hover-bg", bg);
  });
}

function page4() {
  let next = document.querySelector(".next");
  let prev = document.querySelector(".prev");

  next.addEventListener("click", function () {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
  });

  prev.addEventListener("click", function () {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
  });
}

page1();
page3();
page4();
