import { Injectable } from '@angular/core';
import {getStorage, ref, uploadBytes} from "@angular/fire/storage";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImagesStorageService {
  private readonly storage = getStorage();
  uploadImage(formData: FormData, path: string) {
    const storageReference = ref(this.storage, path);
    return from(uploadBytes(storageReference, formData.get('file') as Blob))
  }
}
