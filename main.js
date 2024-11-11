import Pokemon from './pokemon.js';

// Функція для додавання логів у гру
const addLog = (message) => {
    const logs = document.getElementById('logs');
    const logEntry = document.createElement('div');
    logEntry.textContent = message;
    logs.prepend(logEntry);
};

// Лічильник натискань
const createClickCounter = (limit) => {
    let clicks = 0;
    return () => {
        if (clicks < limit) {
            clicks++;
            return true;
        } else {
            return false;
        }
    };
};

// Створення об'єктів покемонів
const pikachu = new Pokemon(
    'Pikachu',
    document.getElementById('health1'),
    document.getElementById('attack1'),
    document.getElementById('special1'),
    addLog
);

const charmander = new Pokemon(
    'Charmander',
    document.getElementById('health2'),
    document.getElementById('attack2'),
    document.getElementById('special2'),
    addLog
);

// Призначення супротивників
pikachu.enemy = charmander;
charmander.enemy = pikachu;

// Глобальна змінна для контролю атаки
window.isAttacking = false;

// Ліміти атак
const pikachuAttackCounter = createClickCounter(6);
const pikachuSpecialCounter = createClickCounter(6);
const charmanderAttackCounter = createClickCounter(6);
const charmanderSpecialCounter = createClickCounter(6);

// Призначення подій для кнопок атаки
pikachu.attackButton.addEventListener('click', () => {
    if (pikachuAttackCounter()) pikachu.battle();
});

pikachu.specialButton.addEventListener('click', () => {
    if (pikachuSpecialCounter()) pikachu.battle(true);
});

charmander.attackButton.addEventListener('click', () => {
    if (charmanderAttackCounter()) charmander.battle();
});

charmander.specialButton.addEventListener('click', () => {
    if (charmanderSpecialCounter()) charmander.battle(true);
});
