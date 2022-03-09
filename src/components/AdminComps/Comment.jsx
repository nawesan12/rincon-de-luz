import React from 'react'

function Comment(props) {
  return (
    <article className="comment">
        <div className="user">
            <h4>{props.name}</h4>  
            <span className="email"><a href={`mailto:${props.email}`}>{props.email}</a></span>
        </div>
        <p>{props.comment}</p>
        <div className="bottom">
            <span className="website">{props.website}</span>
            <span className="date">{props.date}</span>
        </div>
    </article>
  )
}

export default Comment