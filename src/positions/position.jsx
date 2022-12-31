import React from "react"
import { addPosition } from "../shared/Backend"
import alert from "../shared/alert"

function AddPosition() {
    const [positionName, setPositionName] = React.useState("")
    const [submitted, setSubmitted] = React.useState(false)

    const handleChange = (e) => {
        setPositionName(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitted(true)
        if (!positionName) {
            return
        }
        const response = await addPosition(positionName)
        console.log(response)
        alert(response)
        if (response.status === 201) {
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }
    }

    return (
        <div className="flex items-center justify-center w-full h-full gap-4">
            <div className="flex flex-col items-center justify-center gap-4">
                <label
                    htmlFor="positionName"
                    className={`${
                        submitted && !positionName && "text-red-500"
                    }`}
                >
                    Position Name
                </label>
                <input
                    className="px-2.5 py-1.5 border w-72 rounded-md focus:outline-4"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter position name"
                    value={positionName}
                />
                <button
                    className="px-4 py-1 transform border rounded-md hover:bg-gray-300 focus:scale-95"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default AddPosition
