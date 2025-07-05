import Hero from "@/components/Hero";
import Card from "@/components/Card";
import ToggleControls from "@/components/ToggleControls";

const data = [
  { img: "/images/Leather Handbag.webp", title: "Leather Handbag", text: "Elegant, handcrafted luxury bag." },
  { img: "/images/Running Shoes.webp", title: "Running Shoes", text: "Comfortable and durable sneakers." },
  { img: "/images/smart-watch.webp", title: "Smart Watch", text: "Stylish with health features." },
  { img: "/images/Designer Sunglasses.webp", title: "Designer Sunglasses", text: "UV protection with fashion." },
  { img: "/images/Vintage Jacket.webp", title: "Vintage Jacket", text: "Classic style, modern fit." },
  { img: "/images/Wireless Headphones.webp", title: "Wireless Headphones", text: "Noise cancelling and rich sound." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-pink-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition duration-300">
      <ToggleControls />
      <Hero />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-20">
        {data.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </section>
    </main>
  );
}