export type IBook = {
    total:number;
    error: string;
    title: string;
    subtitle: string;
    authors: string;
    publisher: string;
    isbn10: string;
    isbn13: string;
    pages: string;
    year: string;
    rating: number;
    desc: string;
    price: number;
    image: string;
    url: string;
    pdf: PdfModel;
    favorite: boolean;
  };
  
  export type IBookDetail ={
    result: {
      authors: "",
      desc: "",
      error: "",
      image: "",
      isbn10: "",
      isbn13: "",
      language: "",
      pages: "",
      pdf: {},
      price: "",
      publisher: "",
      rating: "",
      subtitle: "",
      title: "",
      url: "",
      year: "",
    },
    error: null,
    status: "idle",
  };
  
  export type PdfModel = {
    chapter2: string;
    chapter5: string;
  };
  
  export type CartSumProps = {
    price: number;
  };
  
  export type BookListType = Array<IBook>;
  