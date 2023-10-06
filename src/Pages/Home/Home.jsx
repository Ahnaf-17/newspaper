import { useLoaderData } from "react-router-dom";
import Header from "../Shared_pages/Header/Header";
import LeftNav from "../Shared_pages/LeftNav/LeftNav";
import Navbar from "../Shared_pages/Navbar/Navbar";
import RightNav from "../Shared_pages/RightNav/RightNav";
import BreakingNews from "./BreakingNews";
import News from "./News";

const Home = () => {
    const news = useLoaderData()
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid md:grid-cols-4 grid-cols-1 gap-6 ">
                <div className="">
                    <LeftNav></LeftNav>
                </div>
                <div className="md:col-span-2 text-center ">
                    {
                        news.map(singleNews => <News key={singleNews.id} news={singleNews}></News>)
                    }
                </div>
                <div className=" ">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;