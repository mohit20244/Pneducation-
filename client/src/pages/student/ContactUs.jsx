import React from 'react'

function ContactUs() {
  return (
    <section className="flex flex-col md:flex-row bg-blue-50 min-h-screen">
    {/* Contact Info */}
    <section className="bg-blue-700 text-white p-10 md:w-1/2 flex flex-col justify-center">
      <h2 className="text-4xl font-bold italic mb-4">
        Get in touch with <br />
        <span className="not-italic font-extrabold">PNINFOSYS!</span>
      </h2>
      <h3 className="text-xl italic font-semibold mb-4">Our Address</h3>
      <address className="not-italic">
        <p>MIG-332 Darpan Colony, Thatipur,</p>
        <p>Gwalior, Madhya Pradesh</p>
        <p className="mt-2">
          <a
            href="https://www.pninfosys.com"
            className="underline text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.pninfosys.com
          </a>
        </p>
        <p>support@pninfosys.com</p>
        <p>+91 7000846823</p>
        <p>+91 7415289378</p>
      </address>
    </section>

    {/*  Contact Form */}
    <section className="bg-white p-10 md:w-1/2 flex flex-col justify-center shadow-md ">
      <p className="text-lg font-semibold mb-6 " >
        For any general query, please fill in the following contact form:
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name *"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email *"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <input
          type="tel"
          placeholder="Your Contact Number *"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <textarea
          placeholder="Your Message *"
          rows="4"
          className="w-full p-3 border border-gray-300 rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-6 py-3 rounded font-semibold hover:opacity-90 transition-all"
        >
          SEND MESSAGE →
        </button>
      </form>
    </section>
  </section>
);
};
  


export default ContactUs
