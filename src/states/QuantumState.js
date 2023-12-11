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

module.exports = QuantumState; 