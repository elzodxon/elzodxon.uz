export function removeHtmlTags(htmlString) {
  // Create a new element (a div) to store the HTML content
  const div = document.createElement('div')
  div.innerHTML = htmlString

  // Extract the text content from the div
  const textContent = div.textContent || div.textContent || ''

  // Remove the div from the DOM
  div.remove()

  // Return the plain text without HTML tags
  return textContent.trim()
}
