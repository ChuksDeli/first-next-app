import { Heroo } from "@/components/ecommerce/Heroo";
import { Navbarr } from "@/components/ecommerce/NavBarr";
import { Producct } from "@/components/ecommerce/Producct";
import { SemiFooter } from "@/components/ecommerce/SemiFooter";
import { Trend1 } from "@/components/ecommerce/Trend-1";
import { Trend2 } from "@/components/ecommerce/Trend-2";

export default function Page() {
  return (
    <>
      <main className="bg-linear-to-r from-red-500 to-red-800">
        <section className="bg-linear-to-r from-red-500 to-red-800 lg:h-170 h-190">
          <Navbarr />
          <Heroo />
        </section>
      </main>
      <section className="bg-white py-10">
        <h1 className="text-black text-4xl font-bold pl-15 pt-10">Top picks</h1>
        <div className=" lg:grid lg:grid-cols-3 w-full gap-8 py-8 pt-5 container mx-auto">
          {info.map((item, index) => (
            <Producct {...item} key={index} />
          ))}
        </div>
      </section>
      <section className="pt-0 bg-white">
        <h1 className="text-black text-3xl pl-20 font-bold pb-10">
          Trending Now!
        </h1>
        <Trend1 image={"/ecommerce/producct-3-removebg-preview.png"} />
        <Trend2
          img1={"/ecommerce/black j.jpg"}
          img2={"/ecommerce/black-j2.jpg"}
        />
      </section>
      <SemiFooter image={"/ecommerce/best-removebg-preview.png"} />
      <section></section>
    </>
  );
}

const info = [
  {
    image: "/ecommerce/producct-5-removebg-preview.png",
    title: "Jordans",
    color: "black",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, et cum? Officia quas reiciendis, esse veniam nihil modi. Eos, deserunt aperiam. Ullam laborum hic quaerat voluptatibus qui! Deserunt, corrupti veritatis!`,
    price: "$199",
    button: "Cart",
    buttonColor: "black",
    borderColor: "2px solid black",
  },

  {
    image: "/ecommerce/product-6-removebg-preview.png",
    title: "Jordans",
    color: "blue",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, et cum? Officia quas reiciendis, esse veniam nihil modi. Eos, deserunt aperiam. Ullam laborum hic quaerat voluptatibus qui! Deserunt, corrupti veritatis!`,
    price: "$299",
    button: "Cart",
    hasDiscount: true,
    buttonColor: "black",
    borderColor: "2px solid blue",
  },

  {
    image: "/ecommerce/producct-3-removebg-preview.png",
    title: "Jordans",
    color: "red",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, et cum? Officia quas reiciendis, esse veniam nihil modi. Eos, deserunt aperiam. Ullam laborum hic quaerat voluptatibus qui! Deserunt, corrupti veritatis!`,
    price: "$399",
    button: "Cart",
    buttonColor: "black",
    borderColor: "2px solid red",
  },
];
