import { Fault } from './fault'

export interface Spaces {
  spaces: Space[];
}

export interface Space {
  idSpace: string;
  idItemSubType: 'ROOM' | 'SPACE';
  name: string;
  faults: Fault[];
}
