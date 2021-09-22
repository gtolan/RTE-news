
const NavMenu = () => {
    
    const items = [1,2,4,5];
    const generateKey = () => {
        return Math.floor(Math.random() * 5000) + 1;
    }


    return (
        <div>
            <ul>
                {items.map(item => {
                    return (<li key={generateKey()}>yo yo{item}</li>)
                })}
            </ul>
        </div>
    )
}

export default NavMenu
