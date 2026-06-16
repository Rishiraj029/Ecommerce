import { getProducts } from "@/lib/products";

export default async function Home() {
  const products = await getProducts();

  console.log(products);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}