document.querySelector('.logout-btn').addEventListener('click', function() {
    // Perform logout operation here
    window.location.href = 'index.html';
});

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Format the time as HH:MM:SS
    var timeString = hours.toString().padStart(2, '0') + ':' +
      minutes.toString().padStart(2, '0') + ':' +
      seconds.toString().padStart(2, '0');
  
    // Update the clock element
    var clockElement = document.getElementById('clock');
    clockElement.textContent = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);

  
// Moon phase data
var moonPhases = [
    {
      name: 'New Moon',
      image: 'new_moon.jpg'
    },
    {
      name: 'Waxing Crescent',
      image: 'waxing_crescent.jpg'
    },
    {
      name: 'First Quarter',
      image: 'first_quarter.jpg'
    },
    {
      name: 'Waxing Gibbous',
      image: 'waxing_gibbous.jpg'
    },
    {
      name: 'Full Moon',
      image: 'full_moon.jpg'
    },
    {
      name: 'Waning Gibbous',
      image: 'waning_gibbous.jpg'
    },
    {
      name: 'Third Quarter',
      image: 'third_quarter.jpg'
    },
    {
      name: 'Waning Crescent',
      image: 'waning_crescent.jpg'
    }
  ];
  
  // Calculate the current moon phase
  function getCurrentMoonPhase() {
    var now = new Date();
    var phase = (now.getTime() / 86400000 - 60) / 29.53058867;
    phase = phase - Math.floor(phase);
    return Math.floor(phase * 8);
  }
  
  // Update the moon phase clock display
  function updateMoonPhaseClock() {
    var moonPhaseClock = document.getElementById('moon-phase-clock');
    var moonPhaseImage = document.getElementById('moon-phase-image');
    var moonPhaseName = document.getElementById('moon-phase-name');
    
    var moonPhase = getCurrentMoonPhase();
    var phaseData = moonPhases[moonPhase];
    
    moonPhaseImage.src = phaseData.image;
    moonPhaseImage.alt = phaseData.name;
    moonPhaseName.textContent = phaseData.name;
  }
  
  // Update the moon phase clock initially
  updateMoonPhaseClock();
  
  // Update the moon phase clock every hour
  setInterval(updateMoonPhaseClock, 3600000);
  