const React = require('react')

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}


 Product.defaultProps = {
   hasWatermark: false
 }

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function (props, propName, componentName) {
    if (!props[propName]) {
      return new Error(`${propName} is required`)
    } else if (typeof props[propName] !== 'number') {
      return new Error(`${propName} must be a number`)
    } else if (props[propName] < 80 || props[propName] > 300) {
      return new Error(`${propName} must be between 80 and 300`)
    }
  }
}




module.exports = Product
