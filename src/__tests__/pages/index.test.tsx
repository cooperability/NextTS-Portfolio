import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../../pages/index' // Adjusted import path

// Store the original Math.random and restore it after tests
const originalMathRandom = global.Math.random

describe('Home', () => {
  beforeEach(() => {
    // Potentially mock Math.random to return a consistent different value on second call if needed
    // For the "check for change" strategy, this might not be strictly necessary
    // but good for ensuring the underlying mechanism is hit.
    let callCount = 0
    global.Math.random = jest.fn(() => {
      callCount++
      if (callCount <= 1) return 0.1 // first call (initial render)
      return 0.8 // subsequent calls (after button click)
    })
  })

  afterEach(() => {
    global.Math.random = originalMathRandom // Restore original Math.random
    jest.restoreAllMocks() // Clean up Jest's own mocks like jest.fn()
  })

  it('renders the introductory heading', () => {
    render(<Home />)
    const heading = screen.getByText(/Cooper!/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders an initial quote and changes it on button click', () => {
    render(<Home />)

    // Get the initially displayed quote element
    // The quote is in a <span> directly within the <section className={styles.headingMd}>
    // and it has suppressHydrationWarning. A more robust selector might be needed if text is too generic.
    // Let's assume the quote is the only direct text node in a <span> that's a child of the section.
    const quoteSection = screen
      .getByText(/A random quote that speaks to me:/i)
      .closest('section')
    expect(quoteSection).not.toBeNull()
    // Find the span that holds the quote. It's the last span in its direct parent div.
    const quoteDisplay = quoteSection!.querySelector('.socialIconRow + span')
    expect(quoteDisplay).toBeInTheDocument()
    expect(quoteDisplay!.textContent).not.toBeNull()
    const initialQuoteText = quoteDisplay!.textContent

    const refreshButton = screen.getByRole('button')
    fireEvent.click(refreshButton)

    const newQuoteDisplay = quoteSection!.querySelector('.socialIconRow + span')
    expect(newQuoteDisplay).toBeInTheDocument()
    expect(newQuoteDisplay!.textContent).not.toBeNull()
    const newQuoteText = newQuoteDisplay!.textContent

    expect(newQuoteText).not.toBe(initialQuoteText)
  })

  it('renders navigation links with correct href attributes', () => {
    render(<Home />)
    expect(screen.getByRole('link', { name: /code/i })).toHaveAttribute(
      'href',
      'https://github.com/cooperability'
    )
    expect(screen.getByRole('link', { name: /write/i })).toHaveAttribute(
      'href',
      'https://cooperability.substack.com/'
    )
    expect(screen.getByRole('link', { name: /interview/i })).toHaveAttribute(
      'href',
      'https://www.youtube.com/@cooperability'
    )
  })

  it('renders the profile image with correct alt text', () => {
    render(<Home />)
    expect(screen.getByAltText('Cooper Reed')).toBeInTheDocument()
  })
})
