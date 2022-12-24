import React from "react"
import { deleteCandidate } from "../Backend"

function CandidateLayout({ candidate }) {
    const {
        candidate_department,
        candidate_level,
        candidate_name,
        picture,
        candidate_id,
    } = candidate
    const handleCandidateDelete = async () => {
        if (
            window.confirm(`Are you sure you want to delete ${candidate_name}?`)
        ) {
            const res = await deleteCandidate({ candidateId: candidate_id })
            if (res.status === 200) {
                window.location.reload()
            }
        }
    }
    return (
        <div
            className={`relative w-full max-w-sm  border border-gray-200 rounded-lg shadow-md`}
        >
            <div className="flex flex-col items-center pb-10 pt-8">
                <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg bg-white object-cover"
                    src={picture?.startsWith("http") ? picture : "/pfp.svg"}
                    alt="profile"
                />
                <h5 className="mb-1 text-xl font-medium text-light-text-primary">
                    {candidate_name || "No candidate name available"}
                </h5>
                <span className="text-sm text-light-text-muted">
                    {candidate_department}
                </span>
                <span className="text-sm text-light-text-muted">
                    {candidate_level + " "}level
                </span>
                <div className="mt-4">
                    <button
                        className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-400 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 tracking-widest`}
                        onClick={handleCandidateDelete}
                    >
                        DELETE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CandidateLayout
