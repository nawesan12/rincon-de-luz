import React, { useEffect, useState } from 'react'
import { getData } from './services/getData'

import Comment from './Comment'

function CommentsSection() {

  const [data, setData] = useState([])

  useEffect(() => {
    getData('comentarios', setData)
  }, [])

  return (
    <section className="comments_section">
      <h1>Comentarios</h1>

      <section className="comments_wrapper">
        {
          data.map((comment, index) => (
            <Comment 
              key={index}
              name={comment.name}
              email={comment.email}
              comment={comment.comment}
              website={comment.website}
              date={comment.date}
            />
          ))
        }
      </section>
    </section>
  )
}

export default CommentsSection