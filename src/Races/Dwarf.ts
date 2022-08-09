import Race from './Race';

class Dwarf extends Race {
  lifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 80;
    Dwarf.instances += 1;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances() {
    return Dwarf.instances;
  }
}

export default Dwarf;