import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"
import { Formik, Form, Field } from "formik"

type SearchBarProps = {
  query?: string
}

const SearchBar = () => {
  const Data = useStaticQuery(graphql`
    {
      localSearchPages {
        index
        store
      }
    }
  `)

  const initialValues: SearchBarProps = { query: `` }
  const [query, setQuery] = useState(null)
  const results = useFlexSearch(query, Data?.localSearchPages?.index, Data?.localSearchPages?.store)
  const noResult = query !== null && results.length === 0

  return (
    <div className="search">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setQuery(values.query)
          setSubmitting(false)
        }}
      >
        <Form className="search__form">
          <label htmlFor="search-input" className="screen-reader-text">
            Enter search keywords
          </label>
          <Field id="search-input" placeholder="Search..." className="search__input" name="query" />
          <button className="search__submit" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </Form>
      </Formik>
      <div className="search__results">
        <ul>
          {results.length > 0 &&
            results.map(r => (
              <li key={r.id}>
                <Link className="search__link" to={r?.path}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <span>{r?.title}</span>
                </Link>
              </li>
            ))}
          {noResult && <li className="search__link">No result :(</li>}
        </ul>
      </div>
    </div>
  )
}

export default SearchBar
