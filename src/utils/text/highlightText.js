/**
 * Text Highlighting Utilities
 * See docs/highlightText.md for usage
 */

export function parseHighlightedText(text) {
  if (!text || typeof text !== 'string') {
    return [{ type: 'normal', text: text || '' }];
  }

  const segments = [];
  const regex = /"([^"]+)"/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: 'normal',
        text: text.slice(lastIndex, match.index),
      });
    }

    segments.push({
      type: 'highlight',
      text: match[1],
    });

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    segments.push({
      type: 'normal',
      text: text.slice(lastIndex),
    });
  }

  return segments.length > 0 ? segments : [{ type: 'normal', text }];
}

export function hasHighlightedText(text) {
  if (!text || typeof text !== 'string') {
    return false;
  }
  return /"[^"]+"/g.test(text);
}

export function stripHighlightPattern(text) {
  if (!text || typeof text !== 'string') {
    return text || '';
  }
  return text.replace(/"([^"]+)"/g, '$1');
}
