import arrayOfRecipes from '../data'
import { useParams } from 'react-router-dom'

export default function Recipe(){
    
    const {recipeId} = useParams()

    const recipe = arrayOfRecipes.find(recipe => recipe.id == recipeId)

    if(!recipe){
        return (
            <h2>404: Recipe not found</h2>
        )
    }

    return (
        <div className='Recipe'>
            <h2>{recipe.name}</h2>
            <p>{recipe.info}</p>
            <ul>{recipe.ingredients.map(item => <li key={recipe.ingredients.indexOf(item)}>{item}</li>)}</ul>
        </div>
    )
}

