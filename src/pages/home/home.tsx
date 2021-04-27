import { Link } from "react-router-dom";

const Home = () => {
  return (
    <h1>
      Welcome to the home page <Link to="/contacts">Voir les contacts</Link>
    </h1>
  );
};

export default Home;
