import { Link } from "react-router-dom";

function Services() {
    return(
        <div className="flex space-x-10 text-center items-center justify-center mt-52">
            <div className="w-2/12 bg-white opacity-70 p-10 rounded-[10px]">
                <h1 className="text-2xl font-bold">Current weather</h1>
                <p>Get the realtime current weather.</p>
                <button className="outline outline-black rounded-md p-5 m-5">
                    <Link to="/current-weather">Current weather</Link>
                </button>
            </div>
            <div className="w-2/12 bg-white opacity-70 p-10 rounded-[10px]">
                <h1 className="text-2xl font-bold">Air quality</h1>
                <p>Get the realtime air quality.</p>
                <button className="outline outline-black rounded-md p-5 m-5">
                    <Link to="/air-quality">Air quality</Link>
                </button>
            </div>
            <div className="w-2/12 bg-white opacity-70 p-10 rounded-[10px]">
                <h1 className="text-2xl font-bold">Disater detection</h1>
                <p>Get the realtime disaster data.</p>
                <button className="outline outline-black rounded-md p-5 m-5">
                    <Link to="/disater-detection">Disater detection</Link>
                </button>
            </div>
        </div>
    );
}

export default Services;