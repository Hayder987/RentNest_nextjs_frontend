import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative mt-16 w-full bg-[#171b1f] text-gray-300 overflow-hidden">
      {/* Background Image Effect */}
      <div className="absolute inset-0 opacity-5 bg-[url('/logo.png')] bg-center bg-no-repeat bg-contain" />

      <div className="relative max-w-400 mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Social */}
          <div>
            <h3 className="text-2xl text-white mb-5">Get Socials</h3>

            <p className="text-sm text-gray-400 mb-6">
              Link with us via your social networks:
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              {[FaFacebookF, FaXTwitter, FaInstagram].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#30353a] flex items-center justify-center hover:bg-orange-400 hover:text-white transition"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl text-white mb-5">We’re here for you</h3>

            <div className="space-y-3 text-sm">
              <p className="flex justify-center md:justify-start gap-2">
                <MapPin size={18} />
                Pabna Terminal, Pabna, Dhaka, Bangladesh
              </p>

              <p className="flex justify-center md:justify-start gap-2">
                <Phone size={18} />
                (+88)01771814597
              </p>

              <p className="flex justify-center md:justify-start gap-2 text-orange-400">
                <Mail size={18} />
                hayderbd4290@gmail.com
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-2xl text-white mb-5">Contact Us</h3>

            <p className="text-sm text-gray-400 mb-5">
              We love your feedback and are constantly looking.
            </p>

            <Link
              href="/contact"
              className="text-orange-400 font-semibold hover:text-orange-300"
            >
              SEND US A MESSAGE →
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl text-white mb-5">
            Subscribe to our newsletter
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-100 px-5 py-3 rounded bg-[#30353a] outline-none"
            />

            <button className="px-10 py-3 rounded bg-orange-400 text-white font-semibold hover:bg-orange-500 transition">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Logo */}
        <div className="text-center mt-10">
          <h2 className="text-4xl font-bold text-white">
            Rent<span className="text-orange-400">Nest</span>
          </h2>

          <p className="tracking-[5px] text-sm text-gray-400">LUXURY RENTALS</p>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <span className="text-orange-400">HDR Press</span> © 2026. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
