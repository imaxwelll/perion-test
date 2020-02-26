import AOS from "aos";

// ..
AOS.init({
  offset: 900
});

let debounce_timer;
window.onscroll = function() {
  if (debounce_timer) {
    window.clearTimeout(debounce_timer);
  }
  debounce_timer = window.setTimeout(function() {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      let left = document.querySelectorAll(".disappearing");
      for (let i = 0; i < left.length; i++) {
        left[i].classList.remove("aos-animate");
      }
      // left.classList.remove("aos-animate")
      console.log("Fire");
    }
  }, 6000);
};

document.querySelector("#toggle2").onclick = closeBlock;

function closeBlock() {
  var block = document.querySelector(".teaser-wrapper");
  if (!block) {
    return;
  }
  return (block.hidden = !block.hidden);
}

var block = document.querySelector(".toggleAction");

Array.from(document.querySelectorAll("#toggle"), function(el) {
  el.onclick = function() {
    if (block.style.display === "none") {
      block.style.display = "flex";
    } else {
      block.style.display = "none";
    }
    return;
  };
});
