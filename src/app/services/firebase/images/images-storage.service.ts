import { Injectable } from '@angular/core';
import {deleteObject, getDownloadURL, getStorage, ref, uploadBytes} from "@angular/fire/storage";
import {first, from, share, shareReplay} from "rxjs";
import {FirebaseStorageService} from "../base/storage/firebase-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ImagesStorageService extends FirebaseStorageService {
  uploadImage(formData: FormData, path: string) {
    const storageReference = this.storageRef(path);
    return from(uploadBytes(storageReference, formData.get('file') as Blob))
  }

  getImageUrl(path: string) {
    const downloadUrl = this.downloadUrl(path);
    return from( downloadUrl )
      .pipe(
        first( x => !!x ),
        share()
      );
  }

  deleteImage(path: string) {
    const storage = getStorage();
    const desertRef = ref(storage, path);
    return from( deleteObject(desertRef) );
  }
}
