import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [attentuation, setAttentuation] = useState(0);
  const [contributed, setContributed] = useState("");
  const [alcoholic, setAlcoholic] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/beers/${id}`)
      .then((res) => {
        setName (res.data.name);
        setTagline (res.data.tagline);
        setAttentuation (res.data.attentuation_level);
        setContributed (res.data.contributed_by);
        setAlcoholic (res.data.is_alcoholic);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateBeer = {
      name: name,
      tagline: tagline,
      attentuation_level: attentuation,
      contributed_by: contributed,
      is_alcoholic: alcoholic,
    };

    console.log(updateBeer);

    axios
      .put(`http://localhost:5005/api/beers/${id}`, updateBeer)
      .then(() => {
        console.log("beer updated.");
        navigate(`/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          marginTop: "2rem",
        }}
      >
        <label htmlFor="">
          NAME <br />
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </label>
        <label htmlFor="">
          TAGLINE <br />
          <input
            type="text"
            onChange={(e) => {
              setTagline(e.target.value);
            }}
            value={tagline}
          />
        </label>
        <label htmlFor="">
          ATTENTUATION LEVEL <br />
          <input
            type="number"
            onChange={(e) => {
              setAttentuation(e.target.value);
            }}
            value={attentuation}
          />
        </label>
        <label htmlFor="">
          CONTRIBUTED BY <br />
          <input
            type="text"
            onChange={(e) => {
              setContributed(e.target.value);
            }}
            value={contributed}
          />
        </label>
        <label htmlFor="">
          ALCOHOLIC <br />
          <input
            type="checkbox"
            onChange={(e) => {
              setAlcoholic(e.target.checked);
            }}
            checked={alcoholic}
          />
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default UpdateBeerPage;
