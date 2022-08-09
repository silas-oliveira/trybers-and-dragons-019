import Race from './Race';

class Elf extends Race {
  lifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 99;
    Elf.instances += 1;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.instances;
  }
}

export default Elf;