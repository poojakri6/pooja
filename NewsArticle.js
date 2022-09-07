import React from 'react';
import { useInView } from 'react-intersection-observer';

function NewsArticle({ data, setUrlString }) {
  let element = data.title;
  const { ref, inView, entry } = useInView();
  console.log(inView);

  console.log(data.title);

  if (inView === true) {
    setUrlString(entry?.target.textContent);
  }
  return (
    <div className="news">
      <h1 ref={ref} className="news__title">
        {element}
      </h1>
      <p>{inView ? 'Yes' : 'No'}</p>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
    </div>
  );
}

export default NewsArticle;
