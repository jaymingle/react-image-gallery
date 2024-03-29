import React, {useEffect, useState} from "react";
import './App.css'
import ImageCard from "./components/ImageCard.jsx";
import ImageSearch from "./components/ImageSearch.jsx";

function App() {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [term, setTerm] = useState('rose')

useEffect(() => {
    getData()
}, [term])

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

        }catch(e){
            handleError(e)
        }
    }

  return (
   <div className="container mx-auto">
       <div className="mt-20 flex items-center justify-center">
            <ImageSearch searchText={(text) => setTerm(text)}/>
       </div>

       {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto">No Images Found....</h1>}

       <div className="mt-16">
           {isLoading ? <h2 className="text-6xl text-center mx-auto">Data Loading ....</h2> : <div className="grid grid-cols-3 gap-4">
               {images.map(image => <ImageCard key={image.id} image={image}/>)}
           </div>}
       </div>

   </div>
  )
}

export default App
