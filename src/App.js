import { useState } from "react"

import Section from "./components/Section"
import Statistics from "./components/Statistics"
import FeedbackOptions from "./components/FeedbackOptions"

import "./App.css"

export default function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const positivePercentage = Math.round((good / (good + neutral + bad)) * 100)
  const total = good + neutral + bad

  const onBtnCLick = (name) => () => {
    switch (name) {
      case "good":
        return setGood((prev) => prev + 1)
      case "bad":
        return setBad((prev) => prev + 1)
      case "neutral":
        return setNeutral((prev) => prev + 1)

      default:
        break
    }
  }

  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions onGood={onBtnCLick("good")} onNeutral={onBtnCLick("neutral")} onBad={onBtnCLick("bad")} />
      </Section>
      <Section title={"Statistics"}>
        {total > 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
        ) : (
          <h3>not given feedback</h3>
        )}
      </Section>
    </>
  )
}
