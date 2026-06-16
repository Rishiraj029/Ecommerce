import Image from "next/image";

type Product = {
  id: string;
  title: string;
  price: number;
  images?: string[];
  stock?: number;
  rating?: number;
  description?: string;
  category?: string;
};

type ProductCardProps = {
  product?: Product;
  title?: string;
  price?: number;
  images?: string[];
  stock?: number;
  rating?: number;
  description?: string;
  category?: string;
};

export function ProductCard({
  product,
  title,
  price,
  images,
}: ProductCardProps) {
  

  return (
    <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition p-3">
      <div className="w-full h-48 relative bg-gray-100 flex items-center justify-center">
        <Image
          src={images && images.length > 0 ? images[0] : "/placeholder.png"}
          alt={"Product image"}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="mt-3">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        <p className="text-xl font-bold">₹{price}</p>
      </div>
    </article>
  );
}