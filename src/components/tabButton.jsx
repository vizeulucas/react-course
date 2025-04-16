
// using the prop children
export default function TabButton({children, onSelect}) { // start a prop name with 'on' to indicate it should be used on a 'onEvent'
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}