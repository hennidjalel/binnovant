import './ticker.css'
import flechDown from '../../../assets/flechDown.svg'

const Ticker = ({ items }) => {
    return (
        <>
            <div className='shadowOne'></div>
            <div className='shadowtwo'></div>
            <div className="ticker-wrap">
                <div className="ticker">
                    <span className="item-collection-1">
                        {items &&
                            items.map((item, index) => (
                                <div className="item " key={index}>
                                    <div className='flex items-center justify-center gap-9'>
                                        <span>{item}</span>
                                        <span><img src={flechDown} alt="" /></span>
                                    </div>
                                </div>
                            ))}
                    </span>
                    <span className="item-collection-2">
                        {items &&
                            items.map((item, index) => (
                                <div className="item " key={index}>
                                    <div className='flex items-center justify-center gap-9'>
                                        <span>{item}</span>
                                        <span><img src={flechDown} alt="" /></span>
                                    </div>
                                </div>
                            ))}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Ticker