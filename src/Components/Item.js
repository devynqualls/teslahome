import React from 'react'
import Button from './Button'
import './Item.css'


function Item({title, desc, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnLink, rightBtnTxt, twoButtons, first, button}){
    return(
        <div className="item" 
        style={{ backgroundImage: `url(${backgroundImg})`

        }}>
        <div className="item__container">
            <div className="item__text">
                <p>{title}</p>
                <div className="item__textDesc">
                    <p>{desc}</p>
                </div>
                <div className="item__lowerThird">
                    <div className="item__buttons"></div>
                    <Button
                    imp='primary' 
                    text={leftBtnLink} 
                    link={leftBtnLink}
                    />
                </div>
                <button className="button" >Order Now</button>

            </div>
        </div>


        </div>
    )
}
export default Item