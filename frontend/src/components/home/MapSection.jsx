import React from "react";

const MapSection = () => (
  <section className="relative overflow-hidden bg-gradient-cool px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
    <div className="pointer-events-none absolute left-0 top-0 h-48 w-48 rounded-full bg-secondary-color/20 blur-3xl" />

    <div className="relative mx-auto max-w-screen-xl">
      {/* Header */}
      <div className="mb-10 text-center">
        <span className="section-label bg-secondary-color/10 text-secondary-color ring-1 ring-secondary-color/30">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary-color" />
          Find Us
        </span>
        <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
          We&apos;re located in{" "}
          <span className="text-secondary-color">Kohalpur, Banke</span>
        </h2>
        <p className="mt-4 text-base text-slate-600">
          Western English Medium Secondary School, Kohalpur-05, Banke, Nepal
        </p>
      </div>

      {/* Map card */}
      <div className="overflow-hidden rounded-3xl shadow-2xl shadow-slate-200/70 border border-slate-100">
        <iframe
          title="Western Secondary School Banke map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.52881514596!2d81.67101837528388!3d28.191241875908624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399865946865f2bb%3A0x937a73ab635d4a3e!2sWestern%20Secondary%20School%2C%20Kohalpur%205!5e0!3m2!1sen!2snp!4v1775056630927!5m2!1sen!2snp"
          className="h-[400px] w-full sm:h-[480px]"
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
