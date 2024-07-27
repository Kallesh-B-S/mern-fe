import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useDispatch } from "react-redux";
// import { initialstateHeaderType, languageDropdownToggleReducer } from "../../redux/reducers/headerReducer";
import { toggleDropDownStatus } from "../../redux/actions/action";

function Header() {
    const data = useSelector((state: RootState) => state.languageDropdownToggleReducer)
    const dispatch = useDispatch();
    // console.log(data.languageDropdownToggleStatus);

    return (
        <>
            <div className="100vw flex justify-between p-1 px-5 bg-slate-400 select-none">
                <div className="text-2xl font-semibold hover:font-extrabold cursor-pointer">Super App</div>
                <div className="my-auto text-lg  border border-solid border-slate-600 w-[20%] text-center rounded-md">
                    <div className="relative cursor-pointer hover:text-blue-900 hover:font-extrabold"
                        onClick={() => {
                            // console.log(!data.languageDropdownToggleStatus);
                            dispatch(toggleDropDownStatus(!data.languageDropdownToggleStatus))
                        }}>Language</div>
                    <div className={`absolute w-[19%] bg-slate-300 top-10 ${data.languageDropdownToggleStatus ? 'block' : 'hidden'}`}>
                        <div>one</div>
                        <div>one</div>
                        <div>one</div>
                        <div>one</div>
                        <div>one</div>
                    </div>
                </div>
            </div>
            {/* <div>

            </div> */}
        </>
    )
}

export default Header;