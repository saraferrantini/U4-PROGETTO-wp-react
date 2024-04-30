import React, { useState, useEffect } from "react";
import img from "../assets/img2.jpg";
import "./style.css";

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

  const deletePost = async (postId) => {
    try {
      const authString = "sara:ygEA GL8C LBTX 2otu ypii SGza";
      const encodedAuthString = btoa(authString);
      const response = await fetch(`http://localhost/commerce/wordpress/wp-json/wp/v2/posts/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${encodedAuthString}`,
        },
      });
      if (!response.ok) {
        throw new Error("Errore durante l'eliminazione del post");
      }
      setArticles((prevArticles) => prevArticles.filter((article) => article.id !== postId));
    } catch (error) {
      console.error(error);
    }
  };

  const addPost = async () => {
    try {
      const authString = "sara:ygEA GL8C LBTX 2otu ypii SGza";
      const encodedAuthString = btoa(authString);
      const response = await fetch("http://localhost/commerce/wordpress/wp-json/wp/v2/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${encodedAuthString}`,
        },
        body: JSON.stringify({
          title: "Titolo del nuovo articolo",
          content: "Contenuto del nuovo articolo",
        }),
      });
      if (!response.ok) {
        throw new Error("Errore durante l'aggiunta del post");
      }
      const newArticle = await response.json();
      setArticles((prevArticles) => [...prevArticles, newArticle]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="article-title text-center mb-5 mt-5">Esplorando il Meraviglioso Mondo di Cani e Gatti</h1>
      <img src={img} className="mt-2" alt="Cani e Gatti" style={{ width: "100%", marginBottom: "90px" }} />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {articles.map((article) => (
          <div key={article.id} className="col mb-5">
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
                <a
                  href={article.link}
                  className="btn btn-primary"
                  style={{ backgroundColor: "#00a099", border: "none", marginRight: "10px" }}
                >
                  Leggi di più
                </a>
                <button
                  className="btn btn-danger"
                  style={{ backgroundColor: "#f49216", border: "none", marginRight: "10px" }}
                  onClick={() => deletePost(article.id)}
                >
                  Elimina
                </button>
                <button
                  className="btn btn-success"
                  style={{ backgroundColor: "#a2a568", border: "none" }}
                  onClick={() => addPost()}
                >
                  Aggiungi
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
