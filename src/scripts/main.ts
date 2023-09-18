import { sound, startAnimation } from "../store/store";
import { sleep } from "./sleep";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function (registration: ServiceWorkerRegistration) {
      console.log("Registrado con exito, el alcance es:", registration.scope);
    })
    .catch((error) => {
      console.error(
        `Error en el registro del trabajador del servicio: ${error}`
      );
    });
} else {
  console.error("Los trabajadores de servicios no reciben apoyo.");
}

const typedTitle = async () => {
  const titleText = document.querySelector("#title");
  if (!titleText) return;
  const title = "Kiri86";

  for (let char of title) {
    titleText.textContent += char;
    await sleep(40);
  }
  await sleep(500);
};

// funciones para ejecutar en cada carga de página por astro
document.addEventListener("DOMContentLoaded", () => {
  typedTitle();
});

const modalButtonSound: HTMLButtonElement | null = document.querySelector(
  "#modal-button-sound"
);
const modalButtonNoSound: HTMLButtonElement | null = document.querySelector(
  "#modal-button-no-sound"
);
if (modalButtonSound && modalButtonNoSound) {
  modalButtonSound.addEventListener("click", () => {
    sound.set("true");
    startAnimation.set(true);
  });
  modalButtonNoSound.addEventListener("click", () => {
    sound.set("false");
    startAnimation.set(true);
  });
}
