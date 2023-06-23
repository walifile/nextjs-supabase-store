import supabase from "@/lib/supabase-server";
const Products = async () => {
  const { data: products } = await supabase.from("products").select("*");
  console.log(products, "products aaaaaaaaaaaaaaaaaaaaaaaaa");
  return <div>page</div>;
};

export default Products;
