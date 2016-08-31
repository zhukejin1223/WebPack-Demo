import './src/style/button.scss';
import './src/style/input.scss';

import React from 'react';
import { render } from 'react-dom';

var myDivElement = <p>这是一个 <mark>React</mark> 测试页.</p>

render(myDivElement, document.getElementById('root'));