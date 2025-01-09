// src/types/index.ts
export interface MenuItem {
    id: number;
    text: string;
    primary?: boolean;
  }
  
  export interface TimeSlot {
    start: string;
    end: string;
  }
  