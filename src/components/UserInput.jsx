export default function UserInput({ invesInputData, onChangeInvestment }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={invesInputData.initialInvestment}
            required
            onChange={(event) =>
              onChangeInvestment(
                "initialInvestment",
                Number(event.target.value)
              )
            }
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            type="number"
            value={invesInputData.annualInvestment}
            required
            onChange={(event) =>
              onChangeInvestment("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={invesInputData.expectedReturn}
            required
            onChange={(event) =>
              onChangeInvestment("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual duration</label>
          <input
            type="number"
            value={invesInputData.duration}
            required
            onChange={(event) =>
              onChangeInvestment("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
