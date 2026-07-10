# highlightText Utilities

Text highlighting utilities for parsing and rendering highlighted text segments.

## Import

```javascript
import { parseHighlightedText, hasHighlightedText, stripHighlightPattern } from 'tektokit';
```

## Functions

### parseHighlightedText(text)

Parse text and extract highlighted segments. Text within double quotes is marked as highlighted.

**Parameters:**
- `text` (string) - Text with highlighting patterns

**Returns:**
- Array of segments with `type` ('normal' or 'highlight') and `text`

**Example:**
```javascript
import { parseHighlightedText } from 'tektokit';

const text = 'He is a "Social Activist" from "Kadwa"';
const segments = parseHighlightedText(text);

// Returns:
// [
//   { type: 'normal', text: 'He is a ' },
//   { type: 'highlight', text: 'Social Activist' },
//   { type: 'normal', text: ' from ' },
//   { type: 'highlight', text: 'Kadwa' }
// ]
```

### hasHighlightedText(text)

Check if text contains highlighting patterns (double quotes).

**Parameters:**
- `text` (string) - Text to check

**Returns:**
- Boolean

**Example:**
```javascript
import { hasHighlightedText } from 'tektokit';

hasHighlightedText('Regular text');                    // false
hasHighlightedText('Text with "highlight"');           // true
hasHighlightedText('Multiple "highlights" here "ok"'); // true
```

### stripHighlightPattern(text)

Remove highlighting patterns from text (removes quotes, keeps content).

**Parameters:**
- `text` (string) - Text with highlighting patterns

**Returns:**
- String (plain text without quotes)

**Example:**
```javascript
import { stripHighlightPattern } from 'tektokit';

stripHighlightPattern('He is a "Social Activist"');
// Returns: 'He is a Social Activist'

stripHighlightPattern('Regular text');
// Returns: 'Regular text'
```

## Usage Examples

### Rendering Highlighted Text

```javascript
import { parseHighlightedText } from 'tektokit';

function HighlightedText({ text }) {
  const segments = parseHighlightedText(text);
  
  return (
    <p>
      {segments.map((segment, index) => (
        segment.type === 'highlight' ? (
          <span key={index} className="text-primary font-semibold">
            {segment.text}
          </span>
        ) : (
          <span key={index}>{segment.text}</span>
        )
      ))}
    </p>
  );
}

// Usage
<HighlightedText text='He is a "Social Activist" from "Kadwa"' />
```

### With Custom Styling

```javascript
function StyledHighlight({ text, highlightClass = 'bg-yellow-200' }) {
  const segments = parseHighlightedText(text);
  
  return (
    <div>
      {segments.map((segment, index) => (
        segment.type === 'highlight' ? (
          <mark key={index} className={highlightClass}>
            {segment.text}
          </mark>
        ) : (
          segment.text
        )
      ))}
    </div>
  );
}
```

### Conditional Rendering

```javascript
import { hasHighlightedText, parseHighlightedText, stripHighlightPattern } from 'tektokit';

function SmartText({ text }) {
  if (!hasHighlightedText(text)) {
    return <p>{text}</p>;
  }
  
  const segments = parseHighlightedText(text);
  return (
    <p>
      {segments.map((segment, index) => 
        segment.type === 'highlight' ? (
          <strong key={index}>{segment.text}</strong>
        ) : (
          segment.text
        )
      )}
    </p>
  );
}
```

### SEO Meta Description

```javascript
import { stripHighlightPattern } from 'tektokit';

const rawText = 'Best "Web Development" services in "New York"';
const metaDescription = stripHighlightPattern(rawText);
// Use in meta tag: 'Best Web Development services in New York'
```

## Pattern

The utilities use double quotes (`"..."`) to identify highlighted segments:
- `"highlighted text"` - Will be highlighted
- `Regular text` - Normal text
- Mix: `Some "highlighted" and normal text`

## Notes

- Safe for null/undefined values
- Returns empty array for invalid input
- Non-destructive - original text unchanged
- Works with multiple highlighted segments
- Highlighted segments cannot be nested
