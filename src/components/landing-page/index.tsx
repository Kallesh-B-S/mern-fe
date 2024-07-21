import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <>

            <div className="w-[100vw] landinglass flex items-center justify-center bg-slate-700">
                <div className="flex gap-5 p-5 box-border min-w-1 select-none">
                    <div className="max-w-[4rem] p-2 box-border border border-solid border-green-500 text-green-500 font-bold active:text-black active:bg-green-500 ">
                        <Link to={"/mern-fe/login"} className="" >Login</Link>
                    </div>
                    <div className="max-w-[5rem] p-2 box-border border border-solid border-yellow-500 text-yellow-500 font-bold active:text-black active:bg-yellow-500">
                        <Link to={"/mern-fe/register"} className="" >Register</Link>
                    </div>
                </div>
            </div>
            <div className="text-center p-1 bg-slate-500">
                <h1>Welcome to Super App</h1>
            </div>
        </>

    )
}

export default LandingPage;