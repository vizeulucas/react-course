// using object destructuring to get a more readable code
export  default function CoreConcepts({image, title, description}) {
    return (
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}