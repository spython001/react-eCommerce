import Anouncement from "../../components/anouncement/Anouncement";
import Categories from "../../components/categories/Categories";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";

export default function Home() {
  return (
    <div>
      <Anouncement />
        <Navbar/>
        <Slider/>
        <Categories />
        <Products />
        <Newsletter/>
    </div>
  )
}
