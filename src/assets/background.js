(function () {
  'use strict';

  const DOMReady = function (a, b, c) { b = document, c = 'addEventListener'; b[c] ? b[c]('DOMContentLoaded', a) : window.attachEvent('onload', a) }

  const sampleCommands = [
    'Good Morning, Siri',
    'Siri, turn on the coffee machine',
    'Good Night!',
    'Turn down the cinema room lights',
    'Set the Netflix and Chill scene',
    'Open the garage door',
    'Start my robot vaccuum cleaner',
    'Close the blinds, Siri!',
    'Run "Aziz, Light"',
    'Turn off the driveway lights',
    'Set living room to 20 degrees',
    'Siri, unlock the front door',
    'Arm the alarm system',
    'Siri, turn off the smoke alarm',
    'Turn off my TV'
  ];

  const levels = [{
    id: 1,
    className: '__lvl1',
    parallaxSpeed: 7
  }, {
    id: 2,
    className: '__lvl1',
    parallaxSpeed: 5.5
  }, {
    id: 3,
    className: '__lvl1',
    parallaxSpeed: 2.5
  }, {
    id: 4,
    className: '__lvl1',
    parallaxSpeed: 0.5
  }];

  initialise();

  function initialise() {
    DOMReady(function () {
      for (var i = 0; i < 5; i++) {
        createCommandHtml(true);
      }
    });
    document.addEventListener('webkitAnimationEnd', onAnimationEnded);
  }

  function onAnimationEnded(e) {
    var $e = e.target.parentNode;
    var $anim = e.animationName;
    if ($anim.match('level')) {
      $e.parentNode.removeChild($e);
      createCommandHtml();
    }
  }

  // from lodash
  function baseRandom(lower, upper) {
    return lower + Math.floor(Math.random() * (upper - lower + 1));
  }

  // from lodash
  function arraySample(array) {
    var length = array.length;
    return length ? array[baseRandom(0, length - 1)] : undefined;
  }

  // from lodash
  function baseSample(collection) {
    return arraySample(values(collection));
  }

  // from lodash
  function sample(collection) {
    var func = Array.isArray(collection) ? arraySample : baseSample;
    return func(collection);
  }

  // from lodash
  function baseRandom(lower, upper) {
    return lower + Math.floor(Math.random() * (upper - lower + 1));
  }

  function createCommandHtml(firstRun) {
    var output = document.getElementById('commandParallax');
    var lvl = sample(levels);
    var commandText = sample(sampleCommands);
    var commandHtml = `
          <span
            class="command ${lvl.className} rellax"
            style="${randomisePosition(firstRun)}"
            data-rellax-speed="${lvl.parallaxSpeed}">
              <span>${commandText}</span>
          </span>
        `;
    output.insertAdjacentHTML('beforeend', commandHtml);
  }

  function randomisePosition(firstRun) {
    var styles = {};
    var x = baseRandom(5, 90);
    var y = baseRandom(-5, 80);
    styles.bottom = y + '%';
    styles.left = x + '%';
    if (firstRun) {
      styles.animationDelay = baseRandom(-2.2, .8) + 's';
    }
    return Object.entries(styles).map(([key, value]) => {
      return key + ': ' + value;
    }).join('; ');
  }
}());