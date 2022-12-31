import React from "react"
import { useSelector, useDispatch } from "react-redux"
import UploadUsers from "./users/uploadVoters"
import AddPosition from "./positions/position"
import AddCandidate from "./candidates/candidate"
import { getOverview, getAccess } from "./shared/Backend"
import { setNewTab, setAccessToken } from "./Redux/appSlice"
import Overview from "./overview/overview"
import Delete from "./delete"

function Login() {
    const [accessCode, setAccessCode] = React.useState("")
    const handleChange = (e) => {
        setAccessCode(e.target.value)
    }
    const handleSubmit = () => {
        getAccess(accessCode)
    }
    return (
        <div className="h-full w-full bg-neutral-50 overflow-y-auto grid items-center justify-center">
            <div className="w-[90vw] xs:w-96 p-4 xs:bg-white xs:border border-gray-200 xs:rounded-lg xs:shadow-md sm:p-6 md:p-8">
                <div>
                    <img
                        className="h-16 w-16 mx-auto"
                        src="/TESA_logo_white.jpeg"
                    />
                </div>
                <label
                    htmlFor="accessCode"
                    className="block mb-2 text-sm font-medium text-light-text-primary"
                >
                    Enter Access Code
                </label>
                <input
                    type="text"
                    name="accessCode"
                    placeholder="Enter Code"
                    className="bg-gray-50 border border-light-separator text-light-text-primary text-base rounded-lg focus:ring-light-main-secondary focus:border-light-main-secondary block w-full p-2.5 placeholder:tracking-wider"
                    onChange={handleChange}
                    value={accessCode}
                />
                <button
                    onClick={handleSubmit}
                    className="text-light-text-primary text-base rounded-md py-2.5 px-5 border-2 border-light-separator w-full bg-light-secondary transform focus:scale-95 font-medium text-center "
                >
                    Submit
                </button>
            </div>
        </div>
    )
}
function MainPage() {
    const dispatch = useDispatch()

    const accessToken = useSelector((state) => state.app.accessToken)

    React.useEffect(() => {
        ;(async () => {
            const res = getOverview()
        })()
    }, [accessToken])

    const currentTab = useSelector((state) => state.app.currentTab)
    const handleClick = (e) => {
        dispatch(setNewTab(e.target.id))
    }

    const h3Style = "hover:bg-gray-100 text-xl cursor-pointer py-9"
    const selectedStyle = "bg-gray-300 hover:bg-gray-300"

    return (
        <div className="h-screen w-screen  grid grid-cols-12">
            <div className="col-span-3 h-screen overflow-y-auto  border-r-2 text-center">
                <h1 className="text-3xl text-sky-400 py-10 border-b-4">
                    Welcome Adedoyin
                </h1>
                <nav className="flex flex-col">
                    <h3
                        onClick={handleClick}
                        className={`${h3Style} ${
                            currentTab === "overview" && selectedStyle
                        }`}
                        id="overview"
                    >
                        Overview
                    </h3>
                    <h3
                        onClick={handleClick}
                        className={`${h3Style} ${
                            currentTab === "position" && selectedStyle
                        }`}
                        id="position"
                    >
                        Add Position
                    </h3>
                    <h3
                        onClick={handleClick}
                        className={`${h3Style} ${
                            currentTab === "candidate" && selectedStyle
                        }`}
                        id="candidate"
                    >
                        Add Candidate
                    </h3>
                    <h3
                        onClick={handleClick}
                        className={`${h3Style} ${
                            currentTab === "upload" && selectedStyle
                        }`}
                        id="upload"
                    >
                        Upload Voters
                    </h3>
                    <h3
                        onClick={handleClick}
                        className={`${h3Style} ${
                            currentTab === "delete" && selectedStyle
                        }`}
                        id="delete"
                    >
                        Delete Election
                    </h3>
                </nav>
            </div>
            <main className="col-span-9 h-screen overflow-y-auto text-center">
                {currentTab === "overview" && <Overview />}
                {currentTab === "position" && <AddPosition />}
                {currentTab === "candidate" && <AddCandidate />}
                {currentTab === "upload" && <UploadUsers />}
                {currentTab === "delete" && <Delete />}
            </main>
        </div>
    )
}
function App() {
    const dispatch = useDispatch()

    const token = localStorage.getItem("accessToken")
    if (token) {
        dispatch(setAccessToken(token))
    }
    const hasAccessToken = useSelector((state) => state.app.accessToken)

    return hasAccessToken ? <MainPage /> : <Login />
}
export default App
