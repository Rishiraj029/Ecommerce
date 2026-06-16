import { getProducts } from "@/lib/products";
import { ProductCard } from "@/components/product-card";


export default async function Home() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard 
          key = {product.id}
          images={product.images}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}