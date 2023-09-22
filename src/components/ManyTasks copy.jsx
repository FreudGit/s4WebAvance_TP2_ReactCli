import SingleTask from "./SingleTask"

const ManyTasks = ({items, onDeleteMany, onToogleMany}) => {
    console.log('itessssms', items)
    return (
        <>
            {items.map((item)=>(
                <SingleTask item={item} key={item.id}  onDelete={ onDeleteMany } onToogle={onToogleMany}/>
            ))}
        </>
    )
}

export default ManyTasks