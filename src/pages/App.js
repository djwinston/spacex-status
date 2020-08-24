import React, { useState, useEffect } from "react";
import { companyInfo } from "../api/companyInfo";

function App() {
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    companyInfo()
      .then((res) => res.json())
      .then((data) => setCompanyData(data))
      .catch((error) => console.log(error));
  }, []);

  // console.log(`TCL>>>: App -> companyData>>>>`, companyData)
  return (
    <div className="App">
      <p>{companyData.summary}</p>
    </div>
  );
}

export default App;
