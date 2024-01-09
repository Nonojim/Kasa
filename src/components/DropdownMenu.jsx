import React, {useState} from 'react';
import '../utils/style/DropdownMenu.scss';

const DropdownMenu = ({title, content}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>{title}</span>
        <div className={`arrow ${isDropdownOpen ? 'open' : ''}`}>&#9650;</div>
      </div>
      {isDropdownOpen && <p className="dropdown-content">{content}</p>}
    </div>
  );
};

export default DropdownMenu;
