import React from "react"
import { clearDatabase } from "./shared/Backend"

function Delete() {
    const deleteWarning1 = () => {
        if (window.confirm("Are you sure you want to clear the database?")) {
            deleteWarning2()
        }
    }
    const deleteWarning2 = () => {
        if (
            window.confirm(
                "This is your last warning!!! You will clear the database, you idiot!!!"
            )
        ) {
            deleteAll()
        }
    }
    const deleteAll = () => {
        clearDatabase()
        window.location.reload()
    }

    return (
        <div className="flex flex-col items-center justify-center h-full gap-10 px-8">
            <p>
                Clicking this button will <b>CLEAR</b> the database and{" "}
                <b>DELETE</b> all the election data. Do not click unless you are
                absolutely sure!
            </p>
            <button
                className="border py-5 px-10 text-white bg-red-400 rounded-xl hover:bg-red-800 transform focus:scale-95"
                onClick={deleteWarning1}
            >
                DELETE
            </button>
        </div>
    )
}
export default Delete
