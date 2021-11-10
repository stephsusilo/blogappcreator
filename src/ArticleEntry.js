import { useState } from "react";

export default function ArticleEntry({ addArticle }) {
  //assign props to different states
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  function submit(e) {
    setError(null);
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError("The restaurant name, rating, and review must be supplied");
    } else {
      addArticle({ title, rating, body });
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        {error && <p>{error}</p>}
        Restaurant <input value={title} onChange={(e) => setTitle(e.target.value)} />
        Rating <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
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