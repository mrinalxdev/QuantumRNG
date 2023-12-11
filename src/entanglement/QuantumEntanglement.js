class QuantumEntanglement {
  constructor() {
    this.variables = {};
  }

  createVariable(initialValue) {
    const variable = {
      value: initialValue,
      entangledVariables: [],
      set: function (newValue) {
        this.value = newValue;
        this.entangledVariables.forEach((entangledVar) => {
          entangledVar.value = newValue;
        });
      },

      entangle: function (otherVariable) {
        this.entangledVariables.push(otherVariable);
        otherVariable.entangledVariables.push(this);
      },
    };

    this.variables[variable.value] = variable;
    return variable;
  }
}

module.exports = QuantumEntanglement