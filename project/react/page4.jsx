function App() {
  return (
    <div className="form-container">
      <h1>Product Order Form</h1>
      <p>Please fill all the required fields and select your desired product!</p>

      <form onSubmit={() => alert("Form submitted successfully!")}>
        <label>Full Name</label>
        <div className="row">
          <input placeholder="First" />
          <input placeholder="Last" />
        </div>

        <label>Email</label>
        <input placeholder="john@company.com" />

        <label>Phone Number</label>
        <input placeholder="+49 324 423 234" />

        <label>Shipping Address</label>
        <input placeholder="Address line 1" />
        <input placeholder="Address line 2" />

        <div className="row">
          <input placeholder="City" />
          <input placeholder="Region" />
        </div>

        <div className="row">
          <input placeholder="Postal / Zip Code" />
          <select>
            <option>Romania</option>
            <option>Germany</option>
            <option>France</option>
          </select>
        </div>

        <button>Next</button>
      </form>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
