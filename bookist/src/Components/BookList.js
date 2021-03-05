import React from 'react';

function BookList(props) {



    let mappedBooks = props.books.map((elem, index) => {
        return (
            <div key={index} book={elem}>
                <img onClick={props.addToshelf} src={elem.img} alt={props.books.title} />
                <p>{elem.title}</p>
                <p>{elem.author}</p>
            </div>
        )
    })



    return (
        <section>
            {mappedBooks}
        </section>
    )
};

export default BookList;