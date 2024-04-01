import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
};

const Button = ({ children, buttonType, ...otherPros }) => {
    return <button
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherPros}
    >{children}</button>
}

export default Button;