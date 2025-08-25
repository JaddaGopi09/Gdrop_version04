import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const catRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  // Close the categories dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (catRef.current && !catRef.current.contains(e.target as Node)) {
        setIsCategoriesOpen(false);
      }
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to check if route is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          🎉 Supporting local businesses across South Australia since 2023
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-full">
              <ShoppingCart className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">GDROP</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors font-medium ${
                isActive("/")
                  ? "text-green-600 font-bold"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors font-medium ${
                isActive("/about")
                  ? "text-green-600 font-bold"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              About
            </Link>

            {/* Categories with Chevron Toggle Submenu */}
            <div className="relative" ref={catRef}>
              <button
                type="button"
                onClick={() => setIsCategoriesOpen((o) => !o)}
                aria-haspopup="true"
                aria-expanded={isCategoriesOpen}
                className="inline-flex items-center gap-1 transition-colors font-medium text-gray-700 hover:text-green-600"
              >
                Categories
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isCategoriesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {isCategoriesOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg">
                  <ul className="py-2">
                    {[
                      { name: "Most Popular", href: "#most-popular" },
                      { name: "Dairy Products", href: "#dairy-products" },
                      { name: "Beverages", href: "#beverages" },
                      { name: "Restaurants", href: "#restaurants" },
                      { name: "Groceries", href: "#groceries" },
                      { name: "Fast Food", href: "#fast-food" },
                      { name: "Indian Groceries", href: "#indian-groceries" },
                      { name: "Desserts", href: "#desserts" },
                      { name: "Fresh Meat", href: "#fresh-meat" },
                    ].map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={() => setIsCategoriesOpen(false)}
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Vendors → React Router link */}
            <Link
              to="/vendors"
              className={`transition-colors font-medium ${
                isActive("/vendors")
                  ? "text-green-600 font-bold"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Vendors
            </Link>

            <Link
              to="/contact"
              className={`transition-colors font-medium ${
                isActive("/contact")
                  ? "text-green-600 font-bold"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className={`transition-colors font-medium ${
                isActive("/faq")
                  ? "text-green-600 font-bold"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* Partner Button */}
          <div className="hidden lg:block">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Partner With Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <div className="space-y-4 pt-4">
              <Link
                to="/"
                className={`block py-2 transition-colors ${
                  isActive("/")
                    ? "text-green-600 font-bold"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block py-2 transition-colors ${
                  isActive("/about")
                    ? "text-green-600 font-bold"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                About
              </Link>
              <Link
                to="/vendors"
                className={`block py-2 transition-colors ${
                  isActive("/vendors")
                    ? "text-green-600 font-bold"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                Vendors
              </Link>
              <Link
                to="/contact"
                className={`block py-2 transition-colors ${
                  isActive("/contact")
                    ? "text-green-600 font-bold"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className={`block py-2 transition-colors ${
                  isActive("/faq")
                    ? "text-green-600 font-bold"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                FAQ
              </Link>
              <button className="w-full bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors mt-4">
                Partner With Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
