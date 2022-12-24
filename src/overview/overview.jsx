import React from "react"
import { useSelector } from "react-redux"
import PositionLayout from "./positionCard"

function Overview() {
    let positions = useSelector((state) => state.position.positions)
    let candidates = useSelector((state) => state.candidate.candidates)
    let totalUsers = useSelector((state) => state.app.totalUsers)
    let usersVoted = useSelector((state) => state.app.usersVoted)

    const pStyle = "text-lg"

    let positionComponents = positions.map((position) => {
        return (
            <PositionLayout
                key={position.position_id}
                position={position}
                candidates={candidates}
            />
        )
    })

    return (
        <div className="">
            <p>Total number of voters in database: {totalUsers}</p>
            <p>Total number of users voted: {usersVoted} </p>
            <div className=" divide-y-4">{positionComponents}</div>
        </div>
    )
}

export default Overview
