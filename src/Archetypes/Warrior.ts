import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static instances = 0;
 
  private energyType_: EnergyType;
  constructor(name: string) { 
    super(name);
    this.energyType_ = 'stamina';
    Warrior.instances += 1;
  }

  get energyType(): EnergyType {
    return this.energyType_;
  }

  static createdArchetypeInstances() {
    return Warrior.instances;
  }
}

export default Warrior;