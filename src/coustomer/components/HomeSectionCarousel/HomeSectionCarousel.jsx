import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from '../../Data/mens_kurta';

function HomeSectionCarousel({data , sectionName}) {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>)

    return (
      <div className="relative px-4 lg:px-8 border border-black">
        <h2 className="text-2xl font-extrabold text-gray-800">{sectionName}</h2>
        <div className="relative p-5">
          <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls
            infinite
            autoPlay
            autoPlayInterval={2000}
            responsive={responsive}
            disableDotsControls
          />
          {/* <button
                    variant="contained"
                    className="z-50 bg-white"
                    sx={{
                        position: "absolute",
                        top: "81rem",
                        right: "0rem",
                        transform: "translateX(50%) rotate(90deg) ",
                        bgcolor: "white",
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon
                        sx={{ transform: "rotate(180deg)", color: "black" }}
                    />
                </button>
                <button
                    variant="contained"
                    className="z-50 bg-white"
                    sx={{
                        position: "absolute",
                        top: "8rem",
                        left: "0rem",
                        transform: "translateX(50%) rotate(90deg) ",
                        bgcolor: "white",
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon
                        sx={{ transform: "rotate(0deg)", color: "black" }}
                    />
                </button> */}
        </div>
      </div>
    );
}

export default HomeSectionCarousel