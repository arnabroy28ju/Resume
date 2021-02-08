import React from 'react';

function Testimonials({data}) {
    if(data){
        var testimonials = data.testimonials.map(function(testimonials){
            return(
                <li key={testimonials.user}>
                    <blockquote>
                        <p>{testimonials.text}</p>
                        <cite>{testimonials.user}</cite>
                    </blockquote>
                </li>
            );
        });
    }
    return (
        <section id="testimonials">
            <div className="text-container">
                <div className="row">
                    <div className="two coloumns header-col">
                        <h1>
                            <span>Testimonials</span>
                        </h1>
                    </div>
                    <div className="ten coloumns flex-container">
                        <ul className="slides">
                            {testimonials}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;
