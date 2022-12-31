import React from "react"
import { useSelector } from "react-redux"
import { addCandidate } from "../shared/Backend"
import alert from "../shared/alert"

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
        alert(response)
        if (response.status === 201) {
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }
        console.log(response)
    }
    const inputStyle = "px-2.5 py-1.5 border w-72 rounded-md focus:outline-4"
    const innerDivStyle = "flex flex-col items-center justify-center gap-2"

    return (
        <div className="flex items-center justify-center gap-4 h-full">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center gap-6"
            >
                <div className={innerDivStyle}>
                    <label
                        htmlFor="candidateMatric"
                        className={`${
                            submitted &&
                            !candidateInfo.candidateMatric &&
                            "text-red-500"
                        }`}
                    >
                        Matric Number
                    </label>
                    <input
                        className={inputStyle}
                        onChange={handleChange}
                        type="text"
                        name="candidateMatric"
                        placeholder="Enter matric number"
                        value={candidateInfo.candidateMatric}
                    />
                </div>

                <div className={innerDivStyle}>
                    <label
                        htmlFor="candidateName"
                        className={`${
                            submitted &&
                            !candidateInfo.candidateName &&
                            "text-red-500"
                        }`}
                    >
                        Name
                    </label>
                    <input
                        className={inputStyle}
                        onChange={handleChange}
                        type="text"
                        name="candidateName"
                        placeholder="Enter candidate name"
                        value={candidateInfo.candidateName}
                    />
                </div>

                <div className={innerDivStyle}>
                    <label
                        htmlFor="candidateDepartment"
                        className={`${
                            submitted &&
                            !candidateInfo.candidateDepartment &&
                            "text-red-500"
                        }`}
                    >
                        Department
                    </label>
                    <input
                        className={inputStyle}
                        onChange={handleChange}
                        type="text"
                        name="candidateDepartment"
                        placeholder="Enter department"
                        value={candidateInfo.candidateDepartment}
                    />
                </div>

                <div className={innerDivStyle}>
                    <label
                        htmlFor="candidateLevel"
                        className={`${
                            submitted &&
                            !candidateInfo.candidateLevel &&
                            "text-red-500"
                        }`}
                    >
                        Level
                    </label>
                    <select
                        className={inputStyle}
                        onChange={handleChange}
                        type="text"
                        name="candidateLevel"
                        value={candidateInfo.candidateLevel}
                    >
                        <option></option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                    </select>
                </div>

                <div className={innerDivStyle}>
                    <label
                        htmlFor="runningPosition"
                        className={`${
                            submitted &&
                            !candidateInfo.runningPosition &&
                            "text-red-500"
                        }`}
                    >
                        Select Position
                    </label>
                    <select
                        className={inputStyle}
                        onChange={handleChange}
                        type="text"
                        name="runningPosition"
                        placeholder="Enter matric number"
                        value={candidateInfo.runningPosition}
                    >
                        <option></option>
                        {selectPositionOptions}
                    </select>
                </div>

                <div className={innerDivStyle}>
                    <label
                        htmlFor="picture"
                        className={`${
                            submitted &&
                            !candidateInfo.picture &&
                            "text-red-500"
                        }`}
                    >
                        Display picture
                    </label>
                    <input
                        className={inputStyle}
                        onChange={handleChange}
                        type="text"
                        name="picture"
                        placeholder="Enter picture link"
                        value={candidateInfo.picture}
                    />
                </div>

                <button
                    type="submit"
                    className="border py-1 px-4 rounded-md hover:bg-gray-300 transform focus:scale-95"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddCandidate
