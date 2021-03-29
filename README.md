# Axiom
*Inspired by doc browsers like MDWiki and DevBook*

An experimental web file explorer for documentation. Point to a repo, drive, box or CDN and browse markdown as styled pages using built in themes.  

## Main goals

- Select a theme with axiom.json if present
- Set custom color schemes in axiom.json if present
- Use light / dark themes by pointing to seperate css files in axiom.json if present
- Control display and expansion of navigation panel with axiom.json if present

```json
{
    // simple 
    "main":"docs/",
    "theme":"flat",

    // custom colors
    "light-colors":{
        "primary":"#2C09A3",
        "secondary":"#222"
    },
    "dark-colors":{
        "primary":"#222",
        "secondary":"#8800CC"
    },

    // full custom themes
    "light-theme":"my-light-theme.css",
    "dark-theme":"my-dark-theme.css",

    // control collapse / expansion of nav items
    "nav-expand": 2 // automatically expand top two dir levels, leave sub dirs collapsed
    // OR
    // "nav-expand": 0 // collapse all dirs and sub dirs
    // OR 
    // omit rule to expand all dirs and sub dirs
}
```
