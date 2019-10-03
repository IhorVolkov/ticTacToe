// for (let i = 0; i < 9; i++) {
//   document.getElementById('game').innerHTML += '<div class="block"></div>';
// }

// var game = document.getElementById('game');

// var step = 0;

// game.addEventListener('click', function(e) {
//   if (e.target.className == 'block') {
//     if (step % 2 == 0) {
//       e.target.innerHTML = 'X';
//     } else {
//       e.target.innerHTML = '0';
//     }
//     step++;
//     checkWinner();
//   }
// });
// //проверка победителя

// function checkWinner() {
//   var allblock = document.getElementsByClassName('block');
//   if (
//     allblock[0].innerHTML == 'X' &&
//     allblock[1].innerHTML == 'X' &&
//     allblock[2].innerHTML == 'X'
//   ) {
//     alert('Pobeda KRESTIKOV');
//     location.reload(); // перезагрузка страницы
//   }
//   if (
//     allblock[3].innerHTML == 'X' &&
//     allblock[4].innerHTML == 'X' &&
//     allblock[5].innerHTML == 'X'
//   ) {
//     alert('Pobeda KRESTIKOV');
//     location.reload();
//   }
//   if (
//     allblock[6].innerHTML == 'X' &&
//     allblock[7].innerHTML == 'X' &&
//     allblock[8].innerHTML == 'X'
//   ) {
//     alert('Pobeda KRESTIKOV');
//     location.reload();
//   }
//   if (
//     allblock[0].innerHTML == 'X' &&
//     allblock[3].innerHTML == 'X' &&
//     allblock[6].innerHTML == 'X'
//   ) {
//     alert('Pobeda KRESTIKOV');
//     location.reload();
//   }
//   if (
//     allblock[1].innerHTML == 'X' &&
//     allblock[4].innerHTML == 'X' &&
//     allblock[7].innerHTML == 'X'
//   ) {
//     alert('Pobeda KRESTIKOV');
//     location.reload();
//   }
//   if (
//     allblock[2].innerHTML == 'X' &&
//     allblock[5].innerHTML == 'X' &&
//     allblock[8].innerHTML == 'X'
//   ) {
//     alert('Pobeda KRESTIKOV');
//     location.reload();
//   }
//   if (
//     allblock[0].innerHTML == 'X' &&
//     allblock[4].innerHTML == 'X' &&
//     allblock[8].innerHTML == 'X'
//   ) {
//     alert('Pobeda KRESTIKOV');
//     location.reload();
//   }
//   if (
//     allblock[2].innerHTML == 'X' &&
//     allblock[4].innerHTML == 'X' &&
//     allblock[6].innerHTML == 'X'
//   ) {
//     alert('Pobeda KRESTIKOV');
//     location.reload();
//   }

//   //check Winner 0
//   if (
//     allblock[0].innerHTML == '0' &&
//     allblock[1].innerHTML == '0' &&
//     allblock[2].innerHTML == '0'
//   ) {
//     alert('Pobeda Nolikov');
//     location.reload();
//   }
//   if (
//     allblock[3].innerHTML == '0' &&
//     allblock[4].innerHTML == '0' &&
//     allblock[5].innerHTML == '0'
//   ) {
//     alert('Pobeda Nolikov');
//     location.reload();
//   }
//   if (
//     allblock[6].innerHTML == '0' &&
//     allblock[7].innerHTML == '0' &&
//     allblock[8].innerHTML == '0'
//   ) {
//     alert('Pobeda Nolikov');
//     location.reload();
//   }
//   if (
//     allblock[0].innerHTML == '0' &&
//     allblock[3].innerHTML == '0' &&
//     allblock[6].innerHTML == '0'
//   ) {
//     alert('Pobeda Nolikov');
//     location.reload();
//   }
//   if (
//     allblock[1].innerHTML == '0' &&
//     allblock[4].innerHTML == '0' &&
//     allblock[7].innerHTML == '0'
//   ) {
//     alert('Pobeda Nolikov');
//     location.reload();
//   }
//   if (
//     allblock[2].innerHTML == '0' &&
//     allblock[5].innerHTML == '0' &&
//     allblock[8].innerHTML == '0'
//   ) {
//     alert('Pobeda Nolikov');
//     location.reload();
//   }
//   if (
//     allblock[0].innerHTML == '0' &&
//     allblock[4].innerHTML == '0' &&
//     allblock[8].innerHTML == '0'
//   ) {
//     alert('Pobeda Nolikov');
//     location.reload();
//   }
//   if (
//     allblock[2].innerHTML == '0' &&
//     allblock[4].innerHTML == '0' &&
//     allblock[6].innerHTML == '0'
//   ) {
//     alert('Pobeda Nolikov');
//     location.reload();
//   }
// }

for (let i = 0; i < 9; i++) {
  document.getElementById('game').innerHTML += '<div class="block"></div>';
}

var game = document.getElementById('game');

var step = 0;

game.addEventListener('click', function(e) {
  if (e.target.className == 'block') {
    if (step % 2 == 0) {
      e.target.innerHTML = 'X';
    } else {
      e.target.innerHTML = '0';
    }
    step++;
    checkWinner();
  }
});

function checkWinner() {
  var allblock = document.getElementsByClassName('block');
  console.log(allblock);
  if (
    allblock[0].innerHTML == 'X' &&
    allblock[1].innerHTML == 'X' &&
    allblock[2].innerHTML == 'X'
  ) {
    alert('Победили крестики!');
    location.reload();
  }
  if (
    allblock[3].innerHTML == 'X' &&
    allblock[4].innerHTML == 'X' &&
    allblock[5].innerHTML == 'X'
  ) {
    alert('Победили крестики!');
    location.reload();
  }
  if (
    allblock[6].innerHTML == 'X' &&
    allblock[7].innerHTML == 'X' &&
    allblock[8].innerHTML == 'X'
  ) {
    alert('Победили крестики!');
    location.reload();
  }
  if (
    allblock[0].innerHTML == 'X' &&
    allblock[3].innerHTML == 'X' &&
    allblock[6].innerHTML == 'X'
  ) {
    alert('Победили крестики!');
    location.reload();
  }
  if (
    allblock[1].innerHTML == 'X' &&
    allblock[4].innerHTML == 'X' &&
    allblock[7].innerHTML == 'X'
  ) {
    alert('Победили крестики!');
    location.reload();
  }
  if (
    allblock[2].innerHTML == 'X' &&
    allblock[5].innerHTML == 'X' &&
    allblock[8].innerHTML == 'X'
  ) {
    alert('Победили крестики!');
    location.reload();
  }
  if (
    allblock[0].innerHTML == 'X' &&
    allblock[4].innerHTML == 'X' &&
    allblock[8].innerHTML == 'X'
  ) {
    alert('Победили крестики!');
    location.reload();
  }
  if (
    allblock[2].innerHTML == 'X' &&
    allblock[4].innerHTML == 'X' &&
    allblock[6].innerHTML == 'X'
  ) {
    alert('Победили крестики!');
    location.reload();
  }
  //noliki

  if (
    allblock[0].innerHTML == '0' &&
    allblock[1].innerHTML == '0' &&
    allblock[2].innerHTML == '0'
  ) {
    alert('Победили noliki');
    location.reload();
  }
  if (
    allblock[3].innerHTML == '0' &&
    allblock[4].innerHTML == '0' &&
    allblock[5].innerHTML == '0'
  ) {
    alert('Победили noliki');
    location.reload();
  }
  if (
    allblock[6].innerHTML == '0' &&
    allblock[7].innerHTML == '0' &&
    allblock[8].innerHTML == '0'
  ) {
    alert('Победили noliki');
    location.reload();
  }
  if (
    allblock[0].innerHTML == '0' &&
    allblock[3].innerHTML == '0' &&
    allblock[6].innerHTML == '0'
  ) {
    alert('Победили noliki');
    location.reload();
  }
  if (
    allblock[1].innerHTML == '0' &&
    allblock[4].innerHTML == '0' &&
    allblock[7].innerHTML == '0'
  ) {
    alert('Победили noliki');
    location.reload();
  }
  if (
    allblock[2].innerHTML == '0' &&
    allblock[5].innerHTML == '0' &&
    allblock[8].innerHTML == '0'
  ) {
    alert('Победили noliki');
    location.reload();
  }
  if (
    allblock[0].innerHTML == '0' &&
    allblock[4].innerHTML == '0' &&
    allblock[8].innerHTML == '0'
  ) {
    alert('Победили noliki');
    location.reload();
  }
  if (
    allblock[2].innerHTML == '0' &&
    allblock[4].innerHTML == '0' &&
    allblock[6].innerHTML == '0'
  ) {
    alert('Победили noliki');
    location.reload();
  }
}
