"use client"
import { studyCases } from "@/data/studyCases"

export default function StudyCaseStats() {
    return (
        <div className="flex space-x-6 text-center">
            <div className="bg-white/30 backdrop-blur-lg border border-gray-200/30 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600">{studyCases.length}</div>
                <div className="text-sm text-gray-600">Study Cases</div>
            </div>
            <div className="bg-white/30 backdrop-blur-lg border border-gray-200/30 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600">
                    {studyCases.reduce((sum, case_) => sum + case_.totalVotes, 0)}
                </div>
                <div className="text-sm text-gray-600">Total Votes</div>
            </div>

            {/* Under Construction */}
            {/* <div className="bg-white/30 backdrop-blur-lg border border-gray-200/30 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600">
                    {studyCases.reduce((sum, case_) => sum + case_.comments, 0)}
                </div>
                <div className="text-sm text-gray-600">Comments</div>
            </div> */}
            
        </div>
    )
}
