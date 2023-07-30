import { render } from '@testing-library/react'

import { App } from '../app'

test('renders the logo', () => {
    const { getByTitle } = render(<App />)
    const logo = getByTitle('Logo')
    expect(logo).toBeInTheDocument()
})
