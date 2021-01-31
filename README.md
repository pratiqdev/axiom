# AXIOM (3)

<!-- This is a new setup of Axiom's search and categorization methods -->


Axiom is intended to be a searchable, categorical, timestamped collection of json objects of the following types:

1. 'References' - an documentation-themed collection, utilizing all components
2. 'Concepts' - an article-themed 'simple' explanation of concepts, ideas, methodologies, etc.  
        
3. 'Examples' - codepens, title and description

---

These pages will all consist of the following components:
    
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







and can be converted from json and downloaded as markdown, text, csv/excel??
 <!-- or render page as pdf???? -->

THIS WOULD REQUIRE all lists / objects to conform to the same items / elements in markdown, or omit them when converting

markdown includes:
- lists ordered/unordered
- headings
- blockquotes: or styled text block
- text can contain:
  - bold
  - italic
  - underline
  - links
  - code
  - output
  - keyboard keys


- links
- images
- code
- output

extra parts used in axiom articles:

- codepen - just show the link in md
- is that it???

use a special character or sequence to omit elements from markdown?  md-omit  ?  
use a special character or sequence to only show elements in markdown?  md-only ?  
append a cool branded heading, commented out, at the top of all md files?

