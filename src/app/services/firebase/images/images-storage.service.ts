import { Injectable } from '@angular/core';
import {getDownloadURL, getStorage, ref, uploadBytes} from "@angular/fire/storage";
import {first, from, share, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImagesStorageService {
  private readonly storage = getStorage();
  uploadImage(formData: FormData, path: string) {
    const storageReference = ref(this.storage, path);
    return from(uploadBytes(storageReference, formData.get('file') as Blob))
  }

  getImageUrl(path: string) {
    const storage = getStorage();
    return from( getDownloadURL(ref(storage, path)) )
      .pipe(
        first( x => !!x ),
        share()
      );
  }
}
