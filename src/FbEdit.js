import { useState } from "react";

function FbEdit({ article, action }) {
  const [content, setContent] = useState(article.Body);
  return (
    <div>
      <textarea
        id="editTextInput"
        type="text"
        rows="15"
        value={content}
        placeholder="Type to edit review"
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