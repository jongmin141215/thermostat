var thermostat = new Thermostat();

function showTemp() {
  $('#temp').text(thermostat.temperature);
};

function displayEnergyUse() {
  if (thermostat.energyUsage() == 'Green') {
    $('#energy').removeClass('yellow red');
    $('#energy').addClass('green');
  } if (thermostat.energyUsage() == 'Yellow') {
    $('#energy').removeClass('red');
    $('#energy').addClass('yellow');
  } if (thermostat.energyUsage() == 'Red') {
    $('#energy').addClass('red');
  }
}
//
// function currentWeather

$(function() {
  showTemp();
  displayEnergyUse();

  $('#increase').click(function() {
    thermostat.increaseTemp();
    showTemp();
    displayEnergyUse();
  })

  $('#decrease').click(function() {
    thermostat.decreaseTemp();
    showTemp();
    displayEnergyUse();
  })

  $('#reset').click(function() {
    thermostat.reset();
    showTemp();
    displayEnergyUse();
  })

  $('#powerSaving :checkbox').change(function() {
    if ($(this).is(':checked')) {
      thermostat.powerSavingOn();
    } else {
      thermostat.powerSavingOff();
    } showTemp();
    displayEnergyUse();
  })

  Weather.getCurrent('London', function(current) {
    $('#currentTemp').text(current.temperature() - 273.15);
  });
  Weather.getCurrent('London', function(current) {
    $('#currentCond').text(current.conditions());
  });
  // Weather.getForecast('London', function(forecast) {
  //   $('#forecastHigh').text(forecast.high());
  // });
  // Weather.getForecast('London', function(forecast) {
  //   $('#forecastLow').text(forecast.high());
  //   $('#forecastLow').text(forecast.startAt());
  //   $('#forecastLow').text(forecast.endAt());
  // })


});
