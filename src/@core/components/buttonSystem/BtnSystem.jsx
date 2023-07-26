
// eslint-disable-next-line react/prop-types
const BtnSystem = ({ children, onClick, disabled, className, style, full }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`btn  ${className} ${full && 'btn-full'} text-white px-8 py-2 border-white border rounded-3xl md:font-light`}
            style={style}
            data-hover={children}
        >
            <span>{children}</span>
        </button>
    )
}

export default BtnSystem