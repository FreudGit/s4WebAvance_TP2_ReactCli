import SingleTask from "./SingleTask";
import { FaPlus} from "react-icons/fa";


const ManyTasks = ({
  items,
  onDeleteMany,
  onViewMany,
  onAdd,
}) => {
  return (
    <div className="mt-4 ">
      <div className="row justify-content-end">
        <div className="col-auto px-4">
          {/* Bouton "Ajouter" en haut à droite de la liste des produits */}
          <button className="btn btn-primary float-end " onClick={onAdd}>
          <FaPlus /> Ajouter
          </button>
        </div>
      </div>

      <div className="row px-3 mt-1">
        {items.map((item) => (
          <SingleTask
            key={item.id}
            item={item}
            onDelete={onDeleteMany}
            onView={onViewMany}
          />
        ))}
      </div>
    </div>
  );
};

export default ManyTasks;
