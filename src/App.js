import React from "react";
import Persons from "./compontents/Persons";
import data from "./data";

function App() {
  const [people, setPeople] = React.useState(data);
  return (
    <div className="App">
      <h1 className="header-text">{people.length} Birthdays Today</h1>
      <main className="main">
        <Persons
          name="Bertie Yates"
          age="29"
          image="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
        />
        <Persons
          name="Hester Hogan"
          age="32"
          image="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"
        />
        <Persons
          name="Larry Little"
          age="36"
          image="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
        />
        <Persons
          name="Sean Walsh"
          age="34"
          image="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
        />
        <Persons
          name="Lola Gardner"
          age="29"
          image="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
        />
        <button className="btn">Say Happy Birthdays to all your friends</button>
      </main>
    </div>
  );
}

export default App;
