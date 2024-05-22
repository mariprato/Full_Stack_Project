import classNames from 'classnames';
import "./ButtonComponent.css";

const ButtonComponent = ({children, variant, onClick, className, type}) => {

    const classes = classNames(className, {
        'button-standard medium pink-bg-white-text': variant === 'button-post-pink',
        'button-standard medium white-bg-blue-text': variant === 'button-post-blue',
        "button-standard large pink-bg-white-text" : variant === 'button-return-to-pets',
        'button-standard medium white-bg-pink-text': variant === 'button-form-submit',
        'button-standard pink-bg-white-text newsletter-button': variant === 'button-newsletter-submit',
        'button-standard pink-bg-white-text filter-button': variant === 'button-filter',
        'button-standard white-bg-pink-text options-button': variant === 'button-filter-options',
        'page-button': variant === 'button-page-number',
    })

    return ( 
        <button className={classes} onClick={onClick} type={type}>{children}</button>
     );
}
 
export default ButtonComponent;