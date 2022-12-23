import React from "react"
import excelModel from "./excelModel.png"
import { upload } from "../Backend"
import { useDispatch } from "react-redux"

function UploadUsers() {
    const [uploadFile, setUploadFile] = React.useState("")
    const [submitted, setSubmitted] = React.useState(false)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setUploadFile(event)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitted(true)

        if (uploadFile) {
            const formData = new FormData()
            formData.append("file", uploadFile.target.files[0])
            const response = await upload(formData)

            console.log(response)
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="file"
                        name="uploadFile"
                        id="uploadFile"
                        onChange={handleChange}
                    />
                    {submitted && !uploadFile && (
                        <div className="invalid-feedback">
                            Please select a file
                        </div>
                    )}
                    <br />
                    <button type="submit">Upload Voters</button>
                </form>
            </div>
            <p>
                Your file must be an excel file and it must follow the format in
                the image below.
            </p>
            <img src={excelModel} alt="Excel Model" />
        </div>
    )
}

export default UploadUsers
