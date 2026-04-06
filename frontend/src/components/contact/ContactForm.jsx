import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-gsap="reveal" className="flex items-center justify-center bg-white p-8 lg:w-1/2 lg:p-12">
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6 border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
        {[
          { label: "Name *", name: "name", type: "text" },
          { label: "Email *", name: "email", type: "email" },
          { label: "Phone *", name: "phone", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="mb-2 block font-medium text-slate-700">{label}</label>
            <input type={type} name={name} value={form[name]} onChange={handleChange} required className="w-full border border-slate-300 px-4 py-3 outline-none transition focus:border-secondary-color" />
          </div>
        ))}
        <div>
          <label className="mb-2 block font-medium text-slate-700">Message *</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows="5" required className="w-full border border-slate-300 px-4 py-3 outline-none transition focus:border-secondary-color" />
        </div>
        <button type="submit" disabled={isSubmitting} className="w-full bg-secondary-color py-3 font-semibold text-white transition hover:bg-primary-color disabled:cursor-not-allowed disabled:opacity-60">
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
