import PropTypes from 'prop-types';

const Navigation = ({ menuItems, setShowMenu }) => (
  <div className="p-4 flex flex-col gap-3">
    {menuItems.map((item) => (
      <button
        key={item.id}
        onClick={() => setShowMenu(false)}
        className={`w-full py-3 px-4 rounded-md text-center ${
          item.primary
            ? 'bg-emerald-400 text-white hover:bg-emerald-500'
            : 'bg-blue-900 text-white hover:bg-blue-800'
        }`}
      >
        {item.text}
      </button>
    ))}
  </div>
);

Navigation.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      primary: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

export default Navigation;
