
import React from "react";

function Shelf(props) {
    // console.log(props)
    return (
        <section className='shelfSideBar'>
            <h3>Your Shelf</h3>
            <button onClick={props.clearShelf} >clear shelf</button>
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