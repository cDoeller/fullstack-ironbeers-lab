import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RandomBeer() {
  const [randbeer, setRandbeer] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/beers/random`)
      .then((res) => {
        setRandbeer(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {randbeer && (
        <div style={{ marginTop: "2rem" }}>
          <img src={randbeer.image_url} width="150px" alt="" />
          <h1> {randbeer.name}</h1>
          <h2> ✨ {randbeer.tagline}</h2>
          <h3> Attentuation Level 🔅 {randbeer.attentuation_level}</h3>
          <h3> Contributed ＠ {randbeer.contributed_by}</h3>
          <h3>{randbeer.is_alcoholic ? "🤪 Alcoholic" : "😎 Non-Alcoholic"}</h3>
        </div>
      )}
      <button onClick={()=>{navigate("/")}}>BACK</button>
    </div>
  );
}

export default RandomBeer;
