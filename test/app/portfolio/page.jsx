import { ProductCard } from "@/project/ProductCard";

export const metadata = {
  title: "Home",
};

export default function Portfolio() {
  return (
    <section className="bg-stone-400 lg:h-full lg:w-full">
      <div className="lg:container lg:grid grid-cols-3 lg:mx-auto gap-x-5 lg:py-15 ">
      {data.map((item, index) => 
      <ProductCard 
       image={item.image}
       title={item.title}
       version={item.version}
       color={item.color}
       description={item.description}
       tag={item.tag}
       CTA={item.CTA}
       key={index}
       />
      )}
      </div>
    </section>
  );
}


const data = [
  {
   image: "/productImg/product-1-1-removebg-preview.png",
   title: "Nike Running Shoe",
   version: "EU38",
   color: "Black",
   description: `crossing hard wood comfort with off-court flair. '80s-inspired construction, bold details and nothin'-but-style-net.`,
   tag: "69.99",
   CTA: "ADD TO CART"
  },

  {
   image: "/productImg/product-2-removebg-preview.png",
   title: "Cool Jordans",
   version: "EU39",
   color: "Light-Blue",
   description: `crossing hard wood comfort with off-court flair. '80s-inspired construction, bold details and nothin'-but-style-net.`,
   tag: "59.99",
   CTA: "ADD TO CART"
  },
  {
   image: "/productImg/product-3-removebg-preview.png",
   title: "Jordans Pro 2.0",
   version: "EU40",
   color: "Blue",
   description: `crossing hard wood comfort with off-court flair. '80s-inspired construction, bold details and nothin'-but-style-net.`,
   tag: "65.99",
   CTA: "ADD TO CART"
  },
]
