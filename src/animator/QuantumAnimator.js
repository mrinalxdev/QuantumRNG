class QuantumAnimator {
  constructor(element) {
    this.element = element;
  }

  superpostionAnimation({ duration, property, values, easing = "linear" }) {
    const startTime = Date.now();
    const easeFunctions = {
      linear: (t) => t,
      easeInQuad: (t) => t * t,
      easeOutQuad: (t) => t * (2 - t),
      easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    };

    const ease = easeFunctions[easing] || easeFunctions.linear;

    const animate = () => {
      const currentTime = Date.now();
      const progress = Math.min(1, (currentTime - startTime) / duration);

      const interpolatedValue =
        values[0] + ease(progress * (values[1] - values[0]));
      this.element.style[property] = interpolatedValue;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }

  quantumGateAnimation({ duration, gates }) {
    const startTime = Date.now();
    let currentState = 0;

    const animate = () => {
      const currentTime = Date.now();
      const progress = Math.min(1, (currentTime - startTime) / duration);

      currentState = Math.floor(progress * gates.length);
      this.element.innerHTML = gates[currentState];

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }

  entangledAnimation({ duration, property, values, entangledElements }) {
    const startTime = Date.now();
    const animate = () => {
      const currentTime = Date.now();
      const progress = Maths.min(1, (currentTime - startTime) / duration);

      const interpolatedValue = values[0] + progress * (values[1] - values[0]);
      this.element.style[property] = interpolatedValue;

      entangledElements.forEach((entangledElement) => {
        entangledElement.style[property] = interpolatedValue;
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }
}

module.exports = QuantumAnimator;