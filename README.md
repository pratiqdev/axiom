# AXIOM (3)

<!-- This is a new setup of Axiom's search and categorization methods -->


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
- Body: an array of elements, which can contain any number of:
    - Heading: subheadings slightly smaller than main
    - Text: standard blocks of text which contain:
        
        - **Bold** | `<b>Bold</b>`
        - *Italic* | `<i>italic</i>`
        - ***Bold and italic*** `<b><i>both</i></b>`
        - Link [Duck Duck Go](https://duckduckgo.com) | `<a href="">link name</a>`
        - ``code... backticks can be `escaped` `` | `<pre><code>Code</code></pre>` | `<Highlight lang={lang} code={code} />`
        - output ? just regular text in markdown? | styled like console output in app
        - keyboard keys < kbd > K </ kbd >
        - hr (---)
        - br < br >

    - Code: syntax highlighted code snippets
    - Codepens: embedded codepen examples
    - Blockquotes: styled blocks of text, can contain headings, lists, styled text
    - Links:  a href/target
    - Images:        ![Philadelphia's Magic Gardens. This place was so cool!](/img/garden.jpg "Magic Gardens")
    - Linked image  [![An old rock](/assets/images/shiprock.jpg "Shiprock, New Mexico")](https://www.flickr.com/photos/be/31839864/in)
    - Keyboard keys: <kbd>Ctrl</kbd> + <kbd>V</kbd>
    - Buttons: standalone external / internal links should look like button with -> facing right<br>
    scrolling buttons (href="#here") should look like button with downward arrow V

- Footer: a footer section with extra links and suggestions:

    - Next reference in list
    - List of other ref(s) with matching tag(s)
    - etc.

---


### MVP

1. Sorted list of references / definitions / examples
2. Links to other internal references
3. Categorized
4. Searchable
5. Curated sections / tours / 'instructional articles'

---



and can be converted from json and downloaded as markdown, text, csv/excel??
 <!-- or render page as pdf???? -->


extra parts used in axiom articles that do NOT exist in markdown:

- codepen - just show the link in md
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
