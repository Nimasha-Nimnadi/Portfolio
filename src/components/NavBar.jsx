import logo from '../assets/NW.png';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-12 w-12 object-contain" />
      </div>
      <div className="flex space-x-4 m8 flex items-center justify-center gap-4">
        <FaLinkedin className="text-white " />
        <FaGithub className="text-white" />
        <FaTwitter className="text-white" />
        <FaInstagram className="text-white" />
      </div>
    </nav>
  );
};
export default Navbar;