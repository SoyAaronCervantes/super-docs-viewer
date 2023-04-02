interface Storage {
  url: string;
}

export interface DocumentInterface {
  id: number;
  title: string;
  storage?: Storage;
}
