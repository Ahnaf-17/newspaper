import Header from "../Shared_pages/Header/Header";
import LeftNav from "../Shared_pages/LeftNav/LeftNav";
import Navbar from "../Shared_pages/Navbar/Navbar";
import RightNav from "../Shared_pages/RightNav/RightNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid md:grid-cols-4 grid-cols-1 gap-6 ">
                <div className="text-center border">
                    <LeftNav></LeftNav>
                </div>
                <div className="md:col-span-2 text-center border">
                    <h2>Hot news</h2>
                </div>
                <div className="text-center border">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;