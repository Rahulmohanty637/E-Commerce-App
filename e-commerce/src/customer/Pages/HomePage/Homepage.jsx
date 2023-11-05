import React from "react";
import MainCarousel from "../../component/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../component/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/Men's_Kurta";

const Homepage = () => {
    return (
        <div>
            <MainCarousel></MainCarousel>
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarousel data={mens_kurta} sectionName={`Men's Kurta`}></HomeSectionCarousel>
                <HomeSectionCarousel data={mens_kurta} sectionName={`Men's Shoes`}></HomeSectionCarousel>
                <HomeSectionCarousel data={mens_kurta} sectionName={`Men's shirt`}></HomeSectionCarousel>
                <HomeSectionCarousel data={mens_kurta} sectionName={`Women's Saree`}></HomeSectionCarousel>
                <HomeSectionCarousel data={mens_kurta} sectionName={`Women's Kurti`}></HomeSectionCarousel>
            </div>
        </div>
        
    )
}
export default Homepage;
