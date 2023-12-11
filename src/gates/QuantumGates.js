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


module.exports = QuantumGate