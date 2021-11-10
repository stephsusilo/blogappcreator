import { useEffect, useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import ArticleEntry from "./ArticleEntry";
import { SignIn, SignOut, useAuthentication } from "./authService";
import { fetchArticles, createArticle, deleteArticle } from "./articleService";
import "./App.css";
import { BsCloudyFill } from "react-icons/bs";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [writing, setWriting] = useState(false);
  const user = useAuthentication();

  // This is a trivial app, so just fetch all the articles only when
  // a user logs in. A real app would do pagination. Note that
  // "fetchArticles" is what gets the articles from the service and
  // then "setArticles" writes them into the React state.
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

  //change article state in nav and page
  function removeArticle(id) {
    deleteArticle(id); //update to firebase
    //Update to React state
    const newArticles = articles.filter((article) => article.id !== id);
    setArticles(newArticles);
  }

  return (
    <div className="App">
      <header>
      
        <div id="headerTitle">Culinary Cloud <BsCloudyFill/> </div>
        {user && <button onClick={() => setWriting(true)}>New Article</button>}
        {!user ? <SignIn /> : <SignOut />}
      </header>
      {!user ? "" : <Nav articles={articles} setArticle={setArticle} />}

      {!user ? (
        ""
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} />
      ) : (
        <Article article={article} removeArticle={removeArticle} />
      )}
    </div>
  );
}