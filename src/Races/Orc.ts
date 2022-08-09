import Race from './Race';

class Orc extends Race {
  lifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 74;
    Orc.instances += 1;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.instances;
  }
}

export default Orc;