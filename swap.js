const contentRow = document.getElementById('content-row');
let startX = 0;
let endX = 0;

contentRow.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

contentRow.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  if (endX - startX > 50) {
    // סוויפ ימינה = הסרת swap = תמונה מימין
    contentRow.classList.remove('swapped');
  } else if (startX - endX > 50) {
    // סוויפ שמאלה = הוספת swap = תמונה משמאל
    contentRow.classList.add('swapped');
  }
});
