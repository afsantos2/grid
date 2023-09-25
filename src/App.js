import Header from './components/Header';
import SearchInput from './components/SearchInput';
import { useEffect, useState } from 'react';
import './App.css';

const api = 'https://kitsu.io/api/edge/'

function App() {
  const [info, setInfo] = useState({})
  const [text, setText] = useState('')
  
  useEffect(() => {
    setInfo({})
    if(text) {
      fetch(`${api}anime?filter[text]=${text}&page[limit]=16`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response)
        })
    }  
  }, [text])

  return (
    <div className="App">
      <Header />
      <main>
        <SearchInput 
          value={text}
          onChange={(search) => setText(search)}
        />

        {/* loadind button */}
        {text && !info.data && (
          <div className="h-12 border-4 border-solid rounded-full loading-w-12 border-r-black animate-spin"></div>
        )}
        
        {info.data && (
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
            {info.data.map((anime) => (
              <li key={anime.id} className='flex flex-col items-center'>
                <img
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.canonicalTitle}                  
                />
                {anime.attributes.canonicalTitle}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;