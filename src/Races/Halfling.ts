import Race from './Race';

class Halfling extends Race {
  lifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 60;
    Halfling.instances += 1;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.instances;
  }
}

export default Halfling;