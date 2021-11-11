export default function Nav({ articles, setArticle }) {
  return (
    <nav>
      <div className = "navbar">
        {
        articles.map( a =>  
           <p onClick={() => setArticle(a)} key={a.id}> {a.Title} </p>   ) 
        }
      </div>
    </nav>
  );
}
