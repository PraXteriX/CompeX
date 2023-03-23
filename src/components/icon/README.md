# Icons

These icons are only for the inline icons. (Single color).

1. Find your icon on [fluent](https://fluenticons.co/)
2. Compress your SVG with [SVGOMG](https://jakearchibald.github.io/svgomg/)
3. Add your new SVG code at the to correct place inside <svg></svg> tag in /assets/icons-list.
4. Change **your** <svg> </svg> tags to <symbol> </symbol> and remove svg related stuff from the tag.
5. Change fill color to 'currentcolor'
6. Add an id to your icon.
7. Add id name to the array in components icon/icons.ts.


TODO: 
- Loop through all icon files and generate a combined file.
- Generate the array from this aswell. 
