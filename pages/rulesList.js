import React, { useState } from "react";
import RuleRow from "./rulesRow";

const rulesList = [
  {
    id: 1,
    instruction: "1 = 100 points",
  },
  {
    id: 2,
    instruction: "5 = 50 points",
  },
  {
    id: 3,
    instruction: "Three 1's = 1,000 points",
  },
  {
    id: 4,
    instruction: "Three 2's = 200 points",
  },
  {
    id: 5,
    instruction: "Three 3's = 300 points",
  },
  {
    id: 6,
    instruction: "Three 4's = 400 points",
  },
  {
    id: 7,
    instruction: "Three 5's = 500 points",
  },
  {
    id: 8,
    instruction: "Three 6's = 600 points",
  },
  {
    id: 9,
    instruction: "3 Pairs = 1500 points (including 4-of-a-kind and a pair)",
  },
  {
    id: 10,
    instruction: "1-2-3-4-5-6 = 3000 points",
  },
];

const RulesList = () => {
  const [rules, setRules] = useState(rulesList);

  const addRule = () => {
    setRules([
      ...rules,
      {
        id: Math.random(),
        instruction: "New rule added yay!",
      },
    ]);
  };

  return (
    <>
      <div className="row mb-2 Text-center">
        <h5 className="themeFontColor">set of instructions</h5>
      </div>
      <table
        className="table"
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <tbody className="themeFontColor">
          {rules.map((r) => (
            <RuleRow key={r.id} rules={r} />
          ))}
        </tbody>
      </table>
      <button onClick={addRule}>Add new rule?</button>
    </>
  );
};

export default RulesList;
