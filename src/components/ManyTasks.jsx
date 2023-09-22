import SingleTask from "./SingleTask";

const ManyTasks = ({ items, onDeleteMany, onToogleMany, onEditMany }) => {
  return (
    <>
      {items.map((item) => (
        <SingleTask
          item={item}
          key={item.id}
          onDelete={onDeleteMany}
          onToogle={onToogleMany}
          onEdit={onEditMany}

        />
      ))}
    </>
  );
};

export default ManyTasks;
