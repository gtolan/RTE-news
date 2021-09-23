 import { useDispatch, useSelector } from 'react-redux';
    
const useNavbar = () => {
    
    const dispatch = useDispatch();
    const navMenuOpen = useSelector(state => state.navbar.navMenuOpen)

    const toggleMenu = (e) => {
        e.preventDefault()
        console.log('tog menu f', dispatch,navMenuOpen)
        dispatch({type:'toggleNavbar', payload:navMenuOpen})
    }
    return { toggleMenu }

}
export default useNavbar;