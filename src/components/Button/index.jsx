import {MainButton} from './styles.js'

function Button({children, ...props}) {

    return (
      <MainButton {...props}>{children}</MainButton>
    )
};

export default Button