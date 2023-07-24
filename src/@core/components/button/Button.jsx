import './button.css'
import flech from '../../../assets/flech.svg'
const Button = () => {
  return (
    <button className="button-56" role="button">Get started <span className=' ml-2 p-2 bg-white rounded-2xl  border-black border-2'><img src={flech} alt="" /></span></button>
  )
}

export default Button