import supabase from "@/lib/supabase-server";
import Home from "@/components/Home";
const Products = async () => {
  const { data: products } = await supabase.from("products").select("* ");
  console.log(products, "products aaaaaaaaaaaaaaaaaaaaaaaaa");

  const insertData = async () => {
    "use server";
    const { data, error } = await supabase
      .from("products")
      .insert({
        name: "shoes 2",
        price: "40",
        client_id: "917ea60f-b6e9-4e13-9237-b7e3ca833f1f",
      })
      .select();
    console.log(data, "insert data");
  };
  return (
    <div>
      <p>dfsdf</p>
      <Home insertData={insertData} />
    </div>
  );
};

export default Products;
