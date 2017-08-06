# React Componente Selector de Comunas
[![npm version](http://img.shields.io/npm/v/react-comunas-selector.svg)](https://www.npmjs.com/package/react-comunas-selector)
[![npm](https://img.shields.io/npm/dt/react-comunas-selector.svg?colorB=0d7ebe)](https://www.npmjs.com/package/react-comunas-selector)
[![Dependency Status](https://img.shields.io/david/rhernandog/react-comunas-selector.svg)](https://david-dm.org/rhernandog/react-comunas-selector)
[![Dependency Status](https://img.shields.io/david/dev/rhernandog/react-comunas-selector.svg)](https://david-dm.org/rhernandog/react-comunas-selector?type=dev)
### Descripción
Es un selector estilo dropdown para formularios, que utiliza las comunas de Chile ordenadas por regiones.

El componente de las comunas no tendrá ninguna opción mientras no se seleccione una región. Una vez seleccionada la región, se actualiza el componente principal (`<MainSelector />`) el cual pasa el array con las comunas de la región al componente de las comunas.

---
### Uso
Clonar el repositorio o descargar el archivo ZIP correspondiente. (NPM no displnible aún).

```
$ git clone https://github.com/rhernandog/react-comunas-selector.git
```

Crear un componente principal en el archivo principal de la applicación o dentro de un formulario, y en este componente agregar los componentes para las regiones y las comunas. Importar :
**Archivo de la App / Formulario**
```javascript
import MainSelector from "./modules/MainSelector.jsx";
// importar los datos
import { comunas } from "../api/comunas.js";

// dentro del formulario o del archivo de la app
<MainSelector data={comunas} />
```

Esto debido a que el componente de las regiones devuelve el index de la región seleccionada y con eso se pasa el array con las comunas respectivas. La idea es mantener toda la información en el componente parent.

Los datos de las comunas se encuentran en los siguientes archivos:

- https://gist.github.com/rhernandog/7d055482f5cc803852a762de873bea62
- https://gist.github.com/rhernandog/348c16cd6e8267aa2f752730ac23779e

---
### Ejemplo
- https://rhernandog.github.io/react-comunas-selector/
---
### Problemas
- https://github.com/rhernandog/react-comunas-selector/issues

---

### Autor
Rodrigo Hernando G.
- https://github.com/rhernandog
- https://twitter.com/websnapcl/
- http://codepen.io/rhernando/

---

### Licencia
[MIT](https://opensource.org/licenses/MIT)
