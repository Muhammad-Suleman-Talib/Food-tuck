import { NextPage } from 'next';

const Footera: NextPage = () => {
  return (
    <div className="w-full bg-[#878484] text-[#FF9F0D] py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-base leading-relaxed">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.
          </p>
        </div>

        {/* Opening Hours Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Opening Hours</h2>
          <ul className="space-y-2 text-base">
            <li>Mon - Sat: 8:00 AM - 6:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Useful Links</h2>
          <ul className="space-y-2 text-base">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Partners</a></li>
            <li><a href="#" className="hover:underline">Team</a></li>
            <li><a href="#" className="hover:underline">Menu</a></li>
            <li><a href="#" className="hover:underline">Contacts</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Help?</h2>
          <ul className="space-y-2 text-base">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Reporting</a></li>
            <li><a href="#" className="hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:underline">Support Policy</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
          </ul>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg mb-4">Subscribe to our newsletter for the latest updates.</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 text-black rounded-l-lg"
          />
          <button className="bg-[#FF9F0D] text-white p-2 rounded-r-lg hover:bg-[#e6890a]">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-16 text-sm">
      <p>Copyright © 2022 by Muhammad Suleman . All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footera;
