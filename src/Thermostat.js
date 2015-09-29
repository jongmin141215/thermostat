function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.powerSavingOn();
};

Thermostat.prototype.increaseTemp = function() {
  this.temperature ++;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature <= this.minTemp) {
    throw new Error('Cannot go below minimumTemp');
  } else {
    this.temperature --;
  }
};

Thermostat.prototype.powerSavingOn = function() {
  this.isPowerSaving = true;
  this.maxTemp = 25;
};

Thermostat.prototype.powerSavingOff = function() {
  this.isPowerSaving = false;
  this.maxTemp = 32;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) return 'Green';
  if (this.temperature < 25) return 'Yellow';
  return 'Red';
}
