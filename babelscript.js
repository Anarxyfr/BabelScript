/**
 * [HtmlScript]{@link https://github.com/anarxyfr/BabelScript}
 *
 * @version 1.0.0
 * @author anarxyfr
 * @copyright anarxyfr 2025
 * @license MIT
 */

(function () {
  const babelScript = document.createElement('script');
  babelScript.src = 'https://unpkg.com/@babel/standalone@7.28.3/babel.min.js';
  babelScript.async = true;
  document.head.appendChild(babelScript);
  babelScript.onload = function () {
    const babelTags = document.getElementsByTagName('babel');
    Array.from(babelTags).forEach(tag => {
      const code = tag.textContent;
      try {
        const transpiledCode = Babel.transform(code, {
          presets: ['es2015', 'react']
        }).code;
        const script = document.createElement('script');
        script.textContent = transpiledCode;
        document.body.appendChild(script);
      } catch (error) {
        console.error('Error transpiling or executing Babel code:', error);
      }
    });
  };
})();
