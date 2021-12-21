'use strict';

class Enemy {
  constructor(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
  }
  getInfo() {
    console.log(this.life, this.name, this.level);
  }
}

class Bug extends Enemy {
  constructor(life, name, level, legs, damage) {
    super(life, name, level);
    // Add rest of parameters
    this.legs = legs;
    this.damage = damage;
  }
}

const lils = new Bug(10, 'LiL Bug', 2, 10, 5);

const turtle = new Enemy(25, 'AngryLeonardo', 10);
const crab = new Enemy(15, 'Big Crab', 3);

turtle.getInfo();
crab.getInfo();
console.log(lils);
