
const BtnSystem = ({ children, onClick, disabled, className, style, full }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`btn  ${className} ${full && 'btn-full'}`}
            style={style}
            data-hover={children}
        >
            <span>{children}</span>
        </button>
    )
}

export default BtnSystem