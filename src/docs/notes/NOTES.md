# AXIOM (3)

Axiom is intended to be used as personal notes and reference of skills, progress and methods (basically a wiki). Axiom: searchable, categorical, timestamped collection of objects of the following types:

1. 'References' - an documentation-themed collection, utilizing all components
2. 'Concepts' - an article-themed long-form and 'simple' explanation of concepts, ideas, methodologies, etc.  
3. 'Examples' - codepens/sandbox, explanations, walkthroughs, setups, title, description, etc.

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
    - Buttons: standalone external / internal links should look like button with -> facing right
    - Scrolling buttons (href="#here") should look like button with downward arrow V

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
5. Curated sections  / 'instructional article

## Researh


- Other sevices / sites / apps that programmatically create sites from large collections of md files
- Walking through md / mdx files
- Generating components using mdx-js -> unlikely solution (requires imports in each file)
- How to convert md or mdx to html, with showdown (must be extended for codeblocks / sandboxes), ReactMarkdown or custom parser
- consider replacing char strings with components
    eg: ^Component/^ will be replaced with `<Component />`

! https://github.com/mundimark/awesome-markdown
## Routing

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



## What / why / how?

**How to determine which files require more research, writing, changes or are missing content?**  
Files can be graded according to the following attributes:

- Lint formatting with `markdown-lint`
  - Whitespace
  - Spacing
  - Indentation
  - Heading descension
- Spellcheck
- Total count of:
  - Characters
  - Internal Links
  - External Links
  - Headings
  - Block quotes
  - Code + codeblocks
  - Images
  - Comments
- Does file contain comments? (all data should be renderable)
- Does file contain TOC?
- Does file contain footer content?
  - Suggested next article
  - Related articles
  - References
  - Sources
  - Links used

---


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

---



## Things I need to study

- Travis
- yml
- task runners like grunt
- unit tests - jest, mocha
- barely know ruby
- progress badges
- lifecycle methods
- runkit + npm
- apidoc
- gitter
- react context
- instancing
- recursion
- amoritized
- atomic operations
- mutual exclusion
- semaphores
- auditing
- signatures / security
- data streaming methods
- redux
- immer
- thunk
- formik
- prop types
- noopener
- tagged template literals
- analytics
- lodash
- moment
- docker
- mutability
- coersion
- promises
- async / await
- intersection observer
- node cron
- synthetic events
- heat mapping
- 8 digit hex - octodecimal?
- how to format git commits

## Things I havent made a page for - yet

- css keyframes
- box shadow
- border
- images
- colors
- gradients
- hashtables
- mysql
- nosql
- mongo
- express
- array methods
- gsap
- indexing
- destructuring
- cli
- open/closed

## Try these tools!

- jest
- mocha
- vecteezy
- pixabay
- fontface.ninja
- canva
- color.hunt