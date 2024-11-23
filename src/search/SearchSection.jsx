// eslint-disable-next-line react/prop-types
function SearchSection({ label, children }) {
  return (
    <section className='sp-search-result__section'>
      <div className='sp-search-result__label'>
        <h2>{ label }</h2>
      </div>
      { children }
    </section>
  )
}

export default SearchSection;