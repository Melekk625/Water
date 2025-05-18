const smallCups = document.querySelectorAll('.cup.small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup.small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.height = '0';
    percentage.innerText = '';
    remained.style.visibility = 'visible';
    liters.innerText = '2L';
  } else {
    const percent = (fullCups / totalCups) * 100;
    percentage.style.height = `${percent}%`;
    percentage.innerText = `${percent}%`;
    remained.style.visibility = fullCups === totalCups ? 'hidden' : 'visible';
    liters.innerText = `${(2 - (fullCups * 0.25)).toFixed(2)}L`;
  }
}

function highlightCups(idx) {
  // Əgər kliklənən qab doludursa və növbəti qab boşdursa, idx azaldırıq (geri çəkmə)
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling?.classList.contains('full')
  ) {
    idx--;
  }

  smallCups.forEach((cup, i) => {
    if (i <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

// Başlanğıcda big cup-u yenilə
updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

