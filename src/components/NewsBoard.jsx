import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=563415aa95ca48cb99bfaf83f77b31ed`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => setArticles(data.articles))
            .catch(error => console.error('Error fetching data:', error));
    }, [category]);

    return (
        <div>
            <h2 className="text-center">
                Latest <span className="badge bg-danger">News</span>
            </h2>
            {
                articles.map((news, index) => {
                   return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
})
            }
        </div>
    );
};

export default NewsBoard;
