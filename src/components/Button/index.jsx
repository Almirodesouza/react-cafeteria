import {MainButton} from './styles.js'
import PropTypes from 'prop-types'; 

function Button({children, theme, ...props}) {

    return (
      <MainButton {...props} theme={theme}>{children}</MainButton>
    )
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string
}

export default Button