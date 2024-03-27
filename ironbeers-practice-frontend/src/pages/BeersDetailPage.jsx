import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function BeersDetailPage() {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/beers/${id}`)
      .then((res) => {
        setBeer(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleBack = () => {
    navigate("/");
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5005/api/beers/${beer._id}`)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      {beer && (
        <>
          <img src={beer.image_url} width="150px" alt="" />
          <h1> {beer.name}</h1>
          <h2> ✨ {beer.tagline}</h2>
          <h3> Attentuation Level 🔅 {beer.attentuation_level}</h3>
          <h3> Contributed ＠ {beer.contributed_by}</h3>
          <h3> {beer.is_alcoholic ? "🤪 Alcoholic" : "😎 Non-Alcoholic"}</h3>
        </>
      )}
      <div style={{ display: "flex", gap: "2rem", justifyContent:"center", marginTop:"1rem" }}>
        <button onClick={handleBack}>Back</button>
        {beer && <Link to={`/${beer._id}/update`}><button>Update</button></Link> } 
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default BeersDetailPage;
