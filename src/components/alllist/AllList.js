import { Link } from 'react-router-dom';
import { List } from 'antd';
import { useSelector } from 'react-redux';
import './allListStyle.css';

const AllList = () => {
  const { allList, loading } = useSelector((state) => state.allList);
  return <section className='List'>{renderList(allList, loading)}</section>;
};

const renderList = (data, loading = true) => (
  <List
    loading={loading}
    size='large'
    pagination={{
      pageSize: 5,
      showSizeChanger: false,
    }}
    bordered
    dataSource={data}
    renderItem={(item) => (
      <List.Item style={{ display: 'flex' }} key={item.id}>
        {item.title ? item.title : item.name}
        <Link style={{ cursor: 'pointer' }} to={`/${item.id}`}>
          more detail
        </Link>
      </List.Item>
    )}
  />
);

export default AllList;
