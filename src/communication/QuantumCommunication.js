const QuantumState = require('../states/QuantumState')

class QuantumCommunication {
  static encodeMessageWithSuperposition(messages) {
    const quantumState = new QuantumState();

    messages.forEach((message, index) => {
      const qubitName = `message_${index}`;
      quantumState.setQubit(qubitName, message);
    });

    return quantumState;
  }

  static decodeSuperpositionMessage(quantumState) {
    const message = [];

    for (const qubitName in quantumState.qubits) {
      const message = quantumState.measure(qubitName);

      message.push({ qubit: qubitName, message });
    }

    return message;
  }
}

module.exports = QuantumCommunication 