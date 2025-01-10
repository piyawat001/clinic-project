import PropTypes from 'prop-types';
import { Menu, Facebook, MessageCircle, X } from 'lucide-react';

const Header = ({ showMenu, setShowMenu }) => (
  <div className="bg-white p-4 border-b">
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Facebook className="w-6 h-6 text-blue-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <MessageCircle className="w-6 h-6 text-green-500" />
        </button>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      <div className="flex items-center gap-2">
        <img
          src="/api/placeholder/32/32"
          alt="Clinic Logo"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  </div>
);

Header.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

export default Header;
