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

const animalTypeInfo = {
  muskel: {
    title: 'Muskelzellen',
    text: 'Muskelzellen sind lang gestreckt und können sich zusammenziehen.',
    extra: 'So helfen sie beim Laufen, Greifen und sogar beim Schlagen des Herzens.'
  },
  nerven: {
    title: 'Nervenzellen',
    text: 'Nervenzellen besitzen lange Fortsätze und leiten Signale weiter.',
    extra: 'Damit übermitteln sie Informationen zwischen Gehirn, Rückenmark und Körper.'
  },
  blut: {
    title: 'Blutzellen',
    text: 'Blutzellen schwimmen im Blut und übernehmen verschiedene Aufgaben.',
    extra: 'Rote Blutzellen transportieren Sauerstoff, weiße Blutzellen helfen bei der Abwehr von Krankheitserregern.'
  },
  haut: {
    title: 'Hautzellen',
    text: 'Hautzellen liegen dicht an dicht und bilden eine schützende Oberfläche.',
    extra: 'Sie schützen den Körper vor Verletzungen, Austrocknung und Keimen.'
  },
  eizelle: {
    title: 'Eizelle',
    text: 'Die Eizelle ist besonders groß und enthält viele Nährstoffe.',
    extra: 'Sie ist eine Geschlechtszelle und wichtig für die Fortpflanzung.'
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
    answer: 'Chloroplasten',
    explain: 'Chloroplasten enthalten den grünen Farbstoff Chlorophyll und sind der Ort der Fotosynthese. Der Zellkern steuert die Zelle, die Zellwand gibt ihr Festigkeit.'
  },
  {
    question: 'Was gibt einer Pflanzenzelle Schutz und Festigkeit?',
    options: ['Zellwand', 'Zellplasma', 'Zellkern'],
    answer: 'Zellwand',
    explain: 'Die Zellwand besteht aus Cellulose und umgibt die Pflanzenzelle von außen. Das Zellplasma ist flüssig, der Zellkern steuert die Zelle.'
  },
  {
    question: 'Warum ist Zellteilung wichtig?',
    options: ['Für Wachstum', 'Nur zum Sehen', 'Nur zum Schlafen'],
    answer: 'Für Wachstum',
    explain: 'Durch Zellteilung können Lebewesen wachsen, Zellen erneuern und sich ungeschlechtlich fortpflanzen. Sehen und Schlafen haben mit Zellteilung nichts zu tun.'
  },
  {
    question: 'Welcher Teil steuert viele Vorgänge in der Zelle?',
    options: ['Zellkern', 'Vakuole', 'Zellwand'],
    answer: 'Zellkern',
    explain: 'Im Zellkern liegt die Erbinformation (DNA). Er ist die Steuerzentrale der Zelle. Die Vakuole speichert Wasser, die Zellwand gibt Form und Festigkeit.'
  },
  {
    question: 'Was füllt die Zelle aus und ist zähflüssig?',
    options: ['Zellplasma', 'Zellwand', 'Chloroplast'],
    answer: 'Zellplasma',
    explain: 'Das Zellplasma (Cytoplasma) ist eine zähflüssige Masse, in der alle Zellbestandteile eingebettet sind. Die Zellwand ist fest, Chloroplasten sind Organellen.'
  },
  {
    question: 'Welche Zellen besitzen Chloroplasten?',
    options: ['Pflanzenzellen', 'Tierzellen', 'Nur Muskelzellen'],
    answer: 'Pflanzenzellen',
    explain: 'Nur Pflanzenzellen (und einige Algen) enthalten Chloroplasten für die Fotosynthese. Tierzellen und Muskelzellen besitzen keine Chloroplasten.'
  },
  {
    question: 'Welche Struktur haben Tierzellen nicht?',
    options: ['Zellwand', 'Zellmembran', 'Zellkern'],
    answer: 'Zellwand',
    explain: 'Tierzellen besitzen keine starre Zellwand – das ist ein wichtiger Unterschied zu Pflanzenzellen. Zellmembran und Zellkern haben beide Zelltypen.'
  },
  {
    question: 'Was speichert die große Vakuole?',
    options: ['Wasser und Zellsaft', 'Sonnenlicht', 'Nur Luft'],
    answer: 'Wasser und Zellsaft',
    explain: 'Die zentrale Vakuole in Pflanzenzellen speichert Wasser, Nährstoffe und Zellsaft. Sonnenlicht wird in Chloroplasten genutzt, nicht gespeichert.'
  },
  {
    question: 'Womit stellt die Pflanze bei der Fotosynthese Zucker her?',
    options: ['Licht, Wasser und Kohlenstoffdioxid', 'Erde und Wind', 'Nur Wasser'],
    answer: 'Licht, Wasser und Kohlenstoffdioxid',
    explain: 'Die Fotosynthese braucht Lichtenergie, Wasser (aus dem Boden) und Kohlenstoffdioxid (aus der Luft). Erde und Wind sind keine Ausgangsstoffe der Fotosynthese.'
  },
  {
    question: 'Was entsteht bei der Fotosynthese zusätzlich zum Zucker?',
    options: ['Sauerstoff', 'Kalk', 'Metall'],
    answer: 'Sauerstoff',
    explain: 'Bei der Fotosynthese wird Wasser gespalten – dabei entsteht Sauerstoff, der an die Luft abgegeben wird. Kalk und Metall entstehen bei der Fotosynthese nicht.'
  },
  {
    question: 'Was passiert bei Schritt b der Zellteilung?',
    options: ['Die Einschnürung beginnt', 'Die Tochterzellen schlafen', 'Die Zellwand verschwindet sofort'],
    answer: 'Die Einschnürung beginnt',
    explain: 'In Schritt b schnürt sich die Zelle in der Mitte ein. Der Zellkern streckt sich länglich aus. Tochterzellen „schlafen" nicht, und die Zellwand verschwindet nicht plötzlich.'
  },
  {
    question: 'Wie wächst die neue Membran bei der Teilung ein?',
    options: ['Von außen nach innen', 'Von innen nach außen', 'Gar nicht'],
    answer: 'Von außen nach innen',
    explain: 'Die neue Trennmembran wächst von beiden Seiten (außen) nach innen und verbindet sich zuletzt in der Mitte. Sie entsteht also nicht von innen heraus.'
  },
  {
    question: 'Wozu können Pflanzen Zellteilung noch nutzen?',
    options: ['Zur ungeschlechtlichen Fortpflanzung', 'Nur zum Hören', 'Zum Farbenwechsel'],
    answer: 'Zur ungeschlechtlichen Fortpflanzung',
    explain: 'Pflanzen können sich durch Zellteilung ungeschlechtlich fortpflanzen, z. B. durch Stecklinge oder Senker. Hören und Farbenwechsel hängen nicht mit Zellteilung zusammen.'
  },
  {
    question: 'Was transportieren Zellen der Sprossachse?',
    options: ['Wasser und Nährstoffe', 'Nur Sauerstoff', 'Nur Sonnenlicht'],
    answer: 'Wasser und Nährstoffe',
    explain: 'In der Sprossachse liegen Leitungsbahnen, die Wasser und Nährstoffe durch die ganze Pflanze transportieren. Sauerstoff und Sonnenlicht werden so nicht transportiert.'
  },
  {
    question: 'Welche tierischen Zellen leiten Signale weiter?',
    options: ['Nervenzellen', 'Hautzellen', 'Eizellen'],
    answer: 'Nervenzellen',
    explain: 'Nervenzellen haben lange Fortsätze und leiten elektrische Signale weiter – z. B. vom Gehirn zu den Muskeln. Haut- und Eizellen übernehmen andere Aufgaben.'
  },
  {
    question: 'Welche tierischen Zellen können sich zusammenziehen?',
    options: ['Muskelzellen', 'Blutzellen', 'Hautzellen'],
    answer: 'Muskelzellen',
    explain: 'Muskelzellen enthalten spezielle Proteinfasern (Aktin, Myosin), die sich verkürzen können. Dadurch entstehen Bewegungen. Blut- und Hautzellen können das nicht.'
  },
  {
    question: 'Welche Blutzellen transportieren Sauerstoff?',
    options: ['Rote Blutzellen', 'Nervenzellen', 'Hautzellen'],
    answer: 'Rote Blutzellen',
    explain: 'Rote Blutzellen (Erythrozyten) enthalten Hämoglobin und binden Sauerstoff. Nervenzellen leiten Signale, Hautzellen schützen die Körperoberfläche.'
  },
  {
    question: 'Wofür sind Hautzellen wichtig?',
    options: ['Für Schutz vor Keimen und Austrocknung', 'Für Fotosynthese', 'Für die Bildung von Chloroplasten'],
    answer: 'Für Schutz vor Keimen und Austrocknung',
    explain: 'Hautzellen bilden eine dichte Schutzschicht gegen Krankheitserreger, UV-Licht und Wasserverlust. Fotosynthese und Chloroplasten gibt es nur in Pflanzenzellen.'
  },
  {
    question: 'Welche tierische Zelle ist besonders groß und enthält viele Nährstoffe?',
    options: ['Eizelle', 'Muskelzelle', 'Weiße Blutzelle'],
    answer: 'Eizelle',
    explain: 'Die Eizelle ist mit bloßem Auge kaum sichtbar, aber sie ist die größte tierische Zelle und speichert Nährstoffe für den sich entwickelnden Embryo.'
  },
  {
    question: 'Was ist der Unterschied zwischen geschlechtlicher und ungeschlechtlicher Fortpflanzung?',
    options: ['Geschlechtlich braucht zwei Eltern, ungeschlechtlich nur einen', 'Beide brauchen immer zwei Eltern', 'Ungeschlechtlich ist nur bei Tieren möglich'],
    answer: 'Geschlechtlich braucht zwei Eltern, ungeschlechtlich nur einen',
    explain: 'Bei der geschlechtlichen Fortpflanzung werden Merkmale beider Eltern kombiniert. Ungeschlechtlich (z. B. Steckling) entsteht Nachwuchs von nur einem Elternteil.'
  },
  {
    question: 'Welche Aussage über weiße Blutzellen ist richtig?',
    options: ['Sie helfen bei der Abwehr von Krankheitserregern', 'Sie transportieren Sauerstoff', 'Sie machen Fotosynthese'],
    answer: 'Sie helfen bei der Abwehr von Krankheitserregern',
    explain: 'Weiße Blutzellen (Leukozyten) sind Teil des Immunsystems und bekämpfen Bakterien und Viren. Sauerstoff transportieren rote Blutzellen, Fotosynthese gibt es nur in Pflanzen.'
  }
];

