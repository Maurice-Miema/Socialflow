import React from 'react'

function Historiquepage() {
    return (
        <>
            <div className='flex'>
                <h1 className='text-2xl'>Historique</h1>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="flex justify-between items-center">
                    <p className="text-gray-800 font-medium">"Lancement officiel de notre nouvelle app ! 🚀"</p>
                    <span className="text-sm text-gray-500">14 avril 2025, 10:32</span>
                </div>
                <div className="flex gap-2 mt-2 items-center">
                    <span className="text-blue-600">Facebook</span>
                    <span className="text-blue-800">LinkedIn</span>
                    <span className="text-green-500 text-sm ml-auto">Publié ✅</span>
                </div>
                <div className="mt-2 flex gap-3 text-sm text-gray-500">
                    <a href="https://facebook.com/postid" target="_blank" className="underline">Voir sur Facebook</a>
                    <a href="https://linkedin.com/postid" target="_blank" className="underline">Voir sur LinkedIn</a>
                </div>
            </div>

        </>
    )
}

export default Historiquepage;
