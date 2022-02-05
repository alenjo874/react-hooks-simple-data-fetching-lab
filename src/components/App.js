import React, { useEffect, useState } from "react";

function App() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        return setDog(data.message), setLoading(true);
      });
  }, []);

  if (loading === false) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={dog} alt="A Random Dog" />
    </div>
  );
}

export default App;
