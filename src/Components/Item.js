import styled from 'styled-components';
import { db } from '../firebase-config';
import { deleteDoc, doc } from 'firebase/firestore';

const ListDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 45px;
`;

const ListBtn = styled.button`
    height: 20px;
    margin: 0px 10px;
`;
function Item({ task, reNew, id }) {
    const deleteTask = async (id) => {
        const taskDoc = doc(db, 'task', id);
        await deleteDoc(taskDoc);
        reNew();
    };
    return (
        <div>
            <ListDiv>
                <p>{task}</p>
                <ListBtn
                    onClick={() => {
                        deleteTask(id);
                    }}
                >
                    Delete
                </ListBtn>
            </ListDiv>
        </div>
    );
}

export default Item;
