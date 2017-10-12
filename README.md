# multiple-select

EL modulo contiene una directiva para el manejo de datos entre dos elementos select de selección multiple.

## Instalar
1) Descargar el archivo dist/multi.min.js
2) Incluirlo en tu proyecto
3) Usar la directiva

```html
<div class="main multiple-select" data-key="id" data-value="title">
  <div class="available">
    <select multiple>
      <option ng-attr-value="{{val}}" ng-repeat="val in values">{{val}}</option>
    </select>
  </div>
  <div class="center">
    <br>
    <a class="right" href="javascript: void(0);"><i class="fa fa-arrow-circle-o-right"></i></a>
    <br>
    <a class="left" href="javascript: void(0)"><i class="fa fa-arrow-circle-o-left"></i></a>
  </div>
  <div class="selected">
    <select model="options" multiple>
      <option ng-repeat="item in options" ng-attr-value="{{item.id}}">{{item.title}}</option>
    </select>
  </div>
</div>
```

