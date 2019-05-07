# Balken zeichnen

```
<div style="display: inline-block;
width: 20px;
height: 75px;
background-color: teal;"></div>
```

1. ersten Balken erstellen in der Index.html
2. Es ist auch möglich die Eigenschaften über ein CSS File zu steuern. Dafür ist es Hilfreich mit Klassen zu arbeiten.

 

In dem styles.css kann man ein `div` mit dem Klassennamen `bar` initialisieren. 
```
div.bar {
display: inline-block;
width: 20px;
height: 75px; /* We'll override height later */
background-color: teal;
}
```

In der Index.html kann man dann ganz einfach im Body-Bereich die Klasse `bar` aufrufen.

```
<div class="bar"></div>
```

---------------------------------------------------------------------------------------

Es ist auch möglich mehrere Balken zu zeichnen
```
var dataset = [5, 10, 15, 20, 25]
```
```
d3.select("body").selectAll("div")
.data(dataset)
.enter()
.append("div")
.attr("class", "bar");
```
1. Dafür erstmal ein Array mit fünf Zahlen erstellen
2. Die Werte vom Array kann man dann weiter verwenden, für andere Beispiele.


Der Funktionsaufruf `.attr("class","bar")` ist wichtig, weil so kann man auf die Eigenschaften Klasse `bar` zugreifen
Für die Abstände zwischen`margin-right: 2px;`