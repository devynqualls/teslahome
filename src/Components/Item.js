import React from 'react'
import Button from './Button'
import './Item.css'

//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Item({title, desc, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnLink, rightBtnTxt, twoButtons, first}){
    return(
        <div className="item" 
        style={{ backgroundImage: `url(${backgroundImg})`

        }}>
        <div className="item__container">
            <div className="Item__text">
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
                    {twoButtons && (
                        <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
                    )}
                </div>
                {first && (
                    <div className="item__expand">
                       
                    </div>
                )}
            </div>
        </div>


        </div>
    )
}
export default Item