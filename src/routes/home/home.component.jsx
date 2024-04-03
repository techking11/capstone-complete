import Directory from "../../components/directory/directory.component";
import Categories from "../../services/categories.service";

const Home = () => {
    return <div>
        <Directory categories={Categories} />;
    </div>
};

export default Home;