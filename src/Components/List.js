import Item from './Item';

function List({ listData, reNew }) {
    return (
        <div>
            {listData.map((task) => {
                return (
                    <Item
                        key={task.id}
                        id={task.id}
                        task={task.todo}
                        reNew={reNew}
                    />
                );
            })}
        </div>
    );
}

export default List;
