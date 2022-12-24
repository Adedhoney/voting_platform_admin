import React from "react"
import { addPosition } from "../Backend"

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
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <label
                htmlFor="positionName"
                className={`${submitted && !positionName && "red"}`}
            >
                Position Name
            </label>
            <input
                onChange={handleChange}
                type="text"
                placeholder="Enter position name"
                value={positionName}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddPosition
