const langs = {},
	sanitize = str => str?.replaceAll?.('<', '&lt;')?.replaceAll?.('>', '&gt;');

/**
 * @function setTheme Load a theme file (css)
 * @param {String} theme the url of the css file
 */
export var setTheme = theme => {
	let link = document.createElement('link');
	link.rel = 'stylesheet'; 
	link.type = 'text/css';
	link.href = theme; 
	document.head.appendChild(link);
}

/**
 * @async
 * @function highlightText A function that highlight a string text and return it
 * @example
 * elm.innerHTML = highlightText(code, 'js');
 * @param {String} src the text content to be highlighted
 * @param {String} lang the lang name ex: 'js'
 * @returns {String} the highlighted as String text
 */
export async function highlightText(src, langname) {
	if (!src)
		return src;

	let res = '',
		cachedMatch = [],
		index,
		match,
		firstPart,
		firstIndex,
		lastIndex,
		firstMatch,
		i = 0,
		//make a fast shallow copy to bee able to splice lang without change the original one
		lang = [...(await (langs[langname] ??= import(`./languages/${langname}.js`))).default];

	const addUnsafe = (str = '', type) => res += type ? `<span class='syn-${type}'>${str}</span>` : str,
		add = (str = '', type) => addUnsafe(sanitize(str), type);

	while (i < src.length) {
		firstIndex = null;
		for (let a = lang.length; --a >= 0;) {
			let part = lang[a];
			if (cachedMatch[a] == undefined || cachedMatch[a].match.index < i) {
				part.match.lastIndex = i;
				match = part.match.exec(src);
				if (match === null) {
					lang.splice(a, 1);
					cachedMatch.splice(a, 1);
					continue;
				}
				cachedMatch[a] = { match, lastIndex: part.match.lastIndex };
			}
			index = cachedMatch[a].match.index;
			match = cachedMatch[a].match[0];
			if (match && (index <= firstIndex || firstIndex === null)) {
				firstPart = part;
				firstIndex = index;
				firstMatch = match;
				lastIndex = cachedMatch[a].lastIndex;
			}
		}
		if (firstIndex === null)
			break;
		add(src.slice(i, firstIndex));
		i = lastIndex;
		if (firstPart.lang)
			addUnsafe(await highlightText(firstMatch, firstPart.lang), firstPart.type + ' lang-' + firstPart.lang);
		else
			add(firstMatch, firstPart.type);
	}
	add(src.slice(i, src.length));
	return res;
}

/**
 * @async
 * @function highlightElement highlight a element code with a 'pre' parent
 * @param {HTMLElement} elm the code elm
 * @param {String} [lang=] the lang used for syntax highlighting by default is found in the className of the parent or the elm it self
 */
export async function highlightElement(elm, lang = (elm.className + ' ' + elm.parentNode.className).match(/lang-([\w-]+)/)?.[1]) {
	elm.parentNode.dataset.lang = lang;
	elm.parentNode.classList.add('lang-' + lang);
	elm.innerHTML = await highlightText(elm.textContent, lang);
}

/**
 * highlight all element that follow this schema
 * ```html
 * <pre class="lang-*">
 * 	<code>
 * 	</code>
 * </pre>
 * ```
 */
export async function highlightAll() {
	document.querySelectorAll('pre[class*="lang-"] > code').forEach(elm => !elm.parentNode.dataset.lang && highlightElement(elm));
}