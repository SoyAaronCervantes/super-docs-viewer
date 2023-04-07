import {Annotation} from "./annotations.interface";

interface Storage {
  url?: string;
}

export interface DocumentInterface {
  id: number;
  title: string;
  storage: Storage;
  image: string;
  annotations: Annotation[];
}
