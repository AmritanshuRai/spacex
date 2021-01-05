import Header from '../../components/header/Header';
import AllList from '../../components/alllist/AllList';

import './homescreen.css';
const Homescreen = ({ history }) => {
  return (
    <section className='homescreen'>
      <Header />
      <AllList />
    </section>
  );
};

export default Homescreen;
