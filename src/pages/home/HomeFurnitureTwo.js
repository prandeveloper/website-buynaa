import React from "react";
import HeroSliderTwentyEight from "../../wrappers/hero-slider/HeroSliderTwentyEight";
import FirstSectiontwo from "../../wrappers/content-home/FirstSectiontwo";
import FirstSectiontree from "../../wrappers/content-home/FirstSectiontree";
import SecondSection from "../../wrappers/content-home/SecondSection";
import ByCategory from "../../wrappers/content-home/ByCategory";
// import NewsletterTwo from "../../wrappers/newsletter/NewsletterTwo";
import LayoutOne from "../../layouts/LayoutOne";
// import CategoryTwoSlider from "../../wrappers/category/CategoryTwoSlider";
// import TabProductSix from "../../wrappers/product/TabProductSix";
// import FirstSection from "../../wrappers/content-home/FirstSection";
// import AnimateSection from "../../wrappers/content-home/AnimateSection";
// import ThirdSection from "../../wrappers/content-home/ThirdSection";
// import FourthSection from "../../wrappers/content-home/FourthSection";
// import MapSection from "../../wrappers/content-home/MapSection";
// import FifthSection from "../../wrappers/content-home/FifthSection";

const HomeFurnitureTwo = () => {
  return (
    <LayoutOne>
      {/* hero slider */}
      <HeroSliderTwentyEight />
      {/* First Section */}
      <FirstSectiontwo />
      {/* Second Store */}
      <FirstSectiontree />
      {/* Product slider */}
      <SecondSection />
      {/* Browse by category */}
      <ByCategory />
      {/* newsletter */}
      {/* <NewsletterTwo spaceBottomClass="pb-100" /> */}
    </LayoutOne>
  );
};

export default HomeFurnitureTwo;
