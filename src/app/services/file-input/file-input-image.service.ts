import { Injectable } from '@angular/core';
import {FileInput} from "ngx-material-file-input";

@Injectable({
  providedIn: 'root'
})
export class FileInputImageService {
  getObjectUrl(event: FileInput): string {
    const imageFile = event.files[0];
    return URL.createObjectURL(imageFile);
  }

  createFormData(fileInput: FileInput): { formData: FormData, fileName: string } {
    const formData = new FormData();
    const file = fileInput.files[0];
    const fileName = file.name;
    formData.append('file', file, fileName);
    return { formData, fileName };
  }
}
