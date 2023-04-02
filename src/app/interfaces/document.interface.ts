import {Annotations} from "./annotations.interface";
import {DocumentReference} from "@angular/fire/compat/firestore";

interface Storage {
  url: string;
}

export interface DocumentInterface {
  id: number;
  title: string;
  annotations: DocumentReference<Annotations>[];
  storage: Storage;
  image: string;
}
