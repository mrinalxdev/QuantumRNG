const QuantumTeleportation = require("./QuantumTeleportation");

class QuantumAlgorithm {
  static runQuantumEntanglement(circuit, qubit1, qubit2) {
    circuit.applyGate("H", qubit1);
    circuit.applyGate("CNOT", qubit1, qubit2);

    return circuit.measureQubit(qubit1);
  }

  static runShotFactoriization(circuit, targetQubit) {
    const numIterations = 3;

    for (let i = 0; i < numIterations; i++) {
      circuit.applyGate("H", targetQubit);
      circuit.applyGate("X", targetQubit);
      circuit.applyGate("H", targetQubit);
      circuit.applyGate("X", targetQubit);
      circuit.applyGate("H", targetQubit);
    }

    return circuit.measureQubit(targetQubit);
  }

  //Qubit sender (John) Qubit receiver (Bob) teleported (Charlie's Qubit) entangles with Bob Qubit
  static runQuantumTeleportation(
    circuit,
    senderQubit,
    entagnledBobQubit,
    receiverQubit
  ) {
    const senderJohnQubit = senderQubit;
    const entagnledBobQubit = entagnledBobQubit;
    const receiverCharlieQubit = receiverQubit;

    QuantumAlgorithm.runQuantumEntanglement(
      circuit,
      senderJohnQubit,
      entagnledBobQubit
    );

    circuit.applyGate("H", receiverCharlieQubit);
    circuit.applyGate("X", receiverCharlieQubit);

    circuit.applyGate("CNOT", receiverCharlieQubit, senderJohnQubit);
    QuantumAlgorithm.runQuantumEntanglement(
      circuit,
      senderJohnQubit,
      entagnledBobQubit
    );

    const measurement1 = circuit.measureQubit(senderJohnQubit);
    const measurement2 = circuit.measureQubit(receiverCharlieQubit);

    if (measurement2 === 1) {
      circuit.applyGate("X", entagnledBobQubit);
    }

    if (measurement1 === 1) {
      circuit.applyGate("Z", entagnledBobQubit);
    }

    return circuit.measureQubit(entagnledBobQubit);
  }
}

module.exports = QuantumAlgorithm