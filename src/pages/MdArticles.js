import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const markdown = '# Oy'
const MdArticles = () => {
    return (
        <ReactMarkdown plugins={[gfm]} children={markdown} />
    )
}
export default MdArticles