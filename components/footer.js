import '../App.css';
import { AiFillApple } from "react-icons/ai";


function Footer() {
    return (
        <div>
            <div className='footer'>
                <div className='footer-content'>
                    <p className='display-line'>Prices are inclusive of VAT. Free delivery for all orders.</p>
                    <p className='display-line'>*Total order value must be less than 30,000 THB. Admin fee may be charged by bank/processing entity in addition to order value.</p>
                    <p className='mar'>**For approved customers only. Subject to approval. For more information, see <a href=''>http://www.apple.com/th-en/help/payments.</a></p>
                    <hr></hr>
                    <p className='font-size'><b className='co'><AiFillApple /> &gt;</b> Welcome to the Apple Store</p>
                    <div className='sub-footer'>
                        <ul>
                            <li><b>Shop and Learn</b></li>
                            <li><a>Mac</a></li>
                            <li><a>iPad</a></li>
                            <li><a>iPhone</a></li>
                            <li><a>Apple Watch</a></li>
                            <li><a>TV</a></li>
                            <li><a>Music</a></li>
                            <li><a>iTunes</a></li>
                            <li><a>iPod Touch</a></li>
                            <li><a>Accessories</a></li>
                            <li><a>Gift Cards</a></li>
                        </ul>
                        <ul>
                            <li><b>Apple Store</b></li>
                            <li><a>Apple Store App</a></li>
                            <li><a>Financing</a></li>
                            <li><a>Order Status</a></li>
                            <li><a>Shopping Help</a></li>
                        </ul>
                        <ul>
                            <li><b>For Education</b></li>
                            <li><a>Apple and Education</a></li>
                            <li><a>Shop for College</a></li>
                            <li className='margin'><b>For Business</b></li>
                            <li><a>Apple and Business</a></li>
                            <li><a>Shop for Business</a></li>
                        </ul>
                        <ul>
                            <li><b>Account</b></li>
                            <li><a>Manage Your Apples ID</a></li>
                            <li><a>Apple Store Account</a></li>
                            <li><a>iCloud.com</a></li>
                            <li className='margin'><b>Apple Values</b></li>
                            <li><a>Accessiblity</a></li>
                            <li><a>Environment</a></li>
                            <li><a>Privacy</a></li>
                            <li><a>Supplier Responsibility</a></li>
                        </ul>
                        <ul>
                            <li><b>About Apple</b></li>
                            <li><a>Newsroom</a></li>
                            <li><a>Investors</a></li>
                            <li><a>Events</a></li>
                            <li><a>Contact Apple</a></li>
                        </ul>
                    </div>
                    <p  className='anchor-foot'>More ways to shop: visit an <a className='anchor-foot'>Apple Store</a>, Call 001‑800‑65‑6957, or <a>find a seller</a></p>
                    <hr></hr>
                    <div className='sub-footer-content'>
                        <p>Copyright © 2019 Apple Inc. All rights reserved.</p>
                        <ul>
                            <li><a>Privacy Policy</a></li>
                            <li className='display-line'>|</li>
                            <li><a>Terms of Use</a></li>
                            <li className='display-line'>|</li>
                            <li><a>Sales and Refunds</a></li>
                            <li className='display-line'>|</li>
                            <li><a>Legal</a></li>
                            <li className='display-line'>|</li>
                            <li><a>Sitemap</a></li>
                        </ul>
                        <p>ไทย | ภาษาไทย</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer