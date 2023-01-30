// import { FruitsSection, MenuSection, ShowcaseBanner, } from "../../components"
import MenuSection from '../../components/sections/MenuSection';
import Showcase from '../../components/showcase/Showcase';

const Home = () => {
  return (
    <div className="flex w-full h-auto flex-col items-center justify-center">
      <Showcase />
      {/* <FruitsSection />
       */}
      <MenuSection />
    </div>
  );
};

export default Home;
