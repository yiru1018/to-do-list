import AddForm from './AddForm';
import List from './List';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ListPage() {
    const style = {
        width: '300px',
    };
    let navigate = useNavigate();
    const [data, setData] = useState([]);

    return (
        <div style={style}>
            <AddForm add={setData} />
            <List listData={data} deleteData={setData} />
            <button
                onClick={() => {
                    navigate('/');
                }}
            >
                Home Page
            </button>
        </div>
    );
}

export default ListPage;
