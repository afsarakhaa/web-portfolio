"use client"

import { motion } from "framer-motion"
import { FiUsers, FiHeart, FiTrendingUp } from "react-icons/fi"
import type { StudyCase } from "@/types"

interface StudyCaseCardProps {
  studyCase: StudyCase
  index: number
  votedCases: { [key: number]: number }
  onVote: (caseId: number, optionIndex: number) => void
}

export default function StudyCaseCard({ studyCase, index, votedCases, onVote }: StudyCaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{
        y: -10,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
      className="relative group perspective-1000"
    >
      <div className="bg-white/40 backdrop-blur-lg border border-gray-200/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform-gpu">
        {/* Trending Badge */}
        {studyCase.trending && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center animate-pulse">
              <FiTrendingUp className="mr-1" />
              Trending
            </div>
          </div>
        )}

        {/* Category */}
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">{studyCase.category}</div>
        </div>

        <div className="pt-16 px-8 pb-8">
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
            {studyCase.title}
          </h3>

          {/* Question */}
          <p className="text-gray-700 mb-6 text-lg leading-relaxed font-medium">{studyCase.question}</p>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {studyCase.options.map((option, optionIndex) => {
              const percentage = (option.votes / studyCase.totalVotes) * 100
              const isVoted = votedCases[studyCase.id] !== undefined
              const isSelected = votedCases[studyCase.id] === optionIndex

              return (
                <motion.button
                  key={optionIndex}
                  onClick={() => onVote(studyCase.id, optionIndex)}
                  disabled={isVoted}
                  whileHover={!isVoted ? { scale: 1.02 } : {}}
                  whileTap={!isVoted ? { scale: 0.98 } : {}}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${isSelected
                    ? "border-green-500 bg-green-100"
                    : isVoted
                      ? "border-gray-300 bg-gray-50"
                      : "border-gray-200 bg-white hover:border-green-300 hover:bg-green-50"
                    }`}
                >
                  {/* Progress Bar */}
                  {isVoted && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`absolute left-0 top-0 h-full rounded-xl ${isSelected ? "bg-green-200" : "bg-gray-100"
                        }`}
                    />
                  )}

                  <div className="relative flex items-center justify-between">
                    <span className="font-semibold text-gray-800 flex items-center">
                      <span className="text-2xl mr-3">{option.emoji}</span>
                      {option.text}
                    </span>
                    {isVoted && (
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-gray-700">{option.votes}</span>
                        <span className="text-sm text-gray-600">({percentage.toFixed(1)}%)</span>
                      </div>
                    )}
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <FiUsers className="mr-1" />
                <span className="text-sm font-medium">{studyCase.totalVotes} votes</span>
              </div>
              {/* Under Construction */}
              {/* <div className="flex items-center">
                <FiMessageCircle className="mr-1" />
                <span className="text-sm font-medium">{studyCase.comments} comments</span>
              </div> */}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-red-500 hover:text-red-600 transition-colors duration-300"
            >
              <FiHeart className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce" />
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce delay-100" />
      </div>
    </motion.div>
  )
}
