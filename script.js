const timeline = document.getElementById("timeline");
const scenes = [...document.querySelectorAll(".scene")];
const replayBtn = document.getElementById("replay");

const SCENE_DURATION = [4000, 3200, 3000, 3600, 5000]; // ms per scene

function playSequence() {
  let cumulative = 0;

  scenes.forEach((scene, index) => {
    scene.classList.remove("active");
    const delay = cumulative;
    const duration = SCENE_DURATION[index];

    setTimeout(() => {
      scene.classList.add("active");
    }, delay);

    if (index < scenes.length - 1) {
      setTimeout(() => {
        scene.classList.remove("active");
      }, delay + duration - 200);
    }

    cumulative += duration;
  });

  setTimeout(() => {
    scenes[scenes.length - 1].classList.add("active");
  }, cumulative);
}

replayBtn.addEventListener("click", () => {
  scenes.forEach((scene) => scene.classList.remove("active"));
  setTimeout(playSequence, 100);
});

playSequence();
