import React from "react";
import { deleteCandidate } from "../shared/Backend";

function CandidateLayout({ candidate }) {
  const {
    candidate_department,
    candidate_level,
    candidate_name,
    picture,
    candidate_id,
    votes,
  } = candidate;
  const handleCandidateDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${candidate_name}?`)) {
      const res = await deleteCandidate({ candidateId: candidate_id });
      if (res.status === 201) {
        window.location.reload();
      }
    }
  };
  return (
    <div
      className={`relative w-full max-w-sm md:border border-gray-200 rounded-lg md:shadow-md`}
    >
      <div className="flex flex-col items-center pt-8 pb-10">
        <img
          className="object-cover w-24 h-24 mb-3 bg-white rounded-full shadow-lg"
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
        <span className="text-light-text-muted">
          Votes: <span className="font-semibold">{votes}</span>
        </span>
        {/* <div className='mt-4'>
					<button
						className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-500 border border-gray-300 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-gray-200 tracking-widest`}
						onClick={handleCandidateDelete}
					>
						DELETE
					</button>
				</div> */}
      </div>
    </div>
  );
}

export default CandidateLayout;
