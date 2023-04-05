import {FileInput} from "ngx-material-file-input";

export interface AnnotationForm {
  title: string;
  description?: string;
  file?: FileInput;
}
