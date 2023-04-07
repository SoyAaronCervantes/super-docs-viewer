import { Injectable } from '@angular/core';
import {getDownloadURL, getStorage, ref} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {
  protected readonly storage = getStorage();

  protected storageRef(path: string) {
    return ref(this.storage, path);
  }

  protected downloadUrl(path: string) {
    const storage = getStorage();
    const storageReference = this.storageRef(path);
    return getDownloadURL(storageReference);
  }
}
