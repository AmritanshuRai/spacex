import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { AutoComplete, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../actions/homescreenActions';
import { fetchAllList } from '../../actions/allListActions';

import './headerStyle.css';

const Header = () => {
  const { allList } = useSelector((state) => state.allList);
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const history = useHistory();
  const { currentCategory = 'news' } = useSelector((state) => state.category);
  const populateAutoComplete = () => {
    const data = allList?.map((item) => {
      if (item.title) {
        return {
          id: item.id,
          value: item.title,
        };
      }
      return {
        id: item.id,
        value: item.name,
      };
    });
    setOptions(data);
  };
  function handleRadio(e) {
    dispatch(setCategory(e.target.value));
  }
  useEffect(() => {
    dispatch(fetchAllList(currentCategory));
  }, [currentCategory]);

  useEffect(() => {
    populateAutoComplete();
  }, [allList]);

  const onChange = (data) => {
    setValue(data);
  };

  const onSelect = (data, obj) => {
    history.push(`/${obj.id}`);
  };

  return (
    <section className='Header'>
      <div className='search'>
        <Radio.Group
          onChange={handleRadio}
          defaultValue={currentCategory || 'news'}
        >
          <Radio.Button value='satellites'>satellites</Radio.Button>
          <Radio.Button value='news'>news</Radio.Button>
        </Radio.Group>

        <AutoComplete
          value={value}
          options={options}
          style={{
            width: 200,
          }}
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
          onSelect={onSelect}
          onChange={onChange}
          placeholder={`search by ${currentCategory || 'news'}`}
        />
      </div>
    </section>
  );
};

export default Header;
