import { Link } from 'react-router-dom'

export default function NotFound(){
    return (
        <>
            <p>Error 404: Page not Found!</p>
            <Link to='/'>Go back Home</Link>
        </>
    )
}