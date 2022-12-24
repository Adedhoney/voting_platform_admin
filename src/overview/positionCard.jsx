import React from "react"
import { deletePosition } from "../Backend"
import CandidateLayout from "./candidateCard"

function PositionLayout({ position, candidates }) {
    let positionCandidates = candidates.map((candidate) => {
        if (candidate.running_position === position.position_id) {
            return (
                <CandidateLayout
                    key={candidate.candidate_id}
                    candidate={candidate}
                />
            )
        }
    })

    const handlePositionDelete = async () => {
        if (
            window.confirm(
                `Are you sure you want to delete ${position.position_name}?`
            )
        ) {
            console.log(position)
            const res = await deletePosition({
                positionId: position.position_id,
            })
            if (res.status === 200) {
                window.location.reload()
            }
        }
    }

    return (
        <div className="flex flex-col my-10">
            <div className="relative">
                <h2 className="text-2xl my-5">{position.position_name}</h2>
                <button
                    className="absolute right-10 top-1/2 transform -translate-y-1/2"
                    onClick={handlePositionDelete}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 ">
                {positionCandidates}
            </div>
        </div>
    )
}

export default PositionLayout
