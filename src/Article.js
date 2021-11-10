// import { doc, deleteDoc } from "@firebase/firestore";
// import { ref } from "./App";
// import { db } from "./firebaseConfig";
import { useState } from "react";
import { updateArticle } from "./articleService";
import FbEdit from "./FbEdit";

export default function Article({ article, removeArticle, updateArticle }) {
  const [editing, setEditing] = useState(false);

  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <div className="article-display">
          <h2>{article.Title}</h2>
          <p className="date">{`Written by: ${article.Author}`}</p>
          <p className="rating">{`Rating: ${article.Rating}`}</p>
          <p className="body">{article.Body}</p>
          <button onClick={() => removeArticle(article.id)}> Delete </button>
          <button onClick={() => setEditing(true)}> Edit </button>
          {editing === true && (
            <FbEdit article={article} action={updateArticle} />
          )}
        </div>
      )}
    </article>
  );
}
