import { useState } from "react";

export default function ArticleEntry({ setWriting, addArticle }) {
  //assign props to different states
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  function submit(e) {
    setError(null);
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError("The title and body must be supplied");
    } else {
      addArticle({ title, body });
      // setWriting(false);
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        {error && <p>{error}</p>}
        Restaurant <input value={title} onChange={(e) => setTitle(e.target.value)} />
        Rating <input type="number" min = "0" max="5" value={rating} onChange={(e) => setRating(e.target.value)}/> 
        Review{" "}
        <textarea
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
