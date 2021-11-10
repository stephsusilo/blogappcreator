// import { doc, deleteDoc } from "@firebase/firestore";
// import { ref } from "./App";
// import { db } from "./firebaseConfig";

export default function Article({ article, removeArticle }) {
  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <div className="article-display">
          <h2>{article.Title}</h2>
          <p className="date">{`Written by: ${article.Author}`}</p>
          <p className="body">{article.Body}</p>
          <button onClick={() => removeArticle(article.id)}> delete </button>
          <button> edit </button>
        </div>
      )}
    </article>
  );
}
