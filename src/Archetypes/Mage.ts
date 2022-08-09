import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static instances = 0;
 
  private energyType_: EnergyType;
  constructor(name: string) { 
    super(name);
    this.energyType_ = 'mana';
    Mage.instances += 1;
  }

  get energyType(): EnergyType {
    return this.energyType_;
  }

  static createdArchetypeInstances() {
    return Mage.instances;
  }
}

export default Mage;