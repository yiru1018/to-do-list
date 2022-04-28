import styled from 'styled-components';

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
function Item({ task, deleteData, id }) {
    function deleteItem() {
        deleteData(function (prev) {
            return prev.filter((item) => item.id !== id);
        });
    }
    return (
        <div>
            <ListDiv>
                <p>{task}</p>
                <ListBtn onClick={deleteItem}>Delete</ListBtn>
            </ListDiv>
        </div>
    );
}

export default Item;
