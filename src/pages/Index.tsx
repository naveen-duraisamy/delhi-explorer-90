import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import AttractionsSlider from "@/components/AttractionsSlider";
import FoodCards from "@/components/FoodCards";
import DelhiFacts from "@/components/DelhiFacts";
import ConnectorsAvailability from "@/components/ConnectorsAvailability";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <AttractionsSlider />
        <FoodCards />
        <DelhiFacts />
        <ConnectorsAvailability />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
