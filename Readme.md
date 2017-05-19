React Componente Selector de Comunas 
======
Descripción
------
Es un selector estilo dropdown para formularios, que utiliza las comunas de Chile ordenadas por regiones.

El componente de las comunas no tendrá ninguna opción mientras no se seleccione una región. Una vez seleccionada la región, se actualiza el componente principal (`<MainSelector />`) el cual pasa el array con las comunas de la región al componente de las comunas.

------

Instalación
------
Clonar el repositorio o descargar el archivo ZIP correspondiente. (NPM no displnible aún).

```
$ git clone https://github.com/rhernandog/react-comunas-selector.git
```
Usando NPM:
```
$ npm install react-comunas-selector --save
```
------
Uso
------

Crear un componente `<MainSelector />` en la applicación o dentro de un formulario. Los datos de las comunas se encuentran dentro del 
**Archivo de la App / Formulario**
```javascript
import MainSelector from "./modules/MainSelector.jsx";

// dentro del formulario o del archivo de la app
<MainSelector  />
```

Opcionalmente se puede pasar el atributo **_regiones_** al componente para generar solo el selector para las regiones:
```javascript
import MainSelector from "./modules/MainSelector.jsx";

// solo se genera el selector de las regiones
<MainSelector regiones />
```

Los datos de las comunas se encuentran en los siguientes Gists:

- https://gist.github.com/rhernandog/7d055482f5cc803852a762de873bea62
- https://gist.github.com/rhernandog/348c16cd6e8267aa2f752730ac23779e

------
Ejemplo
------
- https://rhernandog.github.io/react-comunas-selector/
------
Problemas
------
- https://github.com/rhernandog/react-comunas-selector/issues
------
Changelog
------
#### v1.1.0
- Se agrego la posibilidad de generar solo el selector de regiones
- Se publicó el componente en NPM
-----
Autor
------
Rodrigo Hernando G.
- https://github.com/rhernandog
- https://twitter.com/websnapcl/
- http://codepen.io/rhernando/

------
Licencia
------
[MIT](https://opensource.org/licenses/MIT)
