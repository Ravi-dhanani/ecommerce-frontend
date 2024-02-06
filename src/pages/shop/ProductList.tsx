import { useRouter } from "next/router";
import useShopProduct from "../database/productList";

export default function ProductList() {
  const router = useRouter();

  const lstProduct = useShopProduct();
  console.log(lstProduct);
  return (
    <div>
      <div className="text-3xl font-semibold mb-10 flex justify-center ">
        <h2>Related Product</h2>
      </div>
      <div className="grid xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 sm gap-4 mx-2">
        {lstProduct?.map((item: any, index: number) => (
          <div key={index} className="bg-gray-50 border">
            <div className="">
              <a
                href="#"
                className="group h-96 block bg-gray-100 rounded-t-sm overflow-hidden relative"
              >
                <img
                  src={
                    item.img
                      ? item.img
                      : "https://cdn.shopify.com/s/files/1/0549/1104/1688/products/ResizedImages-05_41870b55-cd37-4106-a138-571d65b64894_460x.progressive.jpg?v=1673352767"
                  }
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div className="flex justify-between items-start  rounded-b-sm gap-2 p-4">
                <div
                  className="flex flex-col sort"
                  onClick={() => {
                    router.push(`/detail`);
                  }}
                >
                  <a className=" text-gray-800 hover:underline lg:text-base font-medium transition duration-100">
                    {item.Title}
                  </a>
                </div>

                <div className="flex flex-col items-end ">
                  <span className="text-gray-600 lg:text-lg font-bold">
                    ₹{item.price}.00
                  </span>
                </div>
              </div>
              <div className="flex justify-between  mb-4 mx-2">
                <div>
                  {/* <Button
                    padding={8}
                    width={"160px"}
                    name={"Add To Cart"}
                    item={item}
                    qty={1}
                  /> */}
                </div>
                <div className="flex justify-end">
                  {/* <WishlistButton /> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
