import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
import { Formik, Form, Field } from 'formik'

type SearchBarProps = {}

const SearchBar: React.FunctionComponent<SearchBarProps> = () => {
    const Data = useStaticQuery(graphql`{
        localSearchPages {
            index
            store
        }
    }`)
    const [query, setQuery] = useState(null)
    const results = useFlexSearch(query, Data?.localSearchPages?.index, Data?.localSearchPages?.store)

    return (
        <div className="search">
            <Formik
                initialValues={{ query: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setQuery(values.query)
                    setSubmitting(false)
                }}
            >
                <Form className="search__form">
                    <Field className="search__input" name="query" />
                    <button className="search__submit" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                </Form>
            </Formik>
            <div className="search__results">
                <ul>
                    {results.map(result => (
                        <li key={result.id}>
                            <Link className="search__link" to={result?.path}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <span>{result?.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SearchBar