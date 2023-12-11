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

module.exports = QuantumTeleportation;
