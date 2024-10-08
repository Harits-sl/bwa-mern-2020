import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/button/index";
// import image
import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/icon_cities.svg";
import IconTraveler from "assets/images/icons/icon_traveler.svg";
import IconTreasure from "assets/images/icons/icon_treasure.svg";

import formatNumber from "utils/formatNumber";

export default function Hero({ refMostPicked, data }) {
  function showMostPick() {
    window.scrollTo({
      top: refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-item-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPick}
            >
              Show Me Now
            </Button>
            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={IconTraveler}
                  alt={`${data.travelers} travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 30 }}>
                <img
                  width="36"
                  height="36"
                  src={IconTreasure}
                  alt={`${data.treasures} treasures`}
                />
                <h6 className="mt-3">
                  {formatNumber(data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 30 }}>
                <img
                  width="36"
                  height="36"
                  src={IconCities}
                  alt={`${data.cities} cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410, marginTop: 10 }}>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "-20px 0 0 -20px", zIndex: 1 }}
              />
              <img
                src={ImageHeroFrame}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
