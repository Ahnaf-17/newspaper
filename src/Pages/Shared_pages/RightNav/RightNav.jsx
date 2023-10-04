import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

import qZ1 from '../../../assets/qZone1.png';
import qZ2 from '../../../assets/qZone2.png';
import qZ3 from '../../../assets/qZone3.png';

const RightNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-4'>
                <h2 className="text-2xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                   Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className='p-4  mb-4'>
                <h2 className="text-2xl">Find Us</h2>
                 <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
                    <FaFacebook className='mr-4'></FaFacebook>
                    Facebook
                 </a>
                 <a className='p-4 flex text-lg items-center border-x ' href="">
                    <FaTwitter className='mr-4'></FaTwitter>
                    Twitter
                 </a>
                 <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
                    <FaInstagram className='mr-4'></FaInstagram>
                    Instagram
                 </a>
            </div>
            <div className='p-4 space-y-3 mb-4'>
                <h2 className="text-2xl">Q zone</h2>
                <img src={qZ1} alt="" />
                <img src={qZ2} alt="" />
                <img src={qZ3} alt="" />
            </div>
        </div>
    );
};

export default RightNav;