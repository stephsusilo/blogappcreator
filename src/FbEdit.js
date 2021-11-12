import { useState } from "react";

function FbEdit({ article, action, setEditing }) {
  const [content, setContent] = useState(article.Body);

  return (
    <div>
      <textarea
        id="editTextInput"
        type="text"
        rows="10"
        value={content}
        placeholder="Type to edit review"
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={() => {
          setEditing(false);
          action(article.id, content);
        }}
      >
        Save
      </button>
    </div>
  );
}

export default FbEdit;
