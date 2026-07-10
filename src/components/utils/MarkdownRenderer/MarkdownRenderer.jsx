"use client";

import CodeBlock from '../CodeBlock/CodeBlock';

export default function MarkdownRenderer({ markdown }) {
  if (!markdown) return null;

  // Simple markdown parser for our docs
  const lines = markdown.split('\n');
  const elements = [];
  let currentSection = null;
  let codeBlock = null;
  let tableRows = [];
  let inTable = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith('```')) {
      if (codeBlock) {
        // End code block
        elements.push(
          <div key={i} className="my-4">
            <CodeBlock code={codeBlock.code} language={codeBlock.lang} />
          </div>
        );
        codeBlock = null;
      } else {
        // Start code block
        const lang = line.replace('```', '').trim();
        codeBlock = { lang, code: '' };
      }
      continue;
    }

    if (codeBlock) {
      codeBlock.code += (codeBlock.code ? '\n' : '') + line;
      continue;
    }

    // Headers
    if (line.startsWith('# ')) {
      elements.push(<h1 key={i} className="text-3xl font-bold mt-8 mb-4">{line.slice(2)}</h1>);
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-semibold mt-6 mb-3">{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-medium mt-4 mb-2">{line.slice(4)}</h3>);
    }
    // Tables
    else if (line.startsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      const cells = line.split('|').filter(c => c.trim()).map(c => c.trim());
      
      // Skip separator row
      if (cells[0].startsWith('-')) continue;
      
      tableRows.push(cells);
    } else if (inTable && !line.startsWith('|')) {
      // End table
      if (tableRows.length > 0) {
        const headers = tableRows[0];
        const rows = tableRows.slice(1);

        elements.push(
          <div key={i} className="my-6 overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg">
              <thead className="bg-muted/30">
                <tr className="border-b border-border">
                  {headers.map((h, idx) => (
                    <th key={idx} className="text-left py-3 px-4 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-border/50 last:border-0">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="py-3 px-4 font-mono text-xs">
                        {cell.startsWith('`') && cell.endsWith('`') ? (
                          <code className="text-primary">{cell.slice(1, -1)}</code>
                        ) : (
                          <span className="opacity-80">{cell}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      inTable = false;
      tableRows = [];
    }
    // Paragraphs
    else if (line.trim() && !line.startsWith('#') && !line.startsWith('|')) {
      elements.push(<p key={i} className="text-base opacity-80 my-2 leading-relaxed">{line}</p>);
    }
    // Empty lines
    else if (!line.trim() && elements.length > 0) {
      elements.push(<div key={i} className="h-2" />);
    }
  }

  return <div className="space-y-2">{elements}</div>;
}
