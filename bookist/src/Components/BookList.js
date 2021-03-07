import React from 'react';

function BookList(props) {


    function onClickSelect(value) {
        props.addToShelf(value)
    }

    let mappedBooks = props.books.map((elem) => {
        return (
            <div key={elem.id} book={elem}>
                <img onClick={() => onClickSelect(elem)} src={elem.img} alt={props.books.title} />
                <p>{elem.title}</p>
                <p>{elem.author}</p>
            </div>
        )
    })



    return (
        <section>
            <h2>Booklist</h2>
            {mappedBooks}
        </section>
    )
};

export default BookList;