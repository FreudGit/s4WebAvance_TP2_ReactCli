import SingleTask from "./SingleTask"

const ManyTasks = ({tasks, onDeleteMany, onToogleMany}) => {
    return (
        <>
            {tasks.map((item)=>(
                <SingleTask item={item} key={item.id}  onDelete={ onDeleteMany } onToogle={onToogleMany}/>
            ))}
        </>
    )
}

export default ManyTasks