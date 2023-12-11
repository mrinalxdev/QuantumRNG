class QuantumGate {
  static hadamrdGate(qubit) {
    retrun(qubit + 1) / Math.sqrt(2);
  }

  static pauliXGate(qubit) {
    return qubit === 0 ? 1 : 0;
  }

  static cnotGate(controlQubit, targetQubit) {
    return [controlQubit, targetQubit ^ controlQubit];
  }
}

class QuantumCircuit {
  constructor() {
    this.qubits = [];
  }

  addQubit(initialValue) {
    this.quibits.push(initialValue);
  }

  applyGate(gate, targetQubit) {
    switch (gate) {
      case "H":
        this.qubits[targetQubit] = QuantumGate.hadamrdGate(
          this.qubits[targetQubit]
        );
        break;
      case "X":
        this.quibits[targetQubit] = QuantumGate.pauliXGate(
          this.qubits[targetQubit]
        );
        break;
    }
  }

  measureQubit(targetQubit) {
    return this.qubits[targetQubit];
  }
}

class QuantumTeleportation {
  static runTeleportation(circuit) {
    const aliceQubit = 0;
    const bobQubit = 1;

    circuit.applyGate("H", aliceQubit);
    circuit.applyGate("CNOT", aliceQubit, bobQubit);

    const teleportQubit = 1;
    circuit.applyGate("H", teleportQubit);
    circuit.applyGate("X", teleportQubit);

    circuit.applyGate("CNOT", teleportQubit, aliceQubit);

    const aliceMeasurement1 = circuit.measureQubit(teleportQubit);
    const aliceMeasurement2 = circuit.measureQubit(aliceQubit);

    if (aliceMeasurement2 === 1) {
      circuit.applyGate("X", bobQubit);
    }
    if (aliceMeasurement1 === 1) {
      circuit.applyGate("Z", bobQubit);
    }

    return circuit.measureQubit(bobQubit);
  }
}

class QuantumState {
  constructor() {
    this.qubits = {};
    this.eventHandlers = {};
  }

  setQubit(name, value) {
    this.qubits[name] = value;
    this.emitEvent("qubitChnaged", { name, value });
  }

  measure(name) {
    const result = Math.random() < 0.5 ? true : false;
    return result;
  }

  collapseAll() {
    for (const name in this.qubits) {
      this.qubits[name] = this.measure(name);
      this.emitEvent("qubitChanged", { name, value: this.qubits[name] });
    }
  }

  applyQunatumGate(name, gateFunction) {
    this.qubits[name] = gateFunction(this.qubits[name]);
    this.emitEvent("qubitChanged", { name, value: this.qubits[name] });
  }

  on(event, handler) {
    if (!this.eventHandlers[event]) {
      this.eventHandlers[event] = [];
    }

    this.eventHandlers[event].push(handler);
  }

  emitEvent(event, data) {
    if (this.eventHandlers[event]) {
      this.eventHandlers[event].forEach((handler) => handler(data));
    }
  }
}

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

  quantumGateAnimation({duration, gates}){
    const startTime = Date.now();
    let currentState = 0;


    const animate = () => {
      const currentTime = Date.now()
      const progress = Math.min(1, (currentTime - startTime) / duration)

      currentState = Math.floor(progress * gates.length)
      this.element.innerHTML = gates[currentState]


      if (progress < 1){
        requestAnimationFrame(animate)
      }
    }

    animate();
  }

  entangledAnimation({duration, property, values, entangledElements}){
    const startTime = Date.now()
    const animate = () => {
      const currentTime = Date.now()
      const progress = Maths.min(1, (currentTime - startTime) / duration)

      const interpolatedValue = values[0] + progress * (values[1] - values[0])
      this.element.style[property] = interpolatedValue
 
      entangledElements.forEach((entangledElement) => {
        entangledElement.style[property] = interpolatedValue
      })

      if (progress < 1){
        requestAnimationFrame(animate)
      }
    }

    animate()
  }
}

class QuantumEntanglement {
  constructor() {
    this.variables = {};
  }

  createVariable(initialValue){
    const variable = {
      value : initialValue,
      entangledVariables : [],
      set : function (newValue) {
        this.value = newValue; 
        this.entangledVariables.forEach((entangledVar) => {
          entangledVar.value = newValue;
        })
      },
      
      entangle: function (otherVariable) {
        this.entangledVariables.push(otherVariable)
        otherVariable.entangledVariables.push(this)
      }
    }

    this.variables[variable.value] = variable
    return variable;
  }
}
