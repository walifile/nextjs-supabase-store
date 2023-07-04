import supabase from "@/lib/supabase-server";
import Home from "@/components/Home";
const Products = async () => {
  const { data: products } = await supabase.from("products").select("* ");
  // console.log(products, "products aaaaaaaaaaaaaaaaaaaaaaaaa");

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
    // console.log(data, "insert data");
  };
  const updateData = async () => {
    "use server";
    const { data, error } = await supabase
      .from("products")
      .update({
        price: 70,
      })
      .eq("id", "6a728cd5-fc2d-431d-b64e-d59634674bc6");
    console.log(data, "update data");
    console.log(error, "update error");
  };
  const deleteData = async () => {
    "use server";
    const { data, error } = await supabase
      .from("products")
      .delete()
      .eq("id", "6a728cd5-fc2d-431d-b64e-d59634674bc6");
    console.log(data, "delte data");
    console.log(error, "delete error");
  };
  return (
    <div>
      <p>dfsdf</p>
      <Home
        insertData={insertData}
        updateData={updateData}
        deleteData={deleteData}
      />
    </div>
  );
};

export default Products;
