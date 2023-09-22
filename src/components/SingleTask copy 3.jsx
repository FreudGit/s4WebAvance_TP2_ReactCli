
import { FaTimes } from 'react-icons/fa'
const SingleTask = ({item, onDelete, onToogle}) => {
    return(
        <div className={`item ${item.nom ? 'reminder' : ''}`} onDoubleClick={ () => onToogle(item.id)}>
            <h3>{item.text}
                <FaTimes
                style={{ color: 'red'}}
                onClick = { () => onDelete(item.id) }
                />
            </h3>
            <p>{item.day}</p>
        </div>
    )
}

export default SingleTask