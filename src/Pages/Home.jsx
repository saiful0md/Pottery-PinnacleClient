import ArtAndCraftCategoriesSection from "../components/ArtAndCraftCategoriesSection";
import CraftItemsSection from "../components/CraftItemsSection";
import FeaturesProducts from "../components/FeaturesProducts";
import OuerServices from "../components/OuerServices";
import Slider from "../components/Slider";



const Home = () => {
    return (
        <div>
            <Slider></Slider>  
            <CraftItemsSection></CraftItemsSection>        
            <ArtAndCraftCategoriesSection></ArtAndCraftCategoriesSection>
            <FeaturesProducts></FeaturesProducts>
            <OuerServices></OuerServices>
        </div>
    );
};

export default Home;