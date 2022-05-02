import AddForm from './AddForm';
import List from './List';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const style = {
    width: '300px',
};

function ListPage() {
    const [tasks, setTasks] = useState([]);
    const tasksCollectionRef = collection(db, 'task');

    const getTask = async () => {
        const data = await getDocs(tasksCollectionRef);
        setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        getTask();
    }, []);

    let navigate = useNavigate();

    return (
        <div style={style}>
            <AddForm reNew={getTask} />
            <List listData={tasks} reNew={getTask} />
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
