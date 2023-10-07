import Anouncement from "../../components/anouncement/Anouncement";
import Categories from "../../components/categories/Categories";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";

export default function Home() {
  return (
    <div>
      <Anouncement />
        <Navbar/>
        <Slider/>
        <Categories />
    </div>
  )
}
