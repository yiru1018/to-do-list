import styled from 'styled-components';
import { useState } from 'react';
import { v4 } from 'uuid';

const AddFormDiv = styled.div`
    padding: 40px;
`;

const AddBtn = styled.button`
    margin-left: 5px;
`;

function AddForm({ add }) {
    const [task, setTask] = useState('');
    function taskChange(e) {
        setTask(e.target.value);
    }
    function addTask() {
        add(function (prevData) {
            return [...prevData, { task, id: v4() }];
        });
        setTask('');
    }

    return (
        <AddFormDiv>
            <input type="text" value={task} onChange={taskChange}></input>
            <AddBtn onClick={addTask}>Add</AddBtn>
        </AddFormDiv>
    );
}

export default AddForm;
