import { useEffect, useState } from "react"
import "./News.css"

const News = () => {
  const [articles, setArticles] = useState([])

  const fetchNews = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=697fae426e784c57a3db6715866ba29e"
    )
    const data = await response.json()
    // console.log(data)
    setArticles(data.articles)
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <div>
      <h1>Latest Tesla News</h1>
      <div className="news-container">
        {articles.map((article, index) => {
          return (
            <div key={index} className="news-item">
              {article.urlToImage ? (
                <img src={article.urlToImage} alt="" className="news-image" />
              ) : null}
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank">
                Read More
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default News
