import {Link} from 'react-router-dom'
import {getContent, getOneContent} from '../services/api'
import {useState, useEffect} from 'react'

function ContentManager(){
    const [content, setContent] = useState <any[]>([])
    useEffect(() => {
        getContent().then (response =>{
            setContent(response.data)
        })
    }, [])
    
    return(
        <div>
            <h1>Content Manager</h1>
            {content.map(contentvar => 
              <div key = {contentvar.id}>
                <Link to = {`/content/${contentvar.name}`}>
                <h2>{contentvar.name}</h2>
                </Link>
                <p>{contentvar.type}</p>
                <p>{contentvar.tags}</p>
                <p>{contentvar.format}</p>
                <p>{contentvar.duration}</p>
                <p>{contentvar.file_size}</p>
                </div>
            )}
        </div>
    )
}

export default ContentManager