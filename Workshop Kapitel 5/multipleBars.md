#Setting Bars

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

Höhe der Balken verändern
```
<div style="height: 75px;"></div>
```
Entweder man schreibt direkt in den `Body` Bereich und gibt beim `style` die Pixel 
an oder man macht einen Funktionsaufruf und verbindet es mit dem `d3.select`

```
.style("height", function(d) {
return d + "px";
});
```
Die `.style` Methode ist sehr hilfreich im Kontext von d3. Dadurch ist es möglich die Werte aus dem `dataset` Array zu berücksichtigen

- Damit die Bars etwas größer sind kann man die Attribute von `.style` etwas anpassen und diese Zeile hinzufügen 
- `var barHeight = d * 5;`

```
.style("height", function(d) {
var barHeight = d * 5; //Scale up by factor of 5
return barHeight + "px";
});
```

- Zusätzlich ist es auch gut die Abstände zu verändern zwischen den Balken mit `margin-right: 2px;` im css File

# Shapes with SVG Elements
Mit SVG kann circle, ellipsen oder Linien darstellen

```
var svg = d3.select("body").append("svg");
```

1. Erstellung einer neuen variable svg
2. So können wir die svg variable überall verwenden, wenn wir Shapes benutzten wollen

Es gibt auch alternativ Schreibweisen

```
var svg = d3.select("body")
.append("svg")
.attr("width", 500)
.attr("height", 50);
```

- Für Width und Height kann man auch Variablen festlegen

-----------------------------------------------------------------

Jetzt können wir ein Circle Shape erstellen, dafür können wir den dataset Array verwenden

```
var circles = svg.selectAll("circle")
               .data(dataset)
               .enter()
               .append("circle");
```

1. Mit der svg Variable können dann Methoden selectAll, data, enter und append verwendet werden
2. Wichtig dabei ist, dass `selectAll()` leere Referenzen auf alle Kreise zurückgibt.
3. var circles ist wichtig, um die Eigenschaften der Shapes zu verändern.

```
circles.attr("cx", function(d, i) {
return (i * 50) + 25;
})
.attr("cy", h/2)
.attr("r", function(d) {
return d;
});
```

- Durch den Aufruf der attr() Methode ist es möglich die Shapes je nach Daten anzupassen. Bei diesem Code Beispiel wird der index value i benutzt, dass gute ist das
D3 die den Wert von Value automatisch verwaltet. Es fängt bei 0 an und multipliziert es mit 50 und so weiter.
- `cy` ist die y-position vom Zentrum jedes Circles. `h` ist die höhe jedes Circles und `r` ist der Radius

1. Als nächstes ist es möglich den Circle Farben zu geben durch die `.attr()` Funktionen

```
.attr("fill", "yellow")
.attr("stroke", "orange")
.attr("stroke-width", function(d) {
return d/2;
});
```


