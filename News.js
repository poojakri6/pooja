import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { NewsContext } from '../NewsContext';
import NewsArticle from './NewsArticle';

function News(props) {
  const [urlString, setUrlString] = useState('');
  const { data } = useContext(NewsContext);
  console.log(data);

  useEffect(() => {
    if (urlString) {
      // const formattedUrl = urlString.replace(/ /gi, '-');
      window.history.pushState(null, '', urlString);
    }
  }, [urlString]);

  return (
    <div>
      <h1 className="head__text">NEWS APP</h1>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle
                data={news}
                key={news.url}
                setUrlString={setUrlString}
              />
            ))
          : 'Loading'}
      </div>
    </div>
  );
}

export default News;
