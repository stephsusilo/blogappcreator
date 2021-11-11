import { useState } from "react";

function FbEdit({ article, action }) {
  const [content, setContent] = useState(article.Body);
  return (
    <div>
      <input
        type="text"
        value={content}
        placeholder="Type new review here"
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={() => {
          action(article.id, content);
        }}
      >
        Save
      </button>
    </div>
  );
}

export default FbEdit;
