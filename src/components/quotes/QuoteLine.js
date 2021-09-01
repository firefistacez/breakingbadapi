import React from 'react'

const QuoteLine = ({ quotes, isLoading }) => {
  const random = Math.floor(Math.random() * 70) + 1;
  return isLoading ? 
  (<h1>Loading...</h1>) : 
  (<section className="quote">
    {quotes[random].quote} - {quotes[random].author}
  </section>)
}

export default QuoteLine
