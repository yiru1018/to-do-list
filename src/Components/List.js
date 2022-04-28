import Item from './Item';

function List({ listData, deleteData }) {
    return (
        <div>
            {listData.map((item) => {
                const { task, id } = item;
                return (
                    <Item
                        key={id}
                        id={id}
                        task={task}
                        deleteData={deleteData}
                    />
                );
            })}
        </div>
    );
}

export default List;
