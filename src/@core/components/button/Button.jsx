import './button.css'
import flech from '../../../assets/flech.svg'
// const Button = () => {
//   return (
//     <button className="button-56  " role="button">Get started <span className=' ml-2 p-2 bg-white rounded-2xl  border-black border-2'><img src={flech} alt="" /></span></button>
//   )
// }

// export default Button


// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick, disabled, className, style, full }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn  ${className} ${full && 'btn-full'} button-56 `}
      style={style}
      data-hover={children}
    >
      <span className='flex items-center'>
        {children}
        <span className=' ml-2 p-2 bg-white rounded-2xl  border-black border-2'><img src={flech} alt="" /></span>
      </span>
    </button>
  )
}

export default Button