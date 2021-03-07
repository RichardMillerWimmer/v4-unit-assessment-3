
import React from "react";

function Shelf(props) {

    let shelfBookCheck = props.shelf
    // console.log(shelfBookCheck)
    const emptyShelf = () => {
        if (shelfBookCheck.length === 0) {
            return <p>your shelf has no books</p>
        }
    }
    const clearButton = () => {
        if (shelfBookCheck.length > 0) {
            return <button className='btn' onClick={props.clearShelf} >clear shelf</button>
        }
    }

    return (
        <section className='shelfSideBar'>
            <h3>Your Shelf</h3>
            {(emptyShelf())}
            {(clearButton())}
            {/* <button onClick={props.clearShelf} >clear shelf</button> */}
            <div>
                {props.shelf.map((elem) => {
                    return <div key={elem.id}>
                        <p>{elem.title}</p>
                    </div>
                })}
            </div>
        </section>
    )
};

export default Shelf