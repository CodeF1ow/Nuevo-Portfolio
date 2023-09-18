import { terminalCommands } from './constants';
import JSConfetti from 'js-confetti';
import { playSample, stopSample } from './audio.utils';
import {
  continueAnimation,
  isAnimationComplete,
  startAnimation,
} from '../store/store';
import { caretUpBoldIcon } from './constants';
import { sleep } from './sleep';
import { sound } from '../store/store';

const keyboardSounds: NodeListOf<HTMLAudioElement> =
  document.querySelectorAll('.keyboard-sound');
const blip: HTMLAudioElement | null = document.querySelector('#blip');

// velocidad de animaciónes
const type = 200;
const fast = 100;
const longPause = 1500;

/*
 * Funciones
 */
const playRandomKeyboardSound = (i?: number) => {
  if (i && keyboardSounds[i]) {
    keyboardSounds[i]!.play();
    return;
  }
  const randomIndex = Math.floor(Math.random() * keyboardSounds.length);
  keyboardSounds[randomIndex]!.play();
};

const runTerminal = async (sound: boolean) => {
  const terminalInput = document.querySelector('#terminal-input');
  const terminalOutput = document.querySelector('#terminal-output');
  if (!terminalInput || !terminalOutput) return;

  for (let command of terminalCommands) {
    // Escribe el comando en la terminal.
    for (let i = 0; i < command.command.length; i++) {
      if (!continueAnimation.get()) return;
      if (sound) playRandomKeyboardSound(i);
      terminalInput!.textContent! += command.command[i];
      if (i % 4 === 0) {
        await sleep(type);
      } else {
        await sleep(fast);
      }
    }
    // muestra la salida del comando a la pantalla
    for (let output of command.output) {
      if (!continueAnimation.get()) return; // Si el usuario hace clic en un enlace, se detiene la animación.
      if (sound && blip) playSample(blip); // Si el sonido está habilitado, se reproduce sonido intermitente.
      // crea el elemento de la lista y agréguelo a la salida del terminal
      const li = document.createElement('li');
      li.className =
        'flex text-xs md:text-base font-semibold items-center gap-2 fade-in';

      const iconDiv = document.createElement('div');
      iconDiv.className = 'w-4 h-4 rotate-90';
      iconDiv.innerHTML = caretUpBoldIcon;

      const textDiv = document.createElement('div');
      textDiv.textContent = output;

      li.appendChild(iconDiv);
      li.appendChild(textDiv);

      terminalOutput.appendChild(li);
      await sleep(200);
      if (blip) stopSample(blip);
    }
    if (terminalInput.textContent === 'Divertirse') {
      const confetti = new JSConfetti();
      confetti.addConfetti();
    }
    await sleep(longPause);
    if (terminalInput.textContent !== 'Divertirse') {
      terminalInput.textContent = '';
    } 
  }   
  isAnimationComplete.set(true); // La animación ha terminado.
};
const updateCompletedAnimation = () => {
  const terminalInput = document.querySelector('#terminal-input');
  const terminalOutput = document.querySelector('#terminal-output');
  if (!terminalInput || !terminalOutput) return;
  terminalInput.textContent = 'Divertirse';
  for (let command of terminalCommands) {
    for (let output of command.output) {
      const li = document.createElement('li');
      li.className = 'flex items-center gap-2 fade-in';

      const iconDiv = document.createElement('div');
      iconDiv.className = 'w-4 h-4 rotate-90';
      iconDiv.innerHTML = caretUpBoldIcon;

      const textDiv = document.createElement('div');
      textDiv.textContent = output;

      li.appendChild(iconDiv);
      li.appendChild(textDiv);

      terminalOutput.appendChild(li);
    }
  }
};

document.addEventListener('astro:page-load', () => {
  startAnimation.listen((startAnimation) => {
    if (startAnimation) {
      runTerminal(sound.get() === 'true');
    }
  });
  if (!continueAnimation.get()) {
    updateCompletedAnimation();
  }
});
