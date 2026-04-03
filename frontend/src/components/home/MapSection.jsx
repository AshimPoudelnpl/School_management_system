import React from "react";

const MapSection = () => (
  <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
    <div className="mx-auto max-w-screen-xl">
      <div className="mt-10 overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/70">
        <iframe
          title="Western Secondary School Banke map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.52881514596!2d81.67101837528388!3d28.191241875908624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399865946865f2bb%3A0x937a73ab635d4a3e!2sWestern%20Secondary%20School%2C%20Kohalpur%205!5e0!3m2!1sen!2snp!4v1775056630927!5m2!1sen!2snp"
          className="h-[450px] w-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

export default MapSection;
