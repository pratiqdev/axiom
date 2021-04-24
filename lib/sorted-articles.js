import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'pages/resources/articles')

export function getSortedArticlesData() {
  // Get file names under /articles
  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticlesData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the article metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id

      return {
        id,
        ...matterResult.data
      }
  })
  // Sort articles by date
  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}