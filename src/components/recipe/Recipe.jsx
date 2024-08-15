import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const Recipe = () => {
    const { id } = useParams();
    const { data } = useFetch(`/recipes/${id}`);

    if (!data) {
        return <p className="text-center text-gray-500 text-lg font-semibold mt-10 font-jakarta">Loading...</p>;
    }

    return (
        <section className="bg-gray-50 py-10 font-jakarta">
            <div className="container mx-auto max-w-[1440px] p-5">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img className="w-full h-64 object-cover" src={data.image} alt={data.name} />
                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{data.name}</h1>
                        <p className="text-gray-600 mb-2"><strong>Cuisine:</strong> {data.cuisine}</p>
                        <p className="text-gray-600 mb-2"><strong>Rating:</strong> {data.rating} ({data.reviewCount} reviews)</p>
                        <p className="text-gray-600 mb-2"><strong>Difficulty:</strong> {data.difficulty}</p>
                        <p className="text-gray-600 mb-4"><strong>Calories per Serving:</strong> {data.caloriesPerServing} kcal</p>

                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
                        <ul className="list-disc list-inside mb-4">
                            {data.ingredients.map((ingredient, index) => (
                                <li key={index} className="text-gray-600">{ingredient}</li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instructions</h2>
                        <ol className="list-decimal list-inside text-gray-600 mb-4">
                            {data.instructions.map((instruction, index) => (
                                <li key={index} className="mb-2">{instruction}</li>
                            ))}
                        </ol>

                        <p className="text-gray-600 mb-2"><strong>Preparation Time:</strong> {data.prepTimeMinutes} minutes</p>
                        <p className="text-gray-600 mb-2"><strong>Cooking Time:</strong> {data.cookTimeMinutes} minutes</p>
                        <p className="text-gray-600 mb-2"><strong>Servings:</strong> {data.servings}</p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {data.tags.map((tag, index) => (
                                <span key={index} className="bg-yellow-200 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recipe;
