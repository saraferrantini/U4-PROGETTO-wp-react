// import React, { useState, useEffect } from "react";

// const ArticleList = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await fetch("http://localhost/commerce/wordpress/wp-json/wp/v2/posts/");
//         if (!response.ok) {
//           throw new Error("Errore durante il recupero degli articoli");
//         }
//         const data = await response.json();
//         setArticles(data);
//         console.log(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Lista degli Articoli</h1>
//       <div className="article-list">
//         {articles.map((article) => (
//           <div key={article.id} className="article">
//             <h2>{article.title.rendered}</h2>
//             <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content.rendered }}></div>
//             <a href={article.link} className="read-more">
//               Leggi di più
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ArticleList;

// ----

// import React, { useState, useEffect } from "react";

// const ArticleList = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await fetch("http://localhost/commerce/wordpress/wp-json/wp/v2/posts/");
//         if (!response.ok) {
//           throw new Error("Errore durante il recupero degli articoli");
//         }
//         const data = await response.json();
//         setArticles(data);
//         console.log(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-center mb-5">Blog</h1>
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         {articles.map((article) => (
//           <div key={article.id} className="col">
//             <div className="card h-100">
//               {article._embedded &&
//                 article._embedded["wp:featuredmedia"] &&
//                 article._embedded["wp:featuredmedia"][0].source_url && (
//                   <img
//                     src={article._embedded["wp:featuredmedia"][0].source_url}
//                     className="card-img-top"
//                     alt={article.title.rendered}
//                   />
//                 )}
//               <div className="card-body">
//                 <h2 className="card-title">{article.title.rendered}</h2>
//                 <div className="card-text" dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}></div>
//               </div>
//               <div className="card-footer">
//                 <a href={article.link} className="btn btn-primary">
//                   Leggi di più
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ArticleList;

import React, { useState, useEffect } from "react";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost/commerce/wordpress/wp-json/wp/v2/posts/");
        if (!response.ok) {
          throw new Error("Errore durante il recupero degli articoli");
        }
        const data = await response.json();
        setArticles(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  //la funzione handleDelete che gestisce la logica per eliminare un articolo quando viene cliccato il pulsante "Elimina"
  //Questa funzione accetta un parametro articleId, che è l'ID dell'articolo che si desidera eliminare. Questo ID viene passato quando si fa clic sul pulsante "Elimina" accanto a un articolo.
  // la funzione fetch per effettuare una richiesta HTTP DELETE all'URL specifico dell'articolo da eliminare.
  //L'URL include l'articleId come parte dell'endpoint API per identificare l'articolo specifico da eliminare.
  const handleDelete = async (articleId) => {
    try {
      const response = await fetch(`http://localhost/commerce/wordpress/wp-json/wp/v2/posts/${articleId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Errore durante l'eliminazione dell'articolo");
      }

      //Se la richiesta di eliminazione ha avuto successo, la funzione setArticles viene chiamata per aggiornare lo stato degli articoli.
      //Viene filtrato l'array articles, rimuovendo l'articolo con l'ID corrispondente a quello passato alla funzione handleDelete.
      //In questo modo, l'articolo viene eliminato dall'elenco visualizzato sulla pagina.
      setArticles(articles.filter((article) => article.id !== articleId)); // Aggiorna gli articoli rimuovendo quello eliminato
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-center mb-5">Blog</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {articles.map((article) => (
          <div key={article.id} className="col">
            <div className="card h-100">
              {article._embedded &&
                article._embedded["wp:featuredmedia"] &&
                article._embedded["wp:featuredmedia"][0].source_url && (
                  <img
                    src={article._embedded["wp:featuredmedia"][0].source_url}
                    className="card-img-top"
                    alt={article.title.rendered}
                  />
                )}
              <div className="card-body">
                <h2 className="card-title">{article.title.rendered}</h2>
                <div className="card-text" dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}></div>
              </div>
              <div className="card-footer">
                <a href={article.link} className="btn btn-primary">
                  Leggi di più
                </a>
                <button onClick={() => handleDelete(article.id)} className="btn btn-danger ms-2">
                  Elimina
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
