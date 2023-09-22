import SingleTask from "./SingleTask";

const ManyTasks = ({ items, onDeleteMany, onToogleMany }) => {
  return (
    <>
      {items.map((item) => (
        <SingleTask
          item={item}
          key={item.id}
          onDelete={onDeleteMany}
          onToogle={onToogleMany}
        />
      ))}
    </>
  );
};

export default ManyTasks;
