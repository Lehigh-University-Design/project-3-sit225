let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";


  // Call typewriter functions based on the current slide index
  if (slideIndex === 1) {
    animateFivePebbles(); // Call the function for the Five Pebbles typewriter animation
  } else if (slideIndex === 2) {
    animateLooksToTheMoon(); // Call the function for the Looks to the Moon typewriter animation
  } else if (slideIndex === 3) {
    animateSevenRedSuns(); // Call the function for the Seven Red Suns typewriter animation
  }
}

// Typewriter animations
function animateFivePebbles() {
  var fp = document.getElementById('five-pebbles');
  var typewriter = new Typewriter(fp, {
    loop: false,
    delay: 75,
  });

  typewriter
    .typeString('<h1>Five Pebbles</h1>')
    .pauseFor(500)
    .typeString('The youngest iterator tasked with solving "The Great Problem".')
    .pauseFor(300)
    .typeString('<br><br>He is resentful of the fact the Ancients left them behind with a task that no longer has any meaning or purpose. In his frustration, Five Pebbles came up with an experiment to overwrite his self-destructive taboo in an attempt to permanently end his cycle.')
    .typeString('<br><br>However, due to the increased intake of water needed to conduct this experiment, he left his sister superstructure, Looks to the Moon, with no water. This led to her suffering immensely from slag build-up, and eventually, she was forced to stop Five Pebbles, ultimately resulting in him failing his experiment.')
    .pauseFor(400)
    .typeString('<br><br>Five Pebbles now suffers from The Rot, a byproduct of his failure.')
    .start();
}

function animateLooksToTheMoon() {
  var lttm = document.getElementById('lttm');
  var typewriter = new Typewriter(lttm, {
    loop: false,
    delay: 75,
  });

  typewriter
    .typeString('<h1>Looks to the Moon</h1>')
    .pauseFor(500)
    .typeString("One of the oldest iterators, nicknamed Big Sis Moon.")
    .pauseFor(300)
    .typeString("<br><br>She was beloved by her people who lived in the Luna, a city on top of her structure. Being Five Pebbles' superior, she often guided him and ensured that he was on the right path. However, she ended up being greatly hurt by Five Pebbles.")
    .typeString("<br><br>Five Pebbles attempted an experiment that required stealing water from Moon. Days without water left her to build of slag in her pipes and caused a great extent of damage to her structure. With no other choice, she forcefully sent a message to Five Pebbles as his superior.")
    .pauseFor(400)
    .typeString("<br><br>What she didn't know is that she doomed Five Pebbles in the process of interrupting him.")
    .start();
}

function animateSevenRedSuns() {
  var srs = document.getElementById('srs');
  var typewriter = new Typewriter(srs, {
    loop: false,
    delay: 75,
  });

  typewriter
    .typeString('<h1>Seven Red Suns</h1>')
    .pauseFor(500)
    .typeString("Five Pebbles' mentor, the one responsible for delivering him the method to his doomed experiment.")
    .pauseFor(300)
    .typeString("<br><br>Seven Red Suns is often delivering messages to Five Pebbles via a creature named Spearmaster. Spearmaster was created for the purpose of travelling far distances and sending messages to other iterators. It was through this method that the pearl that contained the genetic shuffling method would be sent.")
    .typeString("<br><br>Seven Red Suns thought that Five Pebbles would be responsible with this information, but while talking to No Significant Harrassment he expresses that he regrets his decision.")
    .start();
}
