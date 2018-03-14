import Component from '@ember/component';
import { task } from 'ember-concurrency';
import { timeout } from 'ember-concurrency/utils';
export default Component.extend({
  status: "Waiting to start",

  parentTask: task(function * () {
    this.set('status', "1. Parent: one moment...");
    yield timeout(1000);
    let value = yield this.get('childTask').perform();
    this.set('status', `5. Parent: child says "${value}"`);
    yield timeout(1000);
    this.set('status', "6. Done!");
  }).restartable(),

  childTask: task(function * () {
    this.set('status', "2. Child: one moment...");
    yield timeout(1000);
    let value = yield this.get('grandchildTask').perform();
    this.set('status', `4. Child: grandchild says "${value}"`);
    yield timeout(1000);
    return "What's up";
  }),

  grandchildTask: task(function * () {
    this.set('status', "3. Grandchild: one moment...");
    yield timeout(1000);
    return "Hello";
  }),
});
