import React from "react"
import { clearDatabase } from "./Backend"

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
    }

    return (
        <div>
            <p>
                Clicking the button will clear the databse and all the election
                date. Do not click unless you are absolutely sure!
            </p>
            <button onClick={deleteWarning1}>DELETE</button>
        </div>
    )
}
export default Delete
