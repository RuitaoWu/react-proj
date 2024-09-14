import BannerCategories from "./ui/BannerCategories"
import "react-multi-carousel/lib/styles.css";
import HomeBanner from "./ui/Homebanner";
import Hightlights from "./ui/Hightlights";
import Categories from "./ui/Categories";
import ProductList from "./ui/ProductList";

function App() {
  return (
    <main>
      <main>
        <BannerCategories />
        <HomeBanner />
        <Hightlights />
        <Categories />
        <ProductList />
      </main>

    </main>
  )
}

export default App
