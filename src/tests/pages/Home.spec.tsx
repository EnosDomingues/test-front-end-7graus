import Home from '../../pages'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'


describe('Load more 10 users button', () => {
  it('loads more 10 users after click', async () => {
    render(<Home />)
    
    await waitFor(() => {
      return expect(screen.getByText('Load more 10 users')).toBeInTheDocument()
    }, {
      timeout: 3000
    })

    expect(screen.getAllByText('Email')).toHaveLength(10)
    
    const loadButton = screen.getByText('Load more 10 users')

    fireEvent.click(loadButton) 

    await waitFor(() => {
      return expect(screen.getAllByText('Email')).toHaveLength(20)
    }, {
      timeout: 3000
    })
  })

  it('dont load more 10 users before 2 seconds', async () => {
    render(<Home />)
    
    await waitFor(() => {
      return expect(screen.getByText('Load more 10 users')).toBeInTheDocument()
    }, {
      timeout: 3000
    })

    expect(screen.getAllByText('Email')).toHaveLength(10)
    
    const loadButton = screen.getByText('Load more 10 users')

    fireEvent.click(loadButton) 

    return expect(screen.getAllByText('Email')).toHaveLength(10)

  })
})