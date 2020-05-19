// Write your JavaScript code here!
window.addEventListener('load', function () {
  let form = document.querySelector('Form');
  let pilotInput = document.querySelector('input[name=pilotName]');
  let coPilotInput = document.querySelector('input[name=copilotName]');
  let fuelInput = document.querySelector('input[name=fuelLevel]');
  let cargoInput = document.querySelector('input[name=cargoMass]');
  //   let pilotName;
  //   let coPilotName;
  //   let fuelValue;
  //   let cargoValue;
  form.addEventListener('submit', function (event) {
    //Make sure that user inputted something
    switch ('') {
      case pilotInput.value:
        alert('All fields are required');
        preventDefault();
        break;
      case coPilotInput.value:
        alert('All fields are required');
        preventDefault();
        break;
      case fuelInput.value:
        alert('All fields are required');
        preventDefault();
        break;
      case cargoInput.value:
        alert('All fields are required');
        preventDefault();
        break;
    }

    //Make sure inputs are correct type
    switch (false) {
      case isNaN(pilotInput.value):
        alert('Pilot input must be a string');
        preventDefault();
        break;
      case isNaN(coPilotInput.value):
        alert('Copilot input must be a string');
        preventDefault();
        break;
      case !isNaN(fuelInput.value.toString()):
        alert('Fuel input must be a number');
        preventDefault();
        break;
      case !isNaN(cargoInput.value.toString()):
        alert('Cargo input must be a number');
        preventDefault();
        break;
    }

    document.getElementById(
      'pilotStatus'
    ).innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
    document.getElementById(
      'copilotStatus'
    ).innerHTML = `Copilot ${coPilotInput.value} is ready for launch`;

    if (Number(fuelInput.value) < 10000) {
      document.getElementById('faultyItems').style.visibility = 'visible';
      document.getElementById('fuelStatus').innerHTML =
        'There is not enough fuel for the journey';
      document.getElementById('launchStatus').innerHTML =
        'Shuttle not ready for launch';
      document.getElementById('launchStatus').style.color = 'red';
    }
    if (Number(cargoInput.value) > 10000) {
      document.getElementById('faultyItems').style.visibility = 'visible';
      document.getElementById('cargoStatus').innerHTML =
        'There is too much mass for the shuttle to takeoff';
      document.getElementById('launchStatus').innerHTML =
        'Shuttle not ready for launch';
      document.getElementById('launchStatus').style.color = 'red';
    }

    if (Number(cargoInput.value) <= 10000 && Number(fuelInput.value) >= 10000) {
      document.getElementById('launchStatus').style.color = 'green';
      document.getElementById('launchStatus').innerHTML =
        'Shuttle is ready for launch';
    }

    let planetChoice = Math.floor(Math.random() * 6 + 1);

    fetch('https://handlers.education.launchcode.org/static/planets.json').then(
      function (response) {
        response.json().then(function (json) {
          const div = document.getElementById('missionTarget');
          div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[planetChoice].name}</li>
            <li>Diameter: ${json[planetChoice].diameter}</li>
            <li>Star: ${json[planetChoice].star}</li>
            <li>Distance from Earth: ${json[planetChoice].distance}</li>
            <li>Number of Moons: ${json[planetChoice].moons}</li>
         </ol>
         <img src="${json[planetChoice].image}">
          `;
        });
      }
    );

    event.preventDefault();
  });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
