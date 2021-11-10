import { useState } from "react";

function FbEdit({ article, action }) {
  const [content, setContent] = useState(article.Body);
  return (
    <div>
      <input
        type="text"
        value={content}
        placeholder="type new article body here"
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={() => {
          action(article.id, content);
        }}
      >
        update
      </button>
    </div>
  );
}

export default FbEdit;
