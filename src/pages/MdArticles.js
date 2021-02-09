import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const markdown = ''
const MdArticles = () => {
    return (
        <ReactMarkdown plugins={[gfm]} children={markdown} />
    )
}