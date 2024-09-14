// src/types/Pet.ts
export interface Pet {
    id: number;
    name: string;
    contactNumber: string;
    image: string;
    lastSighted?: string;
    missingSince?: string;
    about?:string;
    age?: number;
  }
  