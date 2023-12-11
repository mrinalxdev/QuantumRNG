class QuantumErrorConnection {
  static runShorCode(qubits) {
    const errorProbability = 0.1;
    const noisyQubits = qubits.map((qubit) => {
      return Math.random() < errorProbability ? 1 - qubit : qubit;
    });

    const correctedQubit = [];
    for (let i = 0; i < noisyQubits.length; i++) {
      const neighbors = this.getNeighbors(i, noisyQubits.length);
      const majorityVote = this.calculationMajorityVote(neighbors, noisyQubits);

      correctedQubit.push(majorityVote);
    }

    return correctedQubit;
  }

  static getNeighbors(index, length) {
    const prevIndex = (index - 1 + length) % length;
    const nextIndex = (index + 1) % length;
    return [prevIndex, nextIndex, index];
  }

  static calculationMajorityVote(neighbors, qubits) {
    const voteCount = { 0: 0, 1: 0 };

    for (const neighbor of neighbors) {
      const value = qubits[neighbor];
      voteCount[value]++;
    }

    return voteCount[0] > voteCount[1] ? 0 : 1;
  }

  static visualizeErrorConnection(originalQubits, noisyQubits, correctQubits) {
    console.log("Original Qubits: ", originalQubits);
    console.log("Noisy Qubits: ", noisyQubits);
    console.log("Corrected Qubits: ", correctQubits);
  }
}

module.exports = QuantumErrorConnection