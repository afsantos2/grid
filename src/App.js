import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Pagination from './components/Pagination';
import qs from 'qs';
import { useEffect, useState } from 'react';
import './App.css';

const api = 'https://kitsu.io/api/edge/'
const LIMIT = 12

function App() {
  const [info, setInfo] = useState({})
  const [text, setText] = useState('')
  const [offset, setOffset] = useState(0)
  
  useEffect(() => {
    // setInfo({})

    const query = {
      page: {
        limit: LIMIT,
        offset,
      }
    }

    if(text) {
      query.filter = {
        text,
      }
    }      

    fetch(`${api}anime?${qs.stringify(query)}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response)
      })     
  }, [text, offset])

  return (
    <div className="App">
      <Header />
      <main className="max-w-screen-xl mx-auto">
        <SearchInput 
          value={text}
          onChange={(search) => setText(search)}
        />

        {/* loadind button */}
        {text && !info.data && (
          <div className="w-12 h-12 border-4 border-solid rounded-full border-r-black animate-spin"></div>
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
        {info.meta && (
          <Pagination 
            limit={LIMIT}
            total={info.meta.count}
            offset={offset}
            setOffset={setOffset}
          />
        )}
      </main>
    </div>
  );
}

export default App;