import MacbookAir from '../images/macbook-air-segment.png'
import MacbookPro from '../images/macbook-pro-segment-2019.png'
import iMac from '../images/imac-segment.png'
import iMacPro from '../images/imac-pro-segment.png'
import MacPro from '../images/mac-pro-segment.png'
import MacMini from '../images/mac-mini-segment.png'
import iPhone8 from '../images/segment-hero-iphone-8-201709.png'
import Series5 from '../images/apple-watch-series-5-segment-201909.png'
import eSeries5 from '../images/apple-watch-edition-segment-201909.png'
import Nike from '../images/apple-watch-nike-segment-201909.png'
import Hermes from '../images/apple-watch-hermes-segment-201909.png'
import Series3 from '../images/apple-watch-series-3-segment-201909.png'
import iPod from '../images/segment-hero-ipod-touch-201509.png'
import AppleTV from '../images/segment-hero-apple-tv4k-201709 (1).png'
import  AppleTVHd from '../images/segment-hero-apple-tv4k-201709 (1).png'
import Access from '../images/smb-accessories-201908.png'


function Content() {
    return (
        <div>
            <div className='content'>
                <h3>Mac</h3>
                <ul className="apple">
                    <li className='box'>
                        <img src={MacbookAir} />
                        <p>MacBook Air</p>
                        <p>From ฿35,000</p>
                    </li>
                    <li className='box'>
                        <img src={MacbookPro} />
                        <p>MacBook Pro</p>
                        <p>From ฿42,900</p>
                    </li>
                    <li className='box'>
                        <img src={iMac} />
                        <p>iMac</p>
                        <p>From ฿37,900</p>
                    </li>
                    <li className='box'>
                        <img src={iMacPro} />
                        <p>iMac Pro</p>
                        <p>From ฿172,900</p>
                    </li>
                    <li className='box'>
                        <img src={MacPro} />
                        <p>Mac Pro</p>
                        <p>From ฿114,900</p>
                    </li>
                    <li className='box'>
                        <img src={MacMini} />
                        <p>Mac mini</p>
                        <p>From ฿27,900</p>
                    </li>
                    <li className='box'>
                        <img src={iPhone8} />
                        <p>iPhone 8</p>
                        <p>From ฿15,900</p>
                    </li>
                </ul>


                <h3>Watch</h3>
                <ul className="apple">
                    <li className='box'>
                        <img src={Series5} />
                        <p>Apple Watch Series 5</p>
                        <p>From ฿13,400</p>
                    </li>
                    <li className='box'>
                        <img src={Nike} />
                        <p>Apple Watch Nike</p>
                        <p>From ฿40,900</p>
                    </li>
                    <li className='box'>
                        <img src={Hermes} />
                        <p>Apple Watch Hermes</p>
                        <p>From ฿37,900</p>
                    </li>
                    <li className='box'>
                        <img src={eSeries5} />
                        <p>Apple Watch Edition Series 5</p>
                        <p>From ฿25,400</p>
                    </li>
                    <li className='box'>
                        <img src={Series3} />
                        <p>Apple Watch Series 3</p>
                        <p>From ฿6,400</p>
                    </li>
                </ul>
                <h3>iPod and Apple TV</h3>
                <ul className="apple">
                    <li className='box'>
                        <img src={iPod} />
                        <p>iPod Touch</p>
                        <p>Form ฿6,900</p>
                    </li>
                    <li className='box'>
                        <img src={AppleTV} />
                        <p>Apple TV 4K</p>
                        <p>Form ฿7,528</p>
                    </li>
                    <li className='box'>
                        <img src={AppleTVHd} />
                        <p>Apple TV HD</p>
                        <p>Form ฿6,168</p>
                    </li>
                </ul>
                <div className='acc'>
                    <div>
                        <img src={Access}/>
                    </div>
                    <div className='Access-Content'>
                        <h1>Accessories</h1>
                        <p>get things done in style.</p>
                        <a>shop now &gt;</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;