import { delay, logger } from './task-1.js'
import { toggleUserState, tsk2Logger } from './task-2.js'
import { makeTransaction, logSuccess, logError } from './task-3.js'
// Вызовы функции для проверки
delay(2000).then(logger);  // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];


toggleUserState(users, 'Mango').then(tsk2Logger);
toggleUserState(users, 'Lux').then(tsk2Logger);


makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);
