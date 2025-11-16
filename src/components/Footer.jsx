export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">Expelee</h2>
          <p className="mt-3 text-gray-400">
            Based in Dubai, Expelee delivers innovative digital solutions
            including Web3 services, App Integration, and Website Development.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Web3 Solutions</li>
            <li className="hover:text-white cursor-pointer">App Integration</li>
            <li className="hover:text-white cursor-pointer">
              Website Development
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2">
            <li>Email: info@expelee.com</li>
            <li>Location: Dubai, UAE</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Expelee. All rights reserved.
      </div>
    </footer>
  );
}
