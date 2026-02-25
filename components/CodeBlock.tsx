"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  children: string;
  language?: string;
  showLineNumbers?: boolean;
}

const customTheme = {
  ...oneDark,
  'pre[class*="language-"]': {
    ...oneDark['pre[class*="language-"]'],
    background: "#1b1913",
    margin: 0,
    padding: "1.25rem",
    borderRadius: "8px",
    border: "1px solid #201e18",
  },
  'code[class*="language-"]': {
    ...oneDark['code[class*="language-"]'],
    background: "transparent",
    fontFamily: "var(--font-code), 'JetBrains Mono', monospace",
    fontSize: "0.9rem",
    lineHeight: "1.6",
  },
};

export function CodeBlock({
  children,
  language = "typescript",
  showLineNumbers = false,
}: CodeBlockProps) {
  const code = children?.trim() || "";

  return (
    <div className="my-4 overflow-hidden rounded-lg">
      <SyntaxHighlighter
        language={language}
        style={customTheme}
        showLineNumbers={showLineNumbers}
        wrapLines
        customStyle={{
          margin: 0,
          background: "#1b1913",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