const imageQuizQuestions = [
  {
    question: 'Welche Abbildung zeigt eine Nervenzelle?',
    options: [
      { label: 'Nervenzelle', image: 'assets/image-quiz/neuron.svg' },
      { label: 'Muskelzelle', image: 'assets/image-quiz/muscle.svg' },
      { label: 'Rote Blutzelle', image: 'assets/image-quiz/red-blood.svg' }
    ],
    answer: 'Nervenzelle',
    tip: 'Achte auf lange Fortsätze.',
    explain: 'Nervenzellen haben einen Zellkörper und lange Fortsätze, um Signale weiterzuleiten.'
  },
  {
    question: 'Welche Abbildung zeigt eine rote Blutzelle?',
    options: [
      { label: 'Eizelle', image: 'assets/image-quiz/egg.svg' },
      { label: 'Rote Blutzelle', image: 'assets/image-quiz/red-blood.svg' },
      { label: 'Weiße Blutzelle', image: 'assets/image-quiz/white-blood.svg' }
    ],
    answer: 'Rote Blutzelle',
    tip: 'Suche die eingedellte Scheibenform.',
    explain: 'Rote Blutzellen sind scheibenfoermig und transportieren Sauerstoff mit Hämoglobin.'
  },
  {
    question: 'Welche Abbildung zeigt eine weiße Blutzelle?',
    options: [
      { label: 'Weiße Blutzelle', image: 'assets/image-quiz/white-blood.svg' },
      { label: 'Rote Blutzelle', image: 'assets/image-quiz/red-blood.svg' },
      { label: 'Hautzellen', image: 'assets/image-quiz/skin.svg' }
    ],
    answer: 'Weiße Blutzelle',
    tip: 'Achte auf die unregelmäßige Kernstruktur im Inneren.',
    explain: 'Weiße Blutzellen besitzen oft einen deutlich geformten Zellkern und sind Teil der Immunabwehr.'
  },
  {
    question: 'Welche Abbildung zeigt eine Eizelle?',
    options: [
      { label: 'Muskelzelle', image: 'assets/image-quiz/muscle.svg' },
      { label: 'Eizelle', image: 'assets/image-quiz/egg.svg' },
      { label: 'Nervenzelle', image: 'assets/image-quiz/neuron.svg' }
    ],
    answer: 'Eizelle',
    tip: 'Suche die besonders große runde Zelle.',
    explain: 'Die Eizelle ist besonders groß und enthält viele Nährstoffe für den Entwicklungsbeginn.'
  },
  {
    question: 'Welche Abbildung zeigt eine Muskelzelle?',
    options: [
      { label: 'Hautzellen', image: 'assets/image-quiz/skin.svg' },
      { label: 'Muskelzelle', image: 'assets/image-quiz/muscle.svg' },
      { label: 'Pflanzenzelle', image: 'assets/image-quiz/plant-cell.svg' }
    ],
    answer: 'Muskelzelle',
    tip: 'Achte auf die längliche Form mit Streifen.',
    explain: 'Muskelzellen sind langgezogen und besitzen kontraktile Strukturen für Bewegung.'
  },
  {
    question: 'Welche Abbildung passt zu dicht angeordneten Hautzellen?',
    options: [
      { label: 'Hautzellen', image: 'assets/image-quiz/skin.svg' },
      { label: 'Nervenzelle', image: 'assets/image-quiz/neuron.svg' },
      { label: 'Rote Blutzelle', image: 'assets/image-quiz/red-blood.svg' }
    ],
    answer: 'Hautzellen',
    tip: 'Suche ein Mosaik aus vielen ähnlichen Zellen.',
    explain: 'Hautzellen liegen eng nebeneinander und bilden eine schützende Oberfläche.'
  },
  {
    question: 'In welcher Abbildung sieht man Chloroplasten?',
    options: [
      { label: 'Chloroplast', image: 'assets/image-quiz/chloroplast.svg' },
      { label: 'Rote Blutzelle', image: 'assets/image-quiz/red-blood.svg' },
      { label: 'Tierzelle', image: 'assets/image-quiz/animal-cell.svg' }
    ],
    answer: 'Chloroplast',
    tip: 'Suche die grüne, ovale Struktur.',
    explain: 'Chloroplasten sind grüne Organellen der Pflanzenzelle und Ort der Fotosynthese.'
  },
  {
    question: 'Welche Abbildung zeigt eine Pflanzenzelle?',
    options: [
      { label: 'Tierzelle', image: 'assets/image-quiz/animal-cell.svg' },
      { label: 'Pflanzenzelle', image: 'assets/image-quiz/plant-cell.svg' },
      { label: 'Eizelle', image: 'assets/image-quiz/egg.svg' }
    ],
    answer: 'Pflanzenzelle',
    tip: 'Achte auf die eher eckige Form mit Zellwand.',
    explain: 'Pflanzenzellen haben eine feste Zellwand, häufig Chloroplasten und oft eine große Vakuole.'
  },
  {
    question: 'Welche Abbildung zeigt eine Tierzelle?',
    options: [
      { label: 'Pflanzenzelle', image: 'assets/image-quiz/plant-cell.svg' },
      { label: 'Tierzelle', image: 'assets/image-quiz/animal-cell.svg' },
      { label: 'Chloroplast', image: 'assets/image-quiz/chloroplast.svg' }
    ],
    answer: 'Tierzelle',
    tip: 'Suche die eher runde/ovale Zelle ohne Zellwand.',
    explain: 'Tierzellen besitzen Zellmembran, Zellplasma und Zellkern, aber keine starre Zellwand.'
  },
  {
    question: 'Welche Abbildung gehört NICHT zu einer ganzen Zelle, sondern zu einer Zellorganelle?',
    options: [
      { label: 'Nervenzelle', image: 'assets/image-quiz/neuron.svg' },
      { label: 'Chloroplast', image: 'assets/image-quiz/chloroplast.svg' },
      { label: 'Eizelle', image: 'assets/image-quiz/egg.svg' }
    ],
    answer: 'Chloroplast',
    tip: 'Eine Option ist nur ein Teil einer Pflanzenzelle.',
    explain: 'Der Chloroplast ist keine eigenständige Zelle, sondern eine Organell innerhalb der Pflanzenzelle.'
  }
];

