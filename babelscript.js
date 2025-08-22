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
            babelScript.onload = function () {
                console.log('Babel loaded successfully');
                const babelTags = document.getElementsByTagName('babel');
                if (babelTags.length === 0) {
                    console.warn('No <babel> tags found');
                    return;
                }
                Array.from(babelTags).forEach(tag => {
                    const code = tag.textContent.trim();
                    if (code) {
                        console.log('Original code:', code);
                        try {
                            const transpiledCode = Babel.transform(code, {
                                presets: ['es2015', 'react']
                            }).code;
                            console.log('Transpiled code:', transpiledCode);
                            const script = document.createElement('script');
                            script.textContent = transpiledCode;
                            tag.parentNode.replaceChild(script, tag);
                        } catch (error) {
                            console.error('Error transpiling or executing Babel code:', error);
                            tag.innerHTML = `<p>Error: ${error.message}</p>`;
                        }
                    } else {
                        console.warn('Empty <babel> tag detected');
                    }
                });
            };
            babelScript.onerror = function () {
                console.error('Failed to load Babel compiler');
            };
            document.head.appendChild(babelScript);
        })();
