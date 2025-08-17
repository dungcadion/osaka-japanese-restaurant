import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { Menu as MenuIcon, X, ArrowLeft, ArrowRight } from "lucide-react";

// --- Local Image Imports ---
import myLogo from "./assets/images/logo.svg";
import heroLogo from "./assets/images/logos/osaka-japanese-restaurant.svg";
import DJI from "./assets/images/drone/DJI_0075.jpg";
import xiaomi1 from "./assets/images/Xiaomi/IMG_20250807_080557.jpg";
import xiaomi2 from "./assets/images/Xiaomi/IMG_20250807_080518.jpg";
import xiaomi3 from "./assets/images/Xiaomi/IMG_20250807_075823.jpg";
import xiaomi4 from "./assets/images/Xiaomi/IMG_20250807_075812.jpg";
import xiaomi5 from "./assets/images/Xiaomi/IMG_20250807_075756.jpg";
import xiaomi6 from "./assets/images/Xiaomi/IMG_20250807_075742.jpg";
import xiaomi7 from "./assets/images/Xiaomi/IMG_20250807_075717.jpg";
import xiaomi8 from "./assets/images/Xiaomi/IMG_20250807_075706.jpg";
import xiaomi9 from "./assets/images/Xiaomi/IMG_20250807_075625.jpg";
import xiaomi10 from "./assets/images/Xiaomi/IMG_20250807_075616.jpg";
import xiaomi11 from "./assets/images/Xiaomi/IMG_20250807_075546.jpg";
import xiaomi12 from "./assets/images/Xiaomi/IMG_20250807_075530.jpg";

// --- menu images ---
import menuImage1 from "./assets/images/menu/2.png";
import menuImage2 from "./assets/images/menu/3.png";


// --- Constants for local images ---
const logoUrl = myLogo;
const heroBgUrl = DJI;
const aboutImgUrl = xiaomi1; 
const galleryImages = [
  DJI,
  xiaomi1,
  xiaomi2,
  xiaomi3,
  xiaomi4,
  xiaomi5,
  xiaomi6,
  xiaomi7,
  xiaomi8,
  xiaomi9,
  xiaomi10,
  xiaomi11,
  xiaomi12,
];
// --- Constant for Menu Carousel Images ---
const menuCarouselImages = [menuImage1, menuImage2];


// --- Facebook SVG Icon Components ---
const FacebookIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Facebook</title>
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
  </svg>
);

// --- Instagram SVG Icon Component ---
const InstagramIcon = ({ className }) => (
    <svg
        className={className}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>Instagram</title>
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.305-1.457.717-2.126 1.385C1.344 2.683.93 3.357.63 4.14c-.3.765-.5 1.635-.558 2.913C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.26 2.148.558 2.913.3.784.717 1.457 1.385 2.126.67.67 1.344 1.077 2.126 1.385.765.3 1.635.5 2.913.558C8.333 23.985 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.26 2.913-.558.784-.3 1.457-.717 2.126-1.385.67-.67 1.077-1.344 1.385-2.126.3-.765-.5-1.635.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.26-2.148-.558-2.913-.3-.784-.717-1.457-1.385-2.126C21.317 1.344 20.643.93 19.86.63c-.765-.3-1.635-.5-2.913-.558C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.849c-.053 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.82.679-1.381.896-.422.164-1.057.36-2.227.413C8.415 2.176 8.797 2.16 12 2.16zm0 3.39c-3.405 0-6.16 2.755-6.16 6.16s2.755 6.16 6.16 6.16 6.16-2.755 6.16-6.16-2.755-6.16-6.16-6.16zm0 10.16c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.44.645-1.44 1.44s.645 1.44 1.44 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z"/>
    </svg>
);

// --- COLOR CONSTANTS ---
const ACCENT_COLOR = "#cd2424";
const TEXT_COLOR = "#333333";
const BG_LIGHT = "#f7f7f7ff";
const BG_DARK = "#2a2a2a";
const BG_WHITE = "#FFFFFF";

// --- SocialSidebar ---
const SocialSidebar = () => (
  <div
    className="hidden md:flex flex-col items-center justify-center space-y-6 fixed left-0 top-0 h-screen w-10 shadow-lg z-30"
    style={{
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(4px)",
      borderRight: "1px solid #e5e7eb"
    }}
  >
    <a
      href="https://www.facebook.com/oosakarestaurant"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-[#cd2424] transition-colors"
    >
      <FacebookIcon className="w-6 h-6 fill-current" />
    </a>
    <a
      href="https://www.instagram.com/oosaka.restaurant/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-[#cd2424] transition-colors"
    >
      <InstagramIcon className="w-6 h-6 fill-current" />
    </a>
  </div>
);

// --- NavLink ---
const NavLink = ({ href, children, onClick, isActive }) => (
  <a
    href={href}
    onClick={onClick}
    className={`inline-block px-2 py-2 uppercase tracking-widest transition-colors duration-300 text-sm font-medium border-b-2 ${
      isActive
        ? "text-[#cd2424] border-[#cd2424]"
        : "text-[#333333] border-transparent hover:text-[#cd2424]"
    }`}
    style={isActive ? { color: ACCENT_COLOR, borderColor: ACCENT_COLOR } : {}}
  >
    {children}
  </a>
);

// --- Page Section Components ---
const HomeSection = () => (
  <section
    id="home"
    className="h-screen w-full relative flex items-center justify-center text-center text-white bg-cover bg-center"
    style={{ backgroundImage: `url(${heroBgUrl})` }}
  >
    <div className="absolute inset-0" style={{ background: "rgba(255, 255, 255, 0.9)" }}></div>
    <div className="relative z-10 p-4 flex flex-col items-center w-3/4 max-w-lg">
      <img
        src={heroLogo}
        alt="Osaka Japanese Restaurant Logo"
        className="w-full filter drop-shadow-lg"
      />
      <p 
        className="w-full mt-1 text-base md:text-lg lg:text-xl font-semibold text-black mx-auto [text-shadow:0_2px_4px_rgba(255,255,255,0.9)]">
        Friendship Highway, Angeles City, Pampanga.
      </p>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-20 md:py-32" style={{ background: BG_WHITE, color: TEXT_COLOR }}>
    <div className="container mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="md:w-1/2 w-full">
          <img
            src={aboutImgUrl}
            alt="Osaka Japanese Restaurant Exterior"
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Noto Serif JP', serif", color: ACCENT_COLOR }}
          >
            About Us
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            Step into Osaka Japanese Restaurant for a light and relaxing dining experience. We offer a wide range of authentic Japanese cuisine, featuring traditional ramen like Tonkotsu and Shoyu Ramen, as well as creamy and spicy Tantanmen. Our menu also includes Japanese curries such as Beef Curry and Katsu Curry, served over steamed rice. Sushi and sashimi lovers can enjoy classic options like fresh salmon and tuna, along with premium choices such as Aburi Salmon and Uni. Our specialty maki rolls include the popular California Maki and unique creations like the Osaka Tower. We also serve premium A5 Wagyu and Saikoro Steak. To complement your meal, we offer Sapporo Premium Beer and Sapporo Premium Black.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const MenuPdf = "menus/Osaka-Menu.pdf";

// --- MenuSection with Image Carousel ---
const MenuSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    return (
        <section id="menu" className="py-20 md:py-32" style={{ background: BG_LIGHT }}>
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    {/* Text content on the left */}
                    <div className="md:w-1/2 w-full text-center md:text-left">
                        <h2
                            className="text-4xl md:text-5xl font-bold"
                            style={{ fontFamily: "'Cinzel', serif", color: ACCENT_COLOR }}
                        >
                            Our Menu
                        </h2>
                        <p className="text-lg text-gray-600 my-6 max-w-xl mx-auto md:mx-0">
                            View our full menu offerings, including our signature ramen bowls, fresh sushi, and premium steaks.
                        </p>
                        <a
                            href={MenuPdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold py-3 px-8 rounded-lg transition-colors inline-block shadow-md hover:opacity-90"
                            style={{ background: ACCENT_COLOR, color: "#fff" }}
                        >
                            View Full Menu
                        </a>
                    </div>
                    {/* Image carousel on the right */}
                    <div className="md:w-1/2 w-full">
                        <div className="relative max-w-md mx-auto">
                            <div className="overflow-hidden rounded-lg shadow-xl" ref={emblaRef}>
                                <div className="flex">
                                    {menuCarouselImages.map((src, index) => (
                                        <div className="flex-grow-0 flex-shrink-0 w-full min-w-0" key={index}>
                                            <img
                                                src={src}
                                                alt={`Menu item ${index + 1}`}
                                                className="w-full"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button onClick={scrollPrev} className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-2 transition-colors z-10 hover:bg-white/80"
                                style={{ background: "rgba(42,42,42,0.6)", color: "#fff" }}>
                                <ArrowLeft size={24} />
                            </button>
                            <button onClick={scrollNext} className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-2 transition-colors z-10 hover:bg-white/80"
                                style={{ background: "rgba(42,42,42,0.6)", color: "#fff" }}>
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const GallerySection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi]);

  return (
    <section id="gallery" className="py-20 md:py-32" style={{ background: BG_WHITE }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16"> 
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Cinzel', serif", color: ACCENT_COLOR }}
          >
            Gallery
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A glimpse into Osaka Japanese Restaurant.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-xl" ref={emblaRef}>
            <div className="flex">
              {galleryImages.map((src, index) => (
                <div className="flex-grow-0 flex-shrink-0 w-full min-w-0" key={index}>
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-[300px] md:h-[500px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <button onClick={scrollPrev} className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-2 transition-colors z-10"
            style={{ background: "rgba(42,42,42,0.7)", color: "#fff" }}>
            <ArrowLeft size={24} />
          </button>
          <button onClick={scrollNext} className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-2 transition-colors z-10"
            style={{ background: "rgba(42,42,42,0.7)", color: "#fff" }}>
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSepCn3vz8tqQMn1hEPSH1bhzdFRWlC5mXChKBvPL42fuW0BDQ/formResponse";
const FIELD_NAME = "entry.1328113499";
const FIELD_EMAIL = "entry.136181805";
const FIELD_MESSAGE = "entry.516002430";

const ContactSection = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);

    const form = e.target;
    const data = new FormData(form);

    fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      body: data,
    }).then(() => {
      setSending(false);
      setSent(true);
      form.reset();
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32" style={{ background: BG_LIGHT, color: TEXT_COLOR }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Cinzel', serif", color: ACCENT_COLOR }}
          >
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We'd love to hear from you. Drop by or send us a message.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 w-full bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6" style={{ color: ACCENT_COLOR }}>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2" style={{ color: TEXT_COLOR }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name={FIELD_NAME}
                  required
                  className="w-full bg-gray-100 text-gray-800 rounded border border-gray-300 focus:border-[#cd2424] focus:ring-2 focus:ring-[#cd2424]/50 p-3 outline-none transition-colors"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2" style={{ color: TEXT_COLOR }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name={FIELD_EMAIL}
                  required
                  className="w-full bg-gray-100 text-gray-800 rounded border border-gray-300 focus:border-[#cd2424] focus:ring-2 focus:ring-[#cd2424]/50 p-3 outline-none transition-colors"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2" style={{ color: TEXT_COLOR }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name={FIELD_MESSAGE}
                  rows="5"
                  required
                  className="w-full bg-gray-100 text-gray-800 rounded border border-gray-300 focus:border-[#cd2424] focus:ring-2 focus:ring-[#cd2424]/50 p-3 outline-none transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full font-bold py-3 px-6 rounded-lg transition-colors"
                style={{ background: ACCENT_COLOR, color: "#fff" }}
              >
                {sending ? "Sending..." : "Send"}
              </button>
              {sent && (
                <p className="text-center mt-4" style={{ color: ACCENT_COLOR }}>
                  Message sent! Thank you.
                </p>
              )}
            </form>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: ACCENT_COLOR }}>Visit Us</h3>
              <p className="text-lg mb-2">
                Unit B & C, TopG 2 Building, Friendship Highway, Pampang, Angeles City, Pampanga
              </p>
              <p className="text-lg text-gray-600">Philippines</p>
              <h3 className="text-2xl font-bold mt-6 mb-4" style={{ color: ACCENT_COLOR }}>Hours</h3>
              <p className="text-lg">Tuesday - Sunday: 11am - 10pm</p>
              <p className="text-lg">Monday: Closed</p>
            </div>
            <div className="h-64 lg:h-80 w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123238.90185254999!2d120.55939109999998!3d15.1464952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3ce9aaccd9f%3A0x2ffd59ee507506b5!2sOsaka%20Japanese%20Restaurant!5e0!3m2!1sen!2sph!4v1755328567822!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{ background: "#fff", color: "#333333" }} className="py-3 border-t border-gray-200">
    <div className="container mx-auto px-6 lg:px-8 text-center">
      <p>
        © {new Date().getFullYear()} Osaka Japanese Restaurant. All Rights Reserved.
      </p>
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://www.facebook.com/oosakarestaurant"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#cd2424] transition-colors"
        >
          <FacebookIcon className="w-5 h-5 fill-current" />
        </a>
        <a
          href="https://www.instagram.com/oosaka.restaurant/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#cd2424] transition-colors"
        >
          <InstagramIcon className="w-5 h-5 fill-current" />
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "menu", "gallery", "contact"];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      let currentSection = "home";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollY >= elementTop - windowHeight / 3) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "menu", label: "Menu" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <div style={{ background: BG_LIGHT, minHeight: "100vh" }}>
      <SocialSidebar />

      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}>
        <nav className="container mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center space-x-3"
          >
            <img
              src={logoUrl}
              alt="Osaka Japanese Restaurant Logo"
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <span
              className="font-bold text-lg hidden sm:block"
              style={{ fontFamily: "'Noto Serif JP', serif", color: "black" }}
            >
              Osaka Japanese Restaurant
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                isActive={activeSection === item.id}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#cd2424] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="md:hidden" style={{ background: "rgba(255,255,255,0.95)" }}>
            <div className="flex flex-col items-center space-y-6 py-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  isActive={activeSection === item.id}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <HomeSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}