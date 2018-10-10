$(document).ready(function() {

    var audio = new Audio("Audio/Star_Fighter-Wice.mp3");
    audio.play();

  function loop() {
    $('#michael-jordan').animate({'top': '200px'}, {
        duration: 400,
        complete: function() {
            $('#michael-jordan').animate({top: '210px'}, {
                duration: 400,
                complete: loop});
        }
      });
}
loop();

function loop1() {
  $('#kanye-west').animate({'top': '210px'}, {
      duration: 400,
      complete: function() {
          $('#kanye-west').animate({top: '220px'}, {
              duration: 400,
              complete: loop1});
      }
    });
}
loop1();

function loop2() {
  $('#Straight-cutout').animate({'left': '30px'}, {
      duration: 500,
      complete: function() {
          $('#Straight-cutout').animate({left: '40px'}, {
              duration: 500,
              complete: loop2});
      }
    });
}
loop2();

function loop3() {
  $('#Up-cutout').animate({'top': '20px'}, {
      duration: 500,
      complete: function() {
          $('#Up-cutout').animate({'top': '10'}, {
              duration: 500,
              complete: loop3});
      }
    });
}
loop3();

function loop4() {
  $('#Facts-cutout').animate({'left': '230px'}, {
      duration: 500,
      complete: function() {
          $('#Facts-cutout').animate({left: '240px'}, {
              duration: 500,
              complete: loop4});
      }
    });
}
loop4();

  var modal = document.getElementById('myModal');
  var modalbtn = document.getElementById("modalBtn");
  var span = document.getElementsByClassName("close")[0];

  modalbtn.onclick = function() {
      modal.style.display = "block";
  }
  span.onclick = function() {
      modal.style.display = "none";
  }
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

    window.sr = ScrollReveal();
    sr.reveal('#start-btn', {
      duration: 2000,
      origin:'bottom',
      distance:'800px',
      viewFactor: 0.2
    });

});
