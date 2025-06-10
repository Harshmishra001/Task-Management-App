import Navbar from "./Navbar";
import Footer from "./Footer";
import Middle from "./Middle";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden overflow-y-auto">
      <Navbar />
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-6">
        <Middle />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
