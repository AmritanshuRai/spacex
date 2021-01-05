import Header from '../header/Header';
import './layoutStyle.css';
const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
