import ArtAndCraftCategoriesSection from "../components/ArtAndCraftCategoriesSection";
import CraftItemsSection from "../components/CraftItemsSection";
import Slider from "../components/Slider";



const Home = () => {
    return (
        <div>
            <Slider></Slider>  
            <CraftItemsSection></CraftItemsSection>        
            <ArtAndCraftCategoriesSection></ArtAndCraftCategoriesSection>
        </div>
    );
};

export default Home;