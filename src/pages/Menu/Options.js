import PropTypes from 'prop-types'

const Options = ({ changeCategory, categoryName }) => {
  return (
    <div className = "options">
        <h3 > Shop / <br></br> <h2>{categoryName}</h2> </h3>
            <ul >
                <li onClick = { () => changeCategory(-1)}>All</li>
                <li onClick = { () => changeCategory(0)}>Hoodies</li>
                <li onClick = { () => changeCategory(1)}>Remeras</li>
                <li onClick = { () => changeCategory(2)}>Camperas</li>
            </ul>
    </div>)
}

Options.propTypes = {

  changeCategory: PropTypes.func,
  categoryName: PropTypes.string
}

export default Options
