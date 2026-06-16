import { db } from "@/db";
import { products } from "@/db/schema";

export async function getProducts() {
  const allProducts = await db.select().from(products);

  return allProducts;
}