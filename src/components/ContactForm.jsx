import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="w-full py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Nagłówek */}
        <div className="text-center mb-30 mt-20">
          <h2 className="text-5xl font-extrabold ">Contact Us</h2>
          <p className="mt-4 text-lg  max-w-2xl mx-auto">
            Skontaktuj się z nami lub odwiedź naszą siedzibę — jesteśmy tu, aby Ci pomóc.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formularz */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=" shadow-2xl rounded-3xl p-10 space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-200 rounded-xl px-5 py-3 h-40 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Informacje o firmie */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold ">Our Office</h3>
              <p className="text-gray-600 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-500" /> ul. Przykładowa 12, 00-123 Warszawa, Polska
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-500" /> +48 123 456 789
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-500" /> kontakt@firmaxyz.pl
              </p>
            </div>

            {/* Linki społecznościowe */}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold ">Find Us Online</h3>
              <div className="flex gap-6">
                <a href="#" className="text-gray-600 hover:text-green-500 transition">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-500 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-500 transition">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.123456789!2d21.0123456!3d52.229675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccb9d8d2b7d1%3A0x123456789abcdef!2sWarszawa!5e0!3m2!1spl!2spl!4v1696012345678!5m2!1spl!2spl"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
