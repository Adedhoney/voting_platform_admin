import React from "react"
import { useSelector } from "react-redux"
import { addCandidate } from "../Backend"

function AddCandidate() {
    const [candidateInfo, setCandidateInfo] = React.useState({
        candidateMatric: "",
        candidateName: "",
        candidateDepartment: "",
        candidateLevel: "",
        runningPosition: "",
        picture: "",
    })

    const [submitted, setSubmitted] = React.useState(false)
    const positions = useSelector((state) => state.position.positions)

    let selectPositionOptions = positions.map((position) => {
        return (
            <option key={position.position_id} value={position.position_id}>
                {position.position_name}
            </option>
        )
    })

    const handleChange = (e) => {
        setCandidateInfo((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitted(true)

        for (let i in candidateInfo) {
            if (!candidateInfo[i]) {
                return
            }
        }

        const response = await addCandidate(candidateInfo)
        console.log(response)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label
                    htmlFor="candidateMatric"
                    className={`${
                        submitted && !candidateInfo.candidateMatric && "red"
                    }`}
                >
                    Matric Number
                </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="candidateMatric"
                    placeholder="Enter matric number"
                    value={candidateInfo.candidateMatric}
                />
                <label
                    htmlFor="candidateName"
                    className={`${
                        submitted && !candidateInfo.candidateName && "red"
                    }`}
                >
                    Name
                </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="candidateName"
                    placeholder="Enter candidate name"
                    value={candidateInfo.candidateName}
                />
                <label
                    htmlFor="candidateDepartment"
                    className={`${
                        submitted && !candidateInfo.candidateDepartment && "red"
                    }`}
                >
                    Department
                </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="candidateDepartment"
                    placeholder="Enter department"
                    value={candidateInfo.candidateDepartment}
                />
                <label
                    htmlFor="candidateLevel"
                    className={`${
                        submitted && !candidateInfo.candidateLevel && "red"
                    }`}
                >
                    Level
                </label>
                <select
                    onChange={handleChange}
                    type="text"
                    name="candidateLevel"
                    value={candidateInfo.candidateLevel}
                >
                    <option></option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="400">400</option>
                    <option value="500">500</option>
                </select>
                <label
                    htmlFor="runningPosition"
                    className={`${
                        submitted && !candidateInfo.runningPosition && "red"
                    }`}
                >
                    Select Position
                </label>
                <select
                    onChange={handleChange}
                    type="text"
                    name="runningPosition"
                    placeholder="Enter matric number"
                    value={candidateInfo.runningPosition}
                >
                    <option></option>
                    {selectPositionOptions}
                </select>
                <label
                    htmlFor="picture"
                    className={`${
                        submitted && !candidateInfo.picture && "red"
                    }`}
                >
                    Display picture
                </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="picture"
                    placeholder="Enter picture link"
                    value={candidateInfo.picture}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddCandidate
