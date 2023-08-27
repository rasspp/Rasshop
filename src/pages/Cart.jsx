import { AiFillStar } from "react-icons/ai";

export default function Cart() {
  return (
    <section>
      <div className="pt-5">
        <h1 className="secondary-button">Your Cart</h1>

        <ul className="flex flex-wrap pt-4">
          <li className="product-card">
            <div>
              <img
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
                alt="gambar"
                loading="lazy"
              />

              <div className=" px-2 py-1">
                <div className="flex w-full justify-between">
                  <p>
                    <span>$</span>200
                  </p>

                  <p className="flex items-center gap-0.5">
                    <AiFillStar /> 4.5
                  </p>
                </div>

                <p className="text-md h-2 truncate border-b pb-7">
                  Iphone 14 Pro Max
                </p>

                <p className="mt-1 text-sm font-normal leading-4">
                  Kuat dan tahan lama
                </p>

                {/* special for product card in the Cart */}
                <div className="mt-3 flex items-center justify-between">
                  <button className="main-button border-white font-bold">
                    -
                  </button>
                  <p>0</p>
                  <button className="main-button border-white font-bold">
                    +
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
