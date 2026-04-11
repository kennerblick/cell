const builders = {
  plant: {
    total: 6,
    stageId: 'plant-stage',
    infoId: 'plant-info',
    progressId: 'plant-progress',
    parts: {
      zellwand: {
        title: 'Zellwand',
        selectors: ['.part-wall'],
        description: 'Die Zellwand besteht vor allem aus Cellulosefasern und ist fest.',
        task: 'Sie gibt der Pflanzenzelle Form, Festigkeit und Schutz.',
        remember: 'Nur Pflanzenzellen besitzen diese feste Hülle.'
      },
      zellmembran: {
        title: 'Zellmembran',
        selectors: ['.part-membrane'],
        description: 'Die Zellmembran ist ein dünnes Häutchen und bildet die Grenzschicht der Zelle.',
        task: 'Sie grenzt die Zelle ab und hält alles zusammen.',
        remember: 'Pflanzen- und Tierzellen haben eine Zellmembran.'
      },
      zellplasma: {
        title: 'Zellplasma',
        selectors: ['.part-plasma'],
        description: 'Das Zellplasma ist zähflüssig und füllt die Zelle aus.',
        task: 'Hier läuft der Zellstoffwechsel ab.',
        remember: 'Viele wichtige Stoffe werden hier transportiert.'
      },
      zellkern: {
        title: 'Zellkern',
        selectors: ['.part-core'],
        effectClass: 'focus-on',
        description: 'Im Zellkern liegen die Erbanlagen.',
        task: 'Er steuert den Zellstoffwechsel und viele Vorgänge der Zelle.',
        remember: 'Der Zellkern ist die Steuerzentrale.'
      },
      chloroplasten: {
        title: 'Chloroplasten',
        selectors: ['.part-chloro1', '.part-chloro2', '.part-chloro3'],
        effectClass: 'photosynthesis-on',
        description: 'Chloroplasten sind grün und enthalten den Blattfarbstoff.',
        task: 'In ihnen findet die Fotosynthese statt.',
        remember: 'Mit Licht, Wasser und Kohlenstoffdioxid entsteht Zucker und Sauerstoff.'
      },
      vakuole: {
        title: 'Vakuole',
        selectors: ['.part-vacuole'],
        description: 'Die Vakuole ist ein großer Hohlraum im Zellplasma.',
        task: 'Sie speichert Zellsaft, Wasser, Nährstoffe und manchmal auch Abfallstoffe.',
        remember: 'Die große Vakuole ist typisch für Pflanzenzellen.'
      }
    }
  },
  animal: {
    total: 3,
    stageId: 'animal-stage',
    infoId: 'animal-info',
    progressId: 'animal-progress',
    parts: {
      zellmembran: {
        title: 'Zellmembran',
        selectors: ['.animal-membrane'],
        description: 'Die Zellmembran ist die äußere Grenze der Tierzelle.',
        task: 'Sie schützt die Zelle und grenzt sie ab.'
      },
      zellplasma: {
        title: 'Zellplasma',
        selectors: ['.animal-plasma'],
        description: 'Auch Tierzellen besitzen zähflüssiges Zellplasma.',
        task: 'Dort laufen viele Stoffwechselvorgänge ab.'
      },
      zellkern: {
        title: 'Zellkern',
        selectors: ['.animal-core'],
        effectClass: 'focus-on',
        description: 'Der Zellkern enthält die Erbinformationen.',
        task: 'Er steuert die Zelle.'
      }
    }
  }
};

const topicInfo = {
  blatt: {
    title: 'Blattzellen',
    text: 'Blattzellen besitzen besonders viele Chloroplasten.',
    extra: 'Darum können sie mit Sonnenlicht besonders gut Fotosynthese machen.'
  },
  spross: {
    title: 'Zellen der Sprossachse',
    text: 'In der Sprossachse liegen Leitungsbahnen.',
    extra: 'Sie transportieren Wasser und Nährstoffe durch die Pflanze.'
  },
  fotosynthese: {
    title: 'Fotosynthese',
    text: 'Die Pflanze nutzt Sonnenlicht, Wasser und Kohlenstoffdioxid.',
    extra: 'Daraus entstehen Zucker als Nahrung und Sauerstoff für die Luft.'
  }
};

