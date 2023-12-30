import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Pages/Shared/Nav/Nav";
import Banner from "../Pages/Home/Banner/Banner";
import SecondBanner from "../Pages/Shared/SecondBanner/SecondBanner";
import Footer from "../Pages/Shared/Footer/Footer";
import Nav2 from "../Pages/Shared/Nav/Nav2";


const Root = () => {
    const backgroundImageUrl = 'https://i.imgur.com/lLvJFih.png';

    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',

    };
    const location = useLocation()
    // const bgClass = location.pathname === "/" ? "bg-blue-100" : "bg-[#fff1ec]";
    return (
        <div
            // className={bgClass}
style={containerStyle}
        >
            <Nav2/>
            <Nav />
            {location.pathname === '/' ?
                <> <Banner />
                    <div className=" h-[140vh] w-full bg-no-repeat bg-opacity-60 bg-cover bg-fixed flex items-center justify-center " style={{ backgroundImage: 'url(https://i.imgur.com/rPBDuas.jpg)' }}>

                        <span className="flex flex-col items-center justify-center w-[70%] z-50">
                            <h2 className="text-white font-bold  text-5xl mb-2">Views trip latest shots</h2>
                            <p className="text-white">Mlor sit amet, consectetur adipiscing elit. Arcu at viverra eget porttitor condimentum nisl pool.</p>
                        </span>
                        <div className="bg-gray-700/40 z-10 overflow-hidden  h-[140vh] w-full absolute"></div>

                    </div>
                </> :
                <div className="h-[50vh] ">
                    <SecondBanner />
                </div>
            }
            
            <div className="max-w-6xl mx-auto ">
                <Outlet />
            </div>
            <div className="bg-gray-800">

            
            <Footer/>
            </div>
       </div>
    );
};

export default Root;