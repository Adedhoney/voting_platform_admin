import React from "react"
import { useSelector, useDispatch } from "react-redux"
import UploadUsers from "./users/uploadVoters"
import AddPosition from "./positions/position"
import AddCandidate from "./candidates/candidate"
import { getOverview } from "./Backend"
import { setNewTab } from "./Redux/appSlice"
import Overview from "./overview/overview"
import Delete from "./delete"

function App() {
    const dispatch = useDispatch()

    React.useEffect(() => {
        ;(async () => {
            const res = await getOverview()
        })()
    }, [])

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
                <div className="mt-10"></div>
                {currentTab === "overview" && <Overview />}
                {currentTab === "position" && <AddPosition />}
                {currentTab === "candidate" && <AddCandidate />}
                {currentTab === "upload" && <UploadUsers />}
                {currentTab === "delete" && <Delete />}
            </main>
        </div>
    )
}
export default App