const divisionSteps = {
  a: {
    title: 'a) Mutterzelle',
    text: 'Die Mutterzelle ist noch ungeteilt und besitzt einen Zellkern in der Mitte.'
  },
  b: {
    title: 'b) Einschnürung beginnt',
    text: 'Die Zelle wird in der Mitte deutlich eingeschnürt. Der Zellkern streckt sich dabei länglich aus.'
  },
  c: {
    title: 'c) Membran schließt sich',
    text: 'Jetzt ist die Trennung fast fertig: Von beiden Seiten wächst die Membran weiter ein, bis sie sich genau in der Mitte verbindet.'
  },
  d: {
    title: 'd) Tochterzellen wachsen',
    text: 'Es entstehen zwei Tochterzellen, die danach durch Plasmawachstum zu neuen Mutterzellen heranwachsen.'
  }
};

const quizQuestions = [
  {
    question: 'Welcher Teil macht die Fotosynthese?',
    options: ['Chloroplasten', 'Zellkern', 'Zellwand'],
    answer: 'Chloroplasten'
  },
  {
    question: 'Was gibt einer Pflanzenzelle Schutz und Festigkeit?',
    options: ['Zellwand', 'Zellplasma', 'Zellkern'],
    answer: 'Zellwand'
  },
  {
    question: 'Warum ist Zellteilung wichtig?',
    options: ['Für Wachstum', 'Nur zum Sehen', 'Nur zum Schlafen'],
    answer: 'Für Wachstum'
  }
];

function popCard(element) {
  if (!element) return;
  element.classList.remove('is-pop');
  void element.offsetWidth;
  element.classList.add('is-pop');
}

function setupBuilder(name) {
  const config = builders[name];
  const info = document.getElementById(config.infoId);
  const progress = document.getElementById(config.progressId);
  const stage = document.getElementById(config.stageId);
  const found = new Set();

  document.querySelectorAll(`[data-builder="${name}"]`).forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.part;
      const part = config.parts[key];
      if (!part) return;

      part.selectors.forEach(selector => {
        const el = document.querySelector(`#${config.stageId} ${selector}`);
        if (el) el.classList.add('is-visible');
      });

      if (part.effectClass && stage) {
        stage.classList.add(part.effectClass);
      }

      found.add(key);
      button.classList.add('done');
      progress.textContent = `${found.size} von ${config.total} Teilen entdeckt`;

      if (name === 'plant' && key === 'chloroplasten') {
        progress.textContent += ' · Sonnenlicht an ☀️';
      }

      info.innerHTML = `
        <h3>${part.title}</h3>
        <p><strong>Beschreibung:</strong> ${part.description}</p>
        <p><strong>Aufgabe:</strong> ${part.task}</p>
        ${part.remember ? `<p><strong>Merke:</strong> ${part.remember}</p>` : ''}
      `;
      popCard(info);
    });
  });
}

function setupTopics() {
  const info = document.getElementById('topic-info');

  document.querySelectorAll('[data-topic]').forEach(button => {
    button.addEventListener('click', () => {
      const topic = topicInfo[button.dataset.topic];
      if (!topic) return;

      document.querySelectorAll('[data-topic]').forEach(card => card.classList.remove('active'));
      button.classList.add('active');

      info.innerHTML = `
        <h3>${topic.title}</h3>
        <p>${topic.text}</p>
        <p><strong>Merke:</strong> ${topic.extra}</p>
      `;
      popCard(info);
    });
  });
}

function setupDivision() {
  const info = document.getElementById('division-info');

  document.querySelectorAll('[data-step]').forEach(button => {
    button.addEventListener('click', () => {
      const step = divisionSteps[button.dataset.step];
      if (!step) return;

      document.querySelectorAll('.step-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      document.querySelectorAll('.division-scene').forEach(scene => scene.classList.remove('is-active'));
      const activeScene = document.querySelector(`.division-scene[data-scene="${button.dataset.step}"]`);
      if (activeScene) activeScene.classList.add('is-active');

      info.innerHTML = `
        <h3>${step.title}</h3>
        <p>${step.text}</p>
      `;
      popCard(info);
    });
  });
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

document.getElementById('check-quiz').addEventListener('click', () => {
  let score = 0;
  quizQuestions.forEach((q, idx) => {
    const selected = document.querySelector(`input[name="q${idx}"]:checked`);
    if (selected && selected.value === q.answer) score += 1;
  });

  const result = document.getElementById('quiz-result');
  result.textContent = score === quizQuestions.length
    ? `Perfekt! Du hast alle ${quizQuestions.length} Fragen richtig.`
    : `Super! Du hast ${score} von ${quizQuestions.length} richtig.`;
});

document.getElementById('reset-quiz').addEventListener('click', () => {
  document.getElementById('quiz-form').reset();
  document.getElementById('quiz-result').textContent = '';
});

setupBuilder('plant');
setupBuilder('animal');
setupTopics();
setupDivision();
renderQuiz();
