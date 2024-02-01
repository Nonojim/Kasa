import React, {useState} from 'react';
import '../DropdownMenu/DropdownMenu.scss';

const DropdownMenu = ({title, content}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`dropdown-header-origin ${title}`}>
      <div className={`dropdown-container  ${isDropdownOpen ? 'open' : 'closed'}`}>
        <button className="link" onClick={toggleDropdown}>
          <span>{title}</span>
          <div className={`arrow ${isDropdownOpen ? 'open' : 'closed'} material-symbols-outlined`}>
            arrow_back_ios
          </div>
        </button>
        <div className="dropdown-menu">
          <p className={`dropdown-content`}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
