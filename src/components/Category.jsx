import productData from "./../data/productData.json";

export default function Category() {
  const category = productData.map((product) => (
    <li key={product._id} className="main-button">
      {product.category}
    </li>
  ));
  return (
    <section className="category border-grey-500 mx-auto w-full border-b-2 py-3">
      <ul
        role="list"
        className="flex justify-center gap-2 font-semibold text-white"
      >
        {category}
      </ul>
    </section>
  );
}
