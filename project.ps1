#Pug compile
pug .\src\index.pug --pretty -o .\dest
pug .\src\catalog\catalog.pug --pretty -o .\dest\catalog


#sass compile
sass ./src/style.scss ./dest/css/style.css
#sass ./src/catalog/catalog.scss ./dest/css/catalog.css

cls