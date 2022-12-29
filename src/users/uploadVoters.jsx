import React from "react"
import excelModel from "./excelModel.png"
import { upload } from "../shared/Backend"
import alert from "../shared/alert"
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

            alert(response)
            if (response.status === 201) {
                await setTimeout(() => {}, 1000)
                window.location.reload()
            }
        }
    }

    return (
        <div className="flex items-center justify-center gap-4 h-full">
            <div className="flex flex-col items-center justify-center gap-7">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center justify-center gap-4"
                >
                    <input
                        className="px-2.5 py-1.5 border w-72 rounded-md focus:outline-4"
                        type="file"
                        name="uploadFile"
                        id="uploadFile"
                        onChange={handleChange}
                    />
                    {submitted && !uploadFile && (
                        <div className="text-red-500">Please select a file</div>
                    )}
                    <button
                        type="submit"
                        className="border py-1 px-4 rounded-md hover:bg-gray-300 transform focus:scale-95"
                    >
                        Upload Voters
                    </button>
                </form>
                <div>
                    <p>
                        Your file must be an excel file and it must follow the
                        format in the image below.
                    </p>
                    <img src={excelModel} alt="Excel Model" />
                </div>
            </div>
        </div>
    )
}

export default UploadUsers
