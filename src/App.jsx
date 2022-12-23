import React from "react"
import { useSelector, useDispatch } from "react-redux"
import UploadUsers from "./users/uploadVoters"
import AddPosition from "./positions/position"
import AddCandidate from "./candidates/candidate"
import { getOverview } from "./Backend"
import { setNewTab } from "./Redux/appSlice"
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
    return (
        <div>
            <h1>Welcome Adedoyin</h1>
            <nav className="flex">
                <h3 onClick={handleClick} id="overview">
                    Overview
                </h3>
                <h3 onClick={handleClick} id="candidate">
                    Add Candidate
                </h3>
                <h3 onClick={handleClick} id="position">
                    Add Position
                </h3>
                <h3 onClick={handleClick} id="upload">
                    Upload Voters
                </h3>
                <h3 onClick={handleClick} id="delete">
                    Delete Election
                </h3>
            </nav>
            <main>
                {currentTab === "overview" && <h3>Overview</h3>}
                {currentTab === "position" && <AddPosition />}
                {currentTab === "candidate" && <AddCandidate />}
                {currentTab === "upload" && <UploadUsers />}
                {currentTab === "delete" && <Delete />}
            </main>
        </div>
    )
}
export default App
