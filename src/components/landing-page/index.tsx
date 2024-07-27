import { Link } from "react-router-dom";
import Header from "../headers/Header";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CustomHourlyGreetings } from "./landingPageTypes";

const LandingPage = () => {
    const [greetings, setGreetings] = useState<number>(1);
    const { t } = useTranslation();
    // const [greetings, setGreetings] = useState(new Date().getHours());
    // useEffect(() => {
    //     setInterval(() => {
    //         setGreetings(new Date().getHours())
    //     }, 1000);
    // });

    // useEffect(() => {
    //     let flag;
    //     if (flag) {
    //         clearInterval(flag);
    //     }
    //     flag = setInterval(() => {
    //         setGreetings(Math.floor(Math.random() * 24) + 1)
    //     }, 5000);
    // });

    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //         setGreetings(Math.floor(Math.random() * 24) + 1)
    //         console.log(greetings);
    //     }, 2000);
    //     return () => {
    //         clearTimeout(timeoutId);
    //     };
    // });

    return (
        <>
            <Header />
            <div className="bg-slate-600 h-[40vh] flex items-center justify-center font-mono text-4xl ">{t(CustomHourlyGreetings.hello)}, &nbsp;
                {greetings < 12 ? t(CustomHourlyGreetings.GoodMorning) : greetings >= 12 && greetings < 16 ? t(CustomHourlyGreetings.GoodAfternoon) :
                    greetings >= 16 && greetings < 19 ? t(CustomHourlyGreetings.GoodEvening) : t(CustomHourlyGreetings.GoodNight)} {t(CustomHourlyGreetings.welcome)}.
            </div>

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
                <h1>Super App</h1>
            </div>
        </>

    )
}

export default LandingPage;