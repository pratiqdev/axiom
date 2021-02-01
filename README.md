# AXIOM (3)

<!-- This is a new setup of Axiom's search and categorization methods -->

- [AXIOM (3)](#axiom--3-)
  - [These pages will all consist of the following components:](#these-pages-will-all-consist-of-the-following-components-)
  - [MVP](#mvp)
  - [Markdown Syntax](#markdown-syntax)
  - [HTML Syntax](#html-syntax)
<!-- toc --> 
Axiom is intended to be used as personal notes and reference of skills, progress and methods. Axiom: searchable, categorical, timestamped collection of json objects of the following types:

1. 'References' - an documentation-themed collection, utilizing all components
2. 'Concepts' - an article-themed 'simple' explanation of concepts, ideas, methodologies, etc.  
3. 'Examples' - codepens, title and description

---

## These pages will all consist of the following components:
    
- Title
- Subtitle
- Tags: an array of strings
- Date: date of article creation
- Grasp: fluency in the given subject
- Table of Contents
- Body: an array of elements, which can contain any number of:
    - Heading: subheadings slightly smaller than main
    - Text: standard blocks of text which contain:
        
        - Bold
        - Italic
        - Bold and italic
        - Link
        - code
        - output
        - keyboard keys
        - hr
        - br

    - Code blocks: syntax highlighted code snippets
    - Sandbox: embedded codepen  /codesandbox examples
    - Blockquotes: styled blocks of text, can contain headings, lists, styled text
    - Links:  
    - Images
    - Linked image  
    - Keyboard keys: 
    - Buttons: standalone external / internal links should look like button with -> facing right<br>
    scrolling buttons (href="#here") should look like button with downward arrow V

- Footer: a footer section with extra links and suggestions:

    - Next reference in list
    - List of other ref(s) with matching tag(s)
    - etc.

---


## MVP

1. Sorted list of references / definitions / examples
2. Links to other internal references
3. Categorized
4. Searchable
5. Curated sections / tours / 'instructional articles'

---

## Routing

All sections of this project (languages) will be in seperate json files...  
how to handle different items structures also??  
will everything look like an article? or only articles have banners??  

How will we handle nested routing for complicated paths? eg: 
- search/
- javascript/
    - operators
    - loops
    - arrays
- javascript/array
    - method: map
    - method: filter
    - method: reduce
- javascript/array/reduce
<!-- next langs json file -->
- html/
- html/concepts
    - semantics
    - responsive design

- html/elements/
    - anchors
    - paragraphs
    - canvas

- html/elements/anchor
- html/elements/canvas
- html/

one json file per language?
one json file for all concepts? 

## Storage

There are many different possible methods to store the data for this site:
- json - easiest to search.. must be parsed / converted to html and markdown
- markdown - not as easy to search.. easy to convert to html. download directly or view as md



## Markdown syntax

- Table of Contents: hyphen-bulleted list of #links [MVP](#mvp)
- h1 - h6 # - ######
- **Bold**
- *Italic*
- ***Bold and italic***
- Link [Duck Duck Go](https://duckduckgo.com) 
- ``code... backticks can be `escaped` ``
- output ? just regular text in markdown?
- Keyboard keys: <kbd>Ctrl</kbd> + <kbd>V</kbd>
- hr < hr >
- br < br >
- Images:        ! [  string  ] (  /img/file.jpg   "Alt text / hover text" )
- Linked image  [![An old rock](/assets/images/shiprock.jpg "Shiprock, New Mexico")](f.com/)


## HTML syntax
- Table of Contents: unordered list  `<ul><li><a href="#item-name">Item Name</a></li></ul>`
- `<h1> - <h6>`
- `<b>Bold</b>`
- `<i>italic</i>`
- `<b><i>both</i></b>`
- `<a href="">link name</a>`
- `<pre><code>Code</code></pre>` | `<Highlight lang={lang} code={code} />`
- output ? styled like console output in app
- keyboard keys < kbd > K </ kbd >
- hr `<hr />`
- br `<br />`





















and can be converted from json and downloaded as markdown, text, csv/excel??
 <!-- or render page as pdf? then download it, without rendering on client? -->


extra parts used in axiom articles that do NOT exist in markdown:

- codepen - just show the link in md
- tags
- progress bars
- is that it???
  
---

use a special character or sequence to omit elements from markdown?  md-omit  ?  
use a special character or sequence to only show elements in markdown?  md-only ?  
append a cool branded heading, commented out, at the top of all md files?

---

## how would i differentiate between multiple references that have the same title?

eg: /php/loop, /js/loop

---

## totally different sections for different languages seems fine... but what about searching for them?
  
- would all 'loop' items would appear in the list?

---

## if objects are in differnt json files, how does that effect searching?
    
- would a separate search need to be performed on each set?
- would they be ordered by lang instead of relevance?
- i think 50 most relevant items should appear in order of relevance

---

## Search order

- return all matching titles (most specific)
- if no match in titles: return all with matching word in tags
    - if no match in tags: return all with matching word in subtitles
    - if no subtitles: return all with matching text from body (least specific)

## how would we create a table of contents?

- toc could be created from:
  - an array
  - any element in the body that has a certain tag, like headings, could be listed in the toc
  - 