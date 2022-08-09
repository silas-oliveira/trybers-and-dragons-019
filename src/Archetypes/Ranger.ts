import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static instances = 0;
 
  private energyType_: EnergyType;
  constructor(name: string) { 
    super(name);
    this.energyType_ = 'stamina';
    Ranger.instances += 1;
  }

  get energyType(): EnergyType {
    return this.energyType_;
  }

  static createdArchetypeInstances() {
    return Ranger.instances;
  }
}

export default Ranger;