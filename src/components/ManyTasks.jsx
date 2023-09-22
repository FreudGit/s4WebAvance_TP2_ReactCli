import SingleTask from "./SingleTask";

const ManyTasks = ({ items, onDeleteMany, onToogleMany, onViewMany }) => {
  return (
    <>
      {items.map((item) => (
        <SingleTask
          item={item}
          key={item.id}
          onDelete={onDeleteMany}
          onToogle={onToogleMany}
          onView={onViewMany}
        />
      ))}
    </>
  );
};

export default ManyTasks;
