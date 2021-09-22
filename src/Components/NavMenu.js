
const NavMenu = () => {
    
    const items = [1,2,4,5];
    const generateKey = () => {
        return `${ new Date().getTime() }`;
    }
    return (
        <div>
            <ul>
                {items.map(item => {
                    return (<li key={generateKey}>yo yo{item}</li>)
                })}
            </ul>
        </div>
    )
}

export default NavMenu
