import { useState } from "react";
import { updateArticle } from "./articleService";
import FbEdit from "./FbEdit";
import logo from "./assets/culinaryCloud.png";

export default function Article({ article, removeArticle, updateArticle }) {
  const [editing, setEditing] = useState(false);
  
  return (
    <article>
      {!article ? (
          <img id="cloudGirl" alt="Girl on cloud eating" src={logo} />
        
      ) : (
        <div id="reviewContent" className="article-display">
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
