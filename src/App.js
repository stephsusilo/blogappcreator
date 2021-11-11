import { useEffect, useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import ArticleEntry from "./ArticleEntry";
import { SignIn, SignOut, useAuthentication } from "./authService";
import { fetchArticles, createArticle, deleteArticle, updateArticle } from "./articleService";
import "./App.css";
import { BsCloudyFill } from "react-icons/bs";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [writing, setWriting] = useState(false);
  const user = useAuthentication();

  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles);
    }
  }, [user]);

  // Update the "database" *then* update the internal React state. These
  // two steps are definitely necessary.
  function addArticle({ title, rating, body }) {
    createArticle({ title, rating, body }).then((article) => {
      setArticle(article);
      setArticles([article, ...articles]);
      setWriting(false);
    });
  }

  // Change article state in nav and page
  function removeArticle(id) {
    // Update to firebase
    deleteArticle(id); 
    //Update to React state
    const newArticles = articles.filter((article) => article.id !== id);
    setArticles(newArticles);
  }

  // Allow user to edit body of published text
  function updateAction(id, body) {
    console.log("updating", id, body);
    updateArticle(id, body).then((body) => {
      const updated = { ...article, Body: body };
      setArticle(updated);
      setArticles(articles.map((a) => (a.id === updated.id ? updated : a)));
    });
  }

  return (
    <div className="App">
      <header>
        {user && <button onClick={() => setWriting(true)}>New Article</button>}
        <div id="headerTitle">Culinary Cloud <BsCloudyFill/> </div>
        {!user ? <SignIn /> : <SignOut />}
      </header>
      {!user ? "" : <Nav articles={articles} setArticle={setArticle} />}

      {!user ? (
        ""
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} />
      ) : (
        <Article article={article} removeArticle={removeArticle} updateArticle={updateAction}/>
      )}
    </div>
  );
}