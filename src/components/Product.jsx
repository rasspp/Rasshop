import productData from "./../data/productData.json";
import { AiFillStar } from "react-icons/ai";

export default function Product() {
  const productList = productData.map((product) => (
    <li key={product._id} className="product-card">
      <div>
        <img
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
          alt="gambar"
          loading="lazy"
        />
        <div className=" px-2 py-1">
          <div className="flex w-full justify-between">
            <p>${product.price}</p>

            <p className="flex items-center gap-0.5">
              <AiFillStar /> {product.rating}
            </p>
          </div>

          <p className="text-md h-2 truncate border-b pb-7">{product.name}</p>

          <p className="mt-1 text-sm font-normal leading-4">
            {product.description}
          </p>
        </div>
      </div>
    </li>
  ));

  return (
    <section className="p-3">
      <div>
        <h2 className="secondary-button">Flash Sale</h2>
        <ul role="list" className="flex flex-wrap pt-4">
          {productList}
        </ul>
      </div>
    </section>
  );
}
