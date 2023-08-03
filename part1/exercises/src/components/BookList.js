export default function BookList() {
  let pageTitle = "My favorite books";
  let book1 =
    "https://s3.amazonaws.com/adg-bucket/1984-george-orwell/3423-medium.jpg";
  let book2 = "https://store.tonyrobbins.com/cdn/shop/products/with_sticker_720_grande.png?v=1483723313";
  let book3 = "https://cdn.kobo.com/book-images/ddf8d53d-7df5-4560-8fbd-43915f4f6a03/353/569/90/False/rich-dad-poor-dad-24.jpg";

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img src={book1} height="300px" width="200px" alt="1984 Written by George Orwell" />
      <img src={book2} height="300px" width="200px" alt="Unshakeable by Tony Robbins" />
      <img src={book3} height="300px" width="200px" alt="Nothing here!" />
    </div>
  );
}
