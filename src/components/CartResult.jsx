import { Link } from "react-router-dom";

export default function CartResult() {
  return (
    <div className="cart-result fixed bottom-7 right-10 flex items-end gap-3">
      {/* view result */}
      <div className=" flex w-60 flex-col gap-1 rounded border-2 border-white bg-main-color px-3 py-2 font-semibold text-white">
        {/* product in modal cart */}
        <div className="border-b border-white p-1 pb-2">
          <p className="truncate">Iphone 14 Pro Max & Macbook Air M2</p>
          <div className="flex justify-between text-xs font-normal">
            <p>x1</p>
            <p>
              Rp. <span> 24.000.000</span>
            </p>
          </div>
        </div>
        <div className="border-b border-white p-1 pb-2">
          <p className="truncate">Iphone 14 Pro Max & Macbook Air M2</p>
          <div className="flex justify-between text-xs font-normal">
            <p>x1</p>
            <p>
              Rp. <span> 24.000.000</span>
            </p>
          </div>
        </div>
        <div className="border-b border-white p-1 pb-2">
          <p className="truncate">Iphone 14 Pro Max & Macbook Air M2</p>
          <div className="flex justify-between text-xs font-normal">
            <p>x1</p>
            <p>
              Rp. <span> 24.000.000</span>
            </p>
          </div>
        </div>

        {/* total result */}
        <div className="flex w-full justify-between px-1">
          <p>Total</p>
          <p>
            Rp.
            <span>64.000.000</span>
          </p>
        </div>

        <div className="flex w-full justify-end">
          <Link
            to={"/cart/checkout"}
            type="button"
            className="main-button w-1/2 border-white text-center"
          >
            Pay
          </Link>
        </div>
      </div>

      {/* button cart result */}
      <div className="main-button max-h-10 rounded border-white text-white hover:bg-main-color hover:text-white active:border-main-color active:bg-white active:text-main-color">
        Result
      </div>
    </div>
  );
}
