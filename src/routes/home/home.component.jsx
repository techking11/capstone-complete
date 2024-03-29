import Directory from "../../components/directory/directory.component";
import categories from "../../services/data";

const Home = () => {
    return <div>
        <Directory categories={categories} />;
    </div>
};

export default Home;