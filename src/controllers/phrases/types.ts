export interface Phrase {
  _id: string;
  nextRepeat: null | Date;
  createdAt: Date;
  updatedAt?: Date;
  progress: number;
  creatorId: string;
  words: string;
}
