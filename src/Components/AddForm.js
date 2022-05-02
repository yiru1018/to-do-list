import styled from 'styled-components';
import { useState } from 'react';
import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const AddFormDiv = styled.div`
    padding: 40px;
`;

const AddBtn = styled.button`
    margin-left: 5px;
`;

function AddForm({ reNew }) {
    const [newTask, setNewTask] = useState('');
    const tasksCollectionRef = collection(db, 'task');

    const createTask = async () => {
        await addDoc(tasksCollectionRef, {
            todo: newTask,
        });
        reNew();
        setNewTask('');
    };

    return (
        <AddFormDiv>
            <input
                type="text"
                value={newTask}
                onChange={(event) => {
                    setNewTask(event.target.value);
                }}
            ></input>
            <AddBtn onClick={createTask}>Add</AddBtn>
        </AddFormDiv>
    );
}

export default AddForm;
