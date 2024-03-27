import Category from "../category/category.componet";
import "./directory.style.scss";

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map(category =>
                <Category key={category.id} category={category} />)
            }
        </div>
    );
}

export default Directory;