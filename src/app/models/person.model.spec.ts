import {Person} from './person.model';

describe('Member', () => {
  it('should create an instance', () => {
    expect(new Person()).toBeTruthy();
  });
});
