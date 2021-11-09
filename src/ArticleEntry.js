import { useState } from "react";

export default function ArticleEntry({ setWriting, addArticle }) {
  //assign props to different states 
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  function submit(e) {
    setError(null);
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError("The title and body must be supplied");
    } else {
      addArticle({ title, body });
      setWriting(false);
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        {error && <p>{error}</p>}
        Title <input value={title} onChange={(e) => setTitle(e.target.value)} />
        Body{" "}
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
