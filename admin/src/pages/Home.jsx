import DashboardPage from "../components/DashboardPage.jsx";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <DashboardPage />
    </div>
  );
};

export default Home;
