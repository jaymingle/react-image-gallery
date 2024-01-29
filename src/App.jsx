import React, {useEffect, useState} from "react";
import './App.css'
import ImageCard from "./components/ImageCard.jsx";

function App() {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [term, setTerm] = useState('red')

useEffect(() => {
    getData()
}, [])

    const api_key = import.meta.env.VITE_PIXABAY_API_KEY

    const handleError = err => {
        throw new Error("Error getting data: ", err)
    }

    const getData = async() => {
        try{

            const response = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${term}+flowers&image_type=photo&pretty=true`)
            if(!response.ok){
                handleError("Issues fetching data")
            }

            const data = await response.json()
            setImages(data.hits)
            setIsLoading(false)
            console.log(images)
            // console.log(data.hits)

        }catch(e){
            handleError(e)
        }
    }

  return (
   <div className="container mx-auto">
       <div className="grid grid-cols-3 gap-4"></div>
       {images.map(image => (<ImageCard key={image.id} images={images}/>))}

   </div>
  )
}

export default App
