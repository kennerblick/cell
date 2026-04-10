const organelles = [
  {
    title: 'Zellmembran',
    category: 'all',
    short: 'Grenze der Zelle',
    description: 'Die Zellmembran umgibt die Zelle und regelt, welche Stoffe hinein- oder hinausgelangen.',
    task: 'Sie schützt die Zelle und kontrolliert den Stoffaustausch.'
  },
  {
    title: 'Zellkern',
    category: 'all',
    short: 'Steuerzentrale',
    description: 'Der Zellkern enthält die Erbinformationen.',
    task: 'Er steuert viele Vorgänge in der Zelle.'
  },
  {
    title: 'Mitochondrien',
    category: 'all',
    short: 'Kraftwerke',
    description: 'Mitochondrien gewinnen Energie aus Nährstoffen.',
    task: 'Sie versorgen die Zelle mit Energie.'
  },
  {
    title: 'Zellwand',
    category: 'plant',
    short: 'Feste Hülle',
    description: 'Die Zellwand liegt außerhalb der Zellmembran und gibt der Pflanzenzelle Stabilität.',
    task: 'Sie schützt und stützt die Zelle.'
  },
  {
    title: 'Chloroplasten',
    category: 'plant',
    short: 'Fotosynthese',
    description: 'Chloroplasten enthalten den grünen Blattfarbstoff Chlorophyll.',
    task: 'Hier findet die Fotosynthese statt.'
  },
  {
    title: 'Vakuole',
    category: 'plant',
    short: 'Speicherraum',
    description: 'Die große Vakuole speichert Wasser und gelöste Stoffe.',
    task: 'Sie sorgt auch für Druck und Stabilität.'
  },
  {
    title: 'Blattzellen',
    category: 'transport',
    short: 'Licht nutzen',
    description: 'Blattzellen besitzen viele Chloroplasten und nutzen Lichtenergie.',
    task: 'Sie stellen bei der Fotosynthese Zucker her.'
  },
  {
    title: 'Zellen der Sprossachse',
    category: 'transport',
    short: 'Transportwege',
    description: 'In der Sprossachse verlaufen Leitungsbahnen für Wasser und Nährstoffe.',
    task: 'Sie verbinden Wurzel, Stängel und Blätter.'
  },
  {
    title: 'Zellteilung',
    category: 'division',
    short: 'Neue Zellen entstehen',
    description: 'Bei der Zellteilung wird aus einer Zelle zwei neue Zellen.',
    task: 'So werden Wachstum und Reparatur möglich.'
  },
  {
    title: 'Wachstum',
    category: 'division',
    short: 'Größer werden',
    description: 'Lebewesen wachsen, weil Zellen sich teilen und vermehren.',
    task: 'Viele neue Zellen bilden Gewebe und Organe.'
  }
];

const sorterItems = [
  { term: 'Chloroplasten', answer: 'plant' },
  { term: 'Zellwand', answer: 'plant' },
  { term: 'große Vakuole', answer: 'plant' },
  { term: 'keine Zellwand', answer: 'animal' },
  { term: 'formveränderlicher', answer: 'animal' }
];

const quizQuestions = [
  {
    question: 'Welche Struktur gibt der Pflanzenzelle zusätzliche Stabilität?',
    options: ['Zellwand', 'Mitochondrium', 'Ribosom'],
    answer: 'Zellwand'
  },
  {
    question: 'Wo findet die Fotosynthese statt?',
    options: ['Im Zellkern', 'In den Chloroplasten', 'In der Zellmembran'],
    answer: 'In den Chloroplasten'
  },
  {
    question: 'Wofür ist die Sprossachse wichtig?',
    options: ['Für die Fortbewegung', 'Für die Leitung von Wasser und Nährstoffen', 'Für die Atmung nur nachts'],
    answer: 'Für die Leitung von Wasser und Nährstoffen'
  },
  {
    question: 'Warum ist Zellteilung wichtig?',
    options: ['Nur zur Verdauung', 'Für Wachstum und Reparatur', 'Nur zum Sehen'],
    answer: 'Für Wachstum und Reparatur'
  }
];

function renderCards(filter = 'all') {
  const grid = document.getElementById('organelle-grid');
  const filtered = filter === 'all' ? organelles : organelles.filter(item => item.category === filter || item.category === 'all');
  grid.innerHTML = filtered.map(item => `
    <button class="organelle-card" data-title="${item.title}">
      <strong>${item.title}</strong>
      <p>${item.short}</p>
      <small>${item.category}</small>
    </button>
  `).join('');

  grid.querySelectorAll('.organelle-card').forEach((card, index) => {
    card.addEventListener('click', () => showDetail(filtered[index]));
  });
}

function showDetail(item) {
  const box = document.getElementById('detail-box');
  box.innerHTML = `
    <h3>${item.title}</h3>
    <p><strong>Beschreibung:</strong> ${item.description}</p>
    <p><strong>Aufgabe:</strong> ${item.task}</p>
  `;
}

function renderSorter() {
  const sorter = document.getElementById('sorter');
  sorter.innerHTML = sorterItems.map((item, index) => `
    <label>
      <strong>${item.term}</strong>
      <select data-index="${index}">
        <option value="">Bitte wählen</option>
        <option value="plant">Pflanzenzelle</option>
        <option value="animal">Tierzelle</option>
      </select>
    </label>
  `).join('');
}

function renderQuiz() {
  const form = document.getElementById('quiz-form');
  form.innerHTML = quizQuestions.map((q, idx) => `
    <div class="quiz-question">
      <p>${idx + 1}. ${q.question}</p>
      ${q.options.map(option => `
        <label><input type="radio" name="q${idx}" value="${option}"> ${option}</label>
      `).join('')}
    </div>
  `).join('');
}

document.getElementById('filters').addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  document.querySelectorAll('.chip').forEach(chip => chip.classList.remove('active'));
  button.classList.add('active');
  renderCards(button.dataset.filter);
});

document.getElementById('check-sorter').addEventListener('click', () => {
  const selects = document.querySelectorAll('#sorter select');
  let correct = 0;
  selects.forEach(select => {
    if (select.value === sorterItems[Number(select.dataset.index)].answer) correct += 1;
  });
  document.getElementById('sorter-result').textContent = `Du hast ${correct} von ${sorterItems.length} richtig zugeordnet.`;
});

document.getElementById('check-quiz').addEventListener('click', () => {
  let score = 0;
  quizQuestions.forEach((q, idx) => {
    const selected = document.querySelector(`input[name="q${idx}"]:checked`);
    if (selected && selected.value === q.answer) score += 1;
  });
  document.getElementById('quiz-result').textContent = `Ergebnis: ${score} von ${quizQuestions.length} Punkten.`;
});

document.getElementById('reset-quiz').addEventListener('click', () => {
  document.getElementById('quiz-form').reset();
  document.getElementById('quiz-result').textContent = '';
  document.getElementById('sorter-result').textContent = '';
  document.querySelectorAll('#sorter select').forEach(select => select.value = '');
});

renderCards();
renderSorter();
renderQuiz();
showDetail(organelles[0]);
