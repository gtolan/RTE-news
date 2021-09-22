import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Components/Navbar'


describe('has a navbar',() => {

    describe('render navbar',() => {
        it('should have a logo, search and menu element', ()=>{
            const {getByAltText, getByTestId} = render(<Navbar />)
            const logo = getByAltText('rte navbar logo');
            expect(logo).toBeInTheDocument();
            const searchIcon = getByAltText('search bar icon button');
            expect(searchIcon).toBeInTheDocument();
            const menuButton = getByTestId('menu button mobile');
            expect(menuButton).toBeInTheDocument();
        })
    })
})

//   fireEvent.click(screen.getByText('Load Greeting'))

//   await waitFor(() => screen.getByRole('alert'))

//   expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
//   expect(screen.getByRole('button')).not.toBeDisabled()
// })

// test('navbar has a menu and login', async () => {

//   const {} = render(<Navar />)

//   fireEvent.click(screen.getByText('Load Greeting'))

//   await waitFor(() => screen.getByRole('alert'))

//   expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
//   expect(screen.getByRole('button')).not.toBeDisabled()
// })