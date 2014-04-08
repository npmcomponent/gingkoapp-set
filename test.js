var Set = require('./index');
var expect = require('chai').expect;

describe('Set', function() {
  it('returns a new set', function() {
    var set = new Set();
    expect(set instanceof Set).true;
    expect(set.size).equal(0);
  });

  it('adds the value only once', function() {
    var set = new Set();
    set.add('hello');
    set.add('hello');
    set.add('there');

    expect(set.has('hello')).true;
    expect(set.has('there')).true;
    expect(set.size).equal(2);
  });

  it('works with all type of data', function() {
    var set = new Set();
    var date = new Date();
    var array = [1, 2];

    set.add(undefined);
    set.add(true);
    set.add(null);
    set.add(2);
    set.add(date);
    set.add(array);
    set.add(setTimeout);

    expect(set.has(undefined)).true;
    expect(set.has('undefined')).false;
    expect(set.has(true)).true;
    expect(set.has('true')).false;
    expect(set.has(null)).true;
    expect(set.has('null')).false;
    expect(set.has(2)).true;
    expect(set.has('2')).false;
    expect(set.has(date)).true;
    expect(set.has(date.toString())).false;
    expect(set.has(array)).true;
    expect(set.has(setTimeout)).true;
  });

  it('has methods to delete values', function() {
    var set = new Set();
    var date = new Date();
    set.add('hello');
    set.add(date);
    set.add(1);
    set.add(true);

    expect(set.size).equal(4);
    set.delete(1);
    set.delete('hello');
    set.delete('hello');
    expect(set.size).equal(2);
    set.clear();
    expect(set.size).equal(0);
  });
});
