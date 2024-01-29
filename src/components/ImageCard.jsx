import React from "react";

const ImageCard = ({ image }) => {

    const tags = image.tags
    const arrTags = tags.split(",")

    return(
        <div className="max-w-sm rounded overflow-hidden shadow-xl">
            {/*<img className="w-full" src="https://source.unsplash.com/random/" alt=""/>*/}
            <img className="w-full" src={`${image.webformatURL}`} alt="Image"/>
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl">Photo by {image.user}</div>
                <div>
                    <ul>
                        <li>
                            <strong>Views: </strong>
                            {image.views}
                        </li>
                        <li>
                            <strong>Downloads: </strong>
                            {image.downloads}
                        </li>
                        <li>
                            <strong>Likes: </strong>
                            {image.likes}
                        </li>
                    </ul>
                </div>
                <div className="px-6 py-4">
                    {arrTags.map(tag => <span key={image.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#{tag}</span>)}
                </div>
            </div>
        </div>
    )
}

export default ImageCard;