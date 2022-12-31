import React from "react"
import { clearDatabase } from "./shared/Backend"
import Swal from "sweetalert2"

function Delete() {
    const deleteWarning1 = async () => {
        let cont = await Swal.fire({
            title: "Warning!",
            text: "Are you sure you want to clear the database",
            icon: "warning",
            confirmButtonText: "Continue",
            showCancelButton: true,
        })
        if (cont.isConfirmed) {
            deleteWarning2()
        }
    }
    const deleteWarning2 = async () => {
        let cont = await Swal.fire({
            title: "Warning!",
            text: "This is your last warning!!! You will clear the database, you idiot!!!",
            icon: "warning",
            confirmButtonText: "Continue",
            showCancelButton: true,
        })
        if (cont.isConfirmed) {
            deleteAll()
        }
    }
    const deleteAll = () => {
        clearDatabase()
        window.location.reload()
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-10 px-8">
            <p>
                Clicking this button will <b>CLEAR</b> the database and{" "}
                <b>DELETE</b> all the election data. Do not click unless you are
                absolutely sure!
            </p>
            <button
                className="px-10 py-5 text-white transform bg-red-500 border rounded-xl hover:bg-red-800 focus:scale-95"
                onClick={deleteWarning1}
            >
                DELETE
            </button>
        </div>
    )
}
export default Delete
