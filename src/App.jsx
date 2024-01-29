import React, {useEffect, useState} from "react";
import './App.css'

function App() {

    useEffect(() => {
        getData()
    }, [])

    const handleError = error => {
        throw new Error("Trouble fetching data", error)
    }

    const getData = async () => {
        try{
            const getData = await fetch("https://pixabay.com/api/?key=42083097-dc325ca6c7c2614f932026684&q=yellow+flowers&image_type=photo&pretty=true")
            const response = await getData.json()

            if(!response.ok){
                handleError(response)
            }

            console.log(response)

        }catch(e){
            handleError(e)
        }
    }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-xl">
        <img className="w-full" src="https://source.unsplash.com/random/" alt=""/>
        <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl">Photo by John Doe</div>
            <div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        4000
                    </li>
                    <li>
                        <strong>Dowloads: </strong>
                        4000
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        4000
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag3</span>
            </div>
        </div>
    </div>
  )
}

export default App
