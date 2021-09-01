import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import QuoteLine from './components/quotes/QuoteLine';
import Search from './components/ui/Search';

const App = () => {
  const [items, setItems] = useState([])
  const [quotes, setQuotes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => { 
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
    }

    fetchItems()
  }, [query])

  useEffect(() => {
    const fetchQuotes = async () => {
      const saying = await axios(`https://www.breakingbadapi.com/api/quotes/`)
      setQuotes(saying.data)
      setIsLoading(false)
    }

    fetchQuotes()
  }, [])


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <QuoteLine isLoading={isLoading} quotes={quotes}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
