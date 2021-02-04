# Possible Directory Structure



## Include Everything??

One day the structure may look like this...

- Markup Languages
  - HTML
  - XML
  - YAML
  - SGML
  - etc.
- Style Languages
  - CSS
  - LESS
  - SCSS
  - SASS
- Programming Languages
  - Javascript
  - Java
  - Ruby
  - Python
  - PHP
  - SQL

*What I actually know at this time :*

- Markup Languages
  - HTML
- Style Languages
  - CSS
  - SCSS
- Programming Languages
  - Javascript
  - PHP
  - SQL

> Nesting in too many directories may result in difficult navigation or confusing structure.. 
> 
> jQuery
> 
> javascript
>   - overview
>   - concepts
>   - reference
>   - libraries
>       - jQuery
>           - overview?
>           - reference?
>               - Dollar symbol selector ($)

<br>

-------------------------------------------------------------

<br>

## Put **everything** in 'reference', 'overview', 'sources', etc.

Use variables within each .md file to categorize:
- language
- type - eg. 
  - 'article' - long form, uses all components
  - 'definition' - short, usually text, code and maybe images
  - 'shortcut' - short, usually keyboard shortcuts or short explanations - linked to full explanation article
  - 'example' - title, description, explanation / walkthrough, (all components used)
  - 'external' - links to, short articles about other sites, articles, pages, styles, methods, etc

**Everything looks like an article??**

Well yeah, besides definitions, or sources maybe.. everything will look like a long form article, unless its super simple..
Examples will probably have shorter text bits and more codepens and pictures, maybe collapsible sections if they are different methods or types etc.
Reference will have the full long-form text ramblings


**PROS**
- Searching for items would be more straightforward
- no ridiculous dir structures


**CONS**
- Harder to find in actual directories eg. GitHub, docs/
- docs/ would be massive and confusing (*most* IDEs and sites have advanced search features, so nbd)
- more difficult search config in Axiom