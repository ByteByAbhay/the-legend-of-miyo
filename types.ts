
export interface Achievement {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  sender: string;
  message: string;
  time: string;
}

export type Mood = 'Bhookhyo 😡' | 'Suto 😴' | 'Paisa khatam 💸';
