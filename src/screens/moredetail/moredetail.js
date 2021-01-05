import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './moreDetailsStyle.css';
const MoreDetail = ({ history, match }) => {
  const { currentCategory } = useSelector((state) => state.category);
  const { allList } = useSelector((state) => state.allList);

  return (
    <section className='MoreDetail'>
      <Link className='moredetail-link' to='/'>
        back
      </Link>
      {currentCategory === 'news' || !currentCategory
        ? newsDetails(allList, match.params.id)
        : satellitesDetails(allList, match.params.id)}
    </section>
  );
};

const newsDetails = (allListData, id) => {
  let data = {};

  if (!allListData) {
    data = getFromStorage();
  } else {
    data = allListData.find((item) => id === item.id);
    saveToStorage(data);
  }
  return (
    <div className='card'>
      <p>
        <span className='bold'>title : </span>
        <span>{data.title}</span>
      </p>
      <p>
        <span className='bold'>date : </span>
        <span>{data.event_date_utc}</span>
      </p>
      <p>
        <span className='bold'>details : </span>
        <span>{data.details}</span>
      </p>
      <a href={`${data.links.article}`}>read article</a>
    </div>
  );
};

const satellitesDetails = (allListData, id) => {
  let data = {};
  if (!allListData) {
    data = getFromStorage();
  } else {
    data = allListData.find((item) => id === item.id);
    saveToStorage(data);
  }

  return (
    <div className='card'>
      <p>
        <span className='bold'>name : </span>
        <span>{data.name}</span>
      </p>
      <p>
        <span className='bold'>type : </span>
        <span>{data.type}</span>
      </p>
      <p>
        <span className='bold'>customers : </span>
        <span>{data.customers?.map((customer) => customer)}</span>
      </p>
      <p>
        <span className='bold'>mass in kg : </span>
        <span>{data.mass_kg ? data.mass_kg : 'not disclosed'}</span>
      </p>
    </div>
  );
};

const saveToStorage = (data) => {
  localStorage.setItem('currentList', JSON.stringify(data));
};
const getFromStorage = () => {
  let retrievedObject = localStorage.getItem('currentList');
  return JSON.parse(retrievedObject);
};
export default MoreDetail;
