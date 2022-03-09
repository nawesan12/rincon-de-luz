import React, { useState } from 'react'
import { uploadData } from './services/uploadData'
import { handleInput } from './services/handleInput'

function BlogSection() {
  const [data, setData] = useState({
    createdAt: new Date().toLocaleDateString()
  })

  const uploadBlog = () => uploadData(data, 'blogs', () => {
    setData({})
    alert('Se ha publicado el articulo exitosamente')
  })

  return (
    <section className="blog_section">
      <h1>Crear Blog</h1>

      <form>
        <input type="text" placeholder='Titulo' onChange={(value) => handleInput('title', value, setData, data)} required/>
        <textarea type="text" onChange={(value) => handleInput('content', value, setData, data)} placeholder='Escribe la publicacion...' required/>
        <input type="text" onChange={(value) => handleInput('image', value, setData, data)} placeholder='Pega link de imagen' />
      </form>

      <button onClick={uploadBlog} style={{padding:'1rem 2rem', border:'none', outline:'none', background:'#a5a5ff', cursor:'pointer'}}>
        SUBIR
      </button>
    </section>
  )
}

export default BlogSection