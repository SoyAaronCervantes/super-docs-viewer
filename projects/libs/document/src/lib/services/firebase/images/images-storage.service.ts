import { Injectable } from '@angular/core';
import {deleteObject, uploadBytes} from "@angular/fire/storage";
import {first, from, share} from "rxjs";
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
    return from( this.downloadUrl(path) )
      .pipe(
        first( x => !!x ),
        share()
      );
  }

  deleteImage(path: string) {
    const storageReference = this.storageRef(path);
    return from( deleteObject(storageReference) );
  }
}
