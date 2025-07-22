// לוקח את כל הכפתורים של דירוג
const ratingButtons = document.querySelectorAll('.3stars-button, .4stars-button, .5stars-button');

ratingButtons.forEach(button => {
  // Hover: מדגיש את כל הכפתורים עד לזה שעומדים עליו
  button.addEventListener('mouseenter', () => {
    let highlight = true;
    for (const btn of ratingButtons) {
      if (highlight) {
        btn.classList.add('hovered');
      } else {
        btn.classList.remove('hovered');
      }
      if (btn === button) highlight = false;
    }
  });

  // כשעוזבים את הכפתור, מורידים את ההדגשה (אם לא נבחר)
  button.addEventListener('mouseleave', () => {
    ratingButtons.forEach(btn => {
      btn.classList.remove('hovered');
    });
  });

  // בלחיצה: מסמנים את הכפתור הנבחר ושומרים סימון
  button.addEventListener('click', () => {
    ratingButtons.forEach(btn => btn.classList.remove('liked'));
    button.classList.add('liked');
  });
});
