import React from "react";

const MAX_ITEMS = 9
const MAX_LEFT = (MAX_ITEMS - 1) / 2

const Pagination = ({ limit, total, offset, setOffset }) => {
  const current = offset ? (offset / limit) + 1 : 1
  const pages = Math.ceil(total / limit)
  const first = Math.max(current - MAX_LEFT, 1)

  function onPageChange(page) {
    setOffset((page - 1) * limit)
  }

  const pagAtualBtn = 'relative z-10 inline-flex items-center bg-primary-700 px-4 py-2 text-sm font-semibold text-white rounded-lg hover:bg-primary-800 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
  const pagBtn = 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 rounded-lg hover:bg-gray-100 focus:z-20 focus:outline-offset-0' 

  return (

    <div className="flex justify-center w-full my-4">
      <ul className="flex gap-2">
        <li className="">
          <button
            className={pagBtn}
            onClick={() => onPageChange(current - 1)}
            disabled={current === 1}
          >
            Anterior
          </button>
        </li>
        {Array.from({ length: Math.min(MAX_ITEMS, pages) })
          .map((_, index) => index + first)
          .map((page) => (
            <li key={page} >
              <button
                onClick={() => setOffset((page - 1) * limit)}
                className={ page === current ? pagAtualBtn : pagBtn }
              >
                {page}
              </button>
            </li>
          ))
        }
        <li>
          <button
            className={pagBtn}
            onClick={() => onPageChange(current + 1)}
            disabled={current === pages}
          >
            Próxima
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination;