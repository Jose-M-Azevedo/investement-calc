import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [investmentInputData, setInvestmentInputData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = investmentInputData.duration >= 1;

  function handleInvestmentDataChange(inputIdentifier, newValue) {
    setInvestmentInputData((prevData) => {
      return { ...prevData, [inputIdentifier]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput
        invesInputData={investmentInputData}
        onChangeInvestment={handleInvestmentDataChange}
      />
      {!inputIsValid && (
        <p className="center">Please enter a duration grater than zero.</p>
      )}
      {inputIsValid && <Results invesInputData={investmentInputData} />}
    </>
  );
}

export default App;
