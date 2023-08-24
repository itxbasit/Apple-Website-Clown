import '../App.css';
import { AiFillApple, AiOutlineSearch, AiTwotoneShopping, AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

function Menu() {
  let flag = true
  const menuBtn = document.getElementById("menu")
  const mobMenu = document.querySelector(".mob-menu")
  const nav = document.querySelector(".nav-mob")
  const changeColor = document.querySelector(".change-color")
  menuBtn?.addEventListener("click", () => {
    if (flag) {
      nav.style.backgroundColor = "#444f52"
      mobMenu.style.display = "block"
      flag = false
    }
    else {
      nav.style.backgroundColor = "black"
      mobMenu.style.display = "none"
      flag = true
    }

  })
  return (
    <div className="App-header">
      <div className='navigation comp-header'>
        <a><AiFillApple /></a>
        <a>Mac</a>
        <a>iPad</a>
        <a>iPhone</a>
        <a>Watch</a>
        <a>TV</a>
        <a>Music</a>
        <a>Service</a>
        <a><AiOutlineSearch /></a>
        <a><AiTwotoneShopping /></a>
      </div>
      <div className='mobile-header display'>
        <div className='navigation nav-mob'>
          <a id='menu'><AiOutlineMenuFold /></a>
          <a><AiFillApple /></a>
          <a><AiOutlineSearch /></a>
          <a><AiTwotoneShopping /></a>
        </div>
        <div className='mob-menu display'>
          <ul>
            <li><a>Mac</a></li>
            <li><a>iPad</a></li>
            <li><a>iPhone</a></li>
            <li><a>Watch</a></li>
            <li><a>TV</a></li>
            <li><a>Music</a></li>
            <li><a>Service</a></li>
          </ul>
        </div>
      </div>
      <div className='heading'>
        <p>Shop for your favorite Apple products.</p>
      </div>
    </div>
  )
}
export default Menu;