import useShopProduct from "../database/productList";
import ProductRowItem from "./ProductRowItem";

export default function ProductRow() {
  // const [productRow, setProductRow] = useState<any>(undefined);
  // async function getData() {
  //   try {
  //     const res = await ApiServices.getLstProduct();
  //     setProductRow(res);
  //   } catch (err: any) {
  //     console.log(err);
  //   }
  // }
  // useEffect(() => {
  //   getData();
  // }, []);
  // console.log(productRow);
  const productRow = useShopProduct();
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 grid-cols-2 sm:mt-10 mt-2 mx-2 md:mx-[15px] ">
        {productRow?.map((item: any, index: number) => (
          <div key={index}>
            <ProductRowItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