function shuffledOptions(options) {
  const copy = options.map(option => ({ ...option }));
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

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

function setupAnimalTypes() {
  const info = document.getElementById('animal-type-info');

  document.querySelectorAll('[data-animal-type]').forEach(button => {
    button.addEventListener('click', () => {
      const type = animalTypeInfo[button.dataset.animalType];
      if (!type) return;

      document.querySelectorAll('[data-animal-type]').forEach(card => card.classList.remove('active'));
      button.classList.add('active');

      info.innerHTML = `
        <h3>${type.title}</h3>
        <p>${type.text}</p>
        <p><strong>Merke:</strong> ${type.extra}</p>
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

let quizScore = 0;
let quizAnswered = 0;

function updateScoreBar() {
  const bar = document.getElementById('quiz-score-bar');
  const text = document.getElementById('quiz-score-text');
  const fill = document.getElementById('quiz-score-fill');
  bar.hidden = false;
  text.textContent = `${quizScore} von ${quizAnswered} richtig`;
  fill.style.width = `${quizAnswered > 0 ? Math.round(quizScore / quizAnswered * 100) : 0}%`;
}

function renderQuiz() {
  quizScore = 0;
  quizAnswered = 0;
  const bar = document.getElementById('quiz-score-bar');
  bar.hidden = true;

  const form = document.getElementById('quiz-form');
  form.innerHTML = quizQuestions.map((q, idx) => `
    <div class="quiz-question" id="qq-${idx}">
      <p>${idx + 1}. ${q.question}</p>
      ${q.options.map(option => `
        <label class="quiz-option">
          <input type="radio" name="q${idx}" value="${option}">
          ${option}
        </label>
      `).join('')}
      <div class="quiz-feedback" id="fb-${idx}"></div>
    </div>
  `).join('');

  quizQuestions.forEach((q, idx) => {
    form.querySelectorAll(`input[name="q${idx}"]`).forEach(radio => {
      radio.addEventListener('change', () => {
        const qBox = document.getElementById(`qq-${idx}`);
        const fb = document.getElementById(`fb-${idx}`);

        // Disable all options for this question
        form.querySelectorAll(`input[name="q${idx}"]`).forEach(r => r.disabled = true);

        const isCorrect = radio.value === q.answer;

        // Style options
        form.querySelectorAll(`input[name="q${idx}"]`).forEach(r => {
          const label = r.closest('.quiz-option');
          if (r.value === q.answer) label.classList.add('opt-correct');
          else if (r === radio && !isCorrect) label.classList.add('opt-wrong');
        });

        if (isCorrect) {
          qBox.classList.add('q-correct');
          fb.className = 'quiz-feedback fb-correct';
          fb.textContent = '✓ Richtig!';
          quizScore += 1;
        } else {
          qBox.classList.add('q-wrong');
          fb.className = 'quiz-feedback fb-wrong';
          fb.innerHTML = `✗ Falsch. Richtig ist: <strong>${q.answer}</strong><br>${q.explain}`;
        }

        quizAnswered += 1;
        updateScoreBar();
      });
    });
  });
}

let imageQuizScore = 0;
let imageQuizAnswered = 0;

function updateImageQuizScore() {
  const bar = document.getElementById('image-quiz-score');
  const text = document.getElementById('image-quiz-score-text');
  const fill = document.getElementById('image-quiz-score-fill');
  bar.hidden = false;
  text.textContent = `${imageQuizScore} von ${imageQuizAnswered} richtig`;
  fill.style.width = `${imageQuizAnswered > 0 ? Math.round(imageQuizScore / imageQuizAnswered * 100) : 0}%`;
}

function renderImageQuiz() {
  imageQuizScore = 0;
  imageQuizAnswered = 0;
  const bar = document.getElementById('image-quiz-score');
  bar.hidden = true;

  const list = document.getElementById('image-quiz-list');
  list.innerHTML = imageQuizQuestions.map((item, idx) => `
    <article class="image-quiz-card" id="img-q-${idx}">
      <p class="image-quiz-title">${idx + 1}. ${item.question}</p>
      <div class="image-quiz-options">
        ${shuffledOptions(item.options).map((opt, optionIdx) => `
          <button class="image-option" type="button" data-img-q="${idx}" data-img-o="${optionIdx}" data-img-label="${opt.label}">
            <img src="${opt.image}" alt="Bildoption ${optionIdx + 1}">
          </button>
        `).join('')}
      </div>
      <div class="image-quiz-controls">
        <button class="image-tip-btn" type="button" data-img-tip="${idx}">Tipp anzeigen</button>
      </div>
      <div class="image-quiz-feedback" id="img-fb-${idx}"></div>
    </article>
  `).join('');

  list.querySelectorAll('.image-tip-btn').forEach(tipButton => {
    tipButton.addEventListener('click', () => {
      const qIndex = Number(tipButton.dataset.imgTip);
      const q = imageQuizQuestions[qIndex];
      const feedback = document.getElementById(`img-fb-${qIndex}`);
      if (feedback.classList.contains('fb-correct') || feedback.classList.contains('fb-wrong')) return;
      feedback.className = 'image-quiz-feedback fb-correct';
      feedback.textContent = `Hinweis: ${q.tip}`;
    });
  });

  list.querySelectorAll('.image-option').forEach(button => {
    button.addEventListener('click', () => {
      const qIndex = Number(button.dataset.imgQ);
      const selectedLabel = button.dataset.imgLabel;
      const q = imageQuizQuestions[qIndex];
      const card = document.getElementById(`img-q-${qIndex}`);
      const feedback = document.getElementById(`img-fb-${qIndex}`);

      if (card.dataset.done === 'true') return;
      card.dataset.done = 'true';

      const options = card.querySelectorAll('.image-option');
      options.forEach(optButton => {
        optButton.disabled = true;
        if (optButton.dataset.imgLabel === q.answer) optButton.classList.add('correct');
      });

      if (selectedLabel === q.answer) {
        button.classList.add('correct');
        feedback.className = 'image-quiz-feedback fb-correct';
        feedback.textContent = '✓ Richtig! ' + q.explain;
        imageQuizScore += 1;
      } else {
        button.classList.add('wrong');
        feedback.className = 'image-quiz-feedback fb-wrong';
        feedback.innerHTML = `✗ Falsch. Richtig ist: <strong>${q.answer}</strong><br>${q.explain}`;
      }

      imageQuizAnswered += 1;
      updateImageQuizScore();
    });
  });
}

document.getElementById('reset-quiz').addEventListener('click', () => {
  renderQuiz();
});

document.getElementById('reset-image-quiz').addEventListener('click', () => {
  renderImageQuiz();
});

setupBuilder('plant');
setupBuilder('animal');
setupTopics();
setupAnimalTypes();
setupDivision();
renderQuiz();
renderImageQuiz();
