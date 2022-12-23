import React from "react"
import { useSelector } from "react-redux"

function CandidateLayout() {}

function PositionLayout(position) {
    return (
        <div>
            <h2>{position.position_name}</h2>
        </div>
    )
}

function Overview() {
    let positions = useSelector((state) => state.position.positions)

    return <div></div>
}
