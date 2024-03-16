import Banner from "../../Components/HomeComponents/Banner/Banner";
import FirstCategory from "../../Components/HomeComponents/FirstCategory/FirstCategory";
import LastCategory from "../../Components/HomeComponents/LastCategory/LastCategory";
import SecondCategory from "../../Components/HomeComponents/SecondCategory/SecondCategory";
import ThridCategory from "../../Components/HomeComponents/ThirdCategory/ThridCategory";


const Home = () => {
   return (
      <div className="max-w-[90%] mx-auto">
         <Banner></Banner>
         <FirstCategory></FirstCategory>
         <SecondCategory></SecondCategory>
         <ThridCategory></ThridCategory>
         <LastCategory></LastCategory>
      </div>
   );
};

export default Home;