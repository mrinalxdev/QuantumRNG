const QuantumGate = require("../gates/QuantumGates");

class QuantumCircuit {
  constructor() {
    this.qubits = [];
  }

  addQubit(initialValue) {
    this.qubits.push(initialValue);
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

module.exports = QuantumCircuit;
