import {FileInput} from "ngx-material-file-input";

export interface AnnotationFormInterfaces {
  title: string;
  description?: string;
  file?: FileInput;
}
