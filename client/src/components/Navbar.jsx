import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft } from 'react-icons/fa';
import { Logo, LogoutContainer, ThemeToggle } from '../components';
import { useDashboardContext } from '../pages/DashboardLayout';

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className='logo-text'>dashboard</h4>
        </div>
        <div>
          <div className='btn-container'>
            <ThemeToggle />
            <LogoutContainer />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
