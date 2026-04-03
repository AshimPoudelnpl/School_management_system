import React from "react";
import partnerMunicipality from "../../assets/partners/107321270_167503368160709_5753721289914704343_n.jpg";
import partnerSaharaTv from "../../assets/partners/354231841_670828305056570_7164644747234303052_n.jpg";
import partnerNextInfosys from "../../assets/partners/448509679_122114354312326917_2060365356564464953_n.jpg";
import partnerBankeNews from "../../assets/partners/470192495_122209223216194664_4387841422780816684_n.jpg";

const partnerItems = [
  { title: "Kohalpur Municipality", image: partnerMunicipality },
  { title: "Sahara TV Khabar", image: partnerSaharaTv },
  { title: "Next Infosys", image: partnerNextInfosys },
  { title: "Banke News", image: partnerBankeNews },
];

const PartnersSection = () => (
  <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
    <div className="mx-auto max-w-screen-xl">
      <div className="text-center">
        <p className="text-3xl font-bold text-slate-700 sm:text-4xl">
          Our Partners
        </p>
        <div className="mx-auto mt-5 h-[3px] w-44 bg-slate-500/80" />
        <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
          Our valuable partners
        </p>
      </div>

      <div className="mt-14 overflow-x-auto">
        <div className="flex min-w-max items-center justify-center gap-10 pb-2 sm:gap-14 lg:gap-20">
          {partnerItems.map(({ title, image }) => (
            <div
              key={title}
              className="flex h-28 w-52 shrink-0 items-center justify-center sm:h-32 sm:w-60"
            >
              <img
                src={image}
                alt={title}
                className="max-h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-8">
        <span className="h-3.5 w-3.5 rounded-full bg-slate-400" />
        <span className="h-3.5 w-3.5 rounded-full bg-slate-300" />
      </div>
    </div>
  </section>
);

export default PartnersSection;
