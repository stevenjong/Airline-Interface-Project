import {useParams} from 'react-router-dom'
import {getOneContent} from '../services/api'
import {useState, useEffect} from 'react'

function ContentDetail(){
    const {namevar} = useParams()
    const [content, setContent] = useState <any>(null)
    useEffect(() => {
        if(namevar){
            getOneContent(namevar).then(response => {
                setContent(response.data)
            })
        }
    }, [namevar])
    if(!content){
        return(
            <div>Loading!</div>
        )
    }
    return(
        <div>
            <h1>Content Details</h1>
            <div>
                <h2>{content.name}</h2>
                <p>{content.type}</p>
                <p>{content.tags}</p>
                <p>{content.format}</p>
                <p>{content.duration}</p>
                <p>{content.file_size}</p>
            </div>
        </div>
    )
}

export default ContentDetail