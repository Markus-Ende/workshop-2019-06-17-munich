export interface Book {
  isbn: string;
  title: string;
  subtitle?: string;
  abstract?: string;
  numPages?: number;
  author?: string;
  publisher?: {
    name: string;
    url: string;
  };
}
