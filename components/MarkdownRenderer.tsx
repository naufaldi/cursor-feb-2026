"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlock } from "./CodeBlock";
import { Components } from "react-markdown";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const components: Components = {
    code({ className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const isInline = !match && !className;

      if (isInline) {
        return (
          <code
            className="bg-surface px-1.5 py-0.5 rounded text-accent text-[0.9em]"
            {...props}
          >
            {children}
          </code>
        );
      }

      return (
        <CodeBlock language={match?.[1] || "text"}>
          {String(children).replace(/\n$/, "")}
        </CodeBlock>
      );
    },
    h1({ children }) {
      return (
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
          {children}
        </h1>
      );
    },
    h2({ children }) {
      return (
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-foreground">
          {children}
        </h2>
      );
    },
    h3({ children }) {
      return (
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
          {children}
        </h3>
      );
    },
    p({ children }) {
      return (
        <p className="text-lg md:text-xl leading-relaxed mb-6 text-foreground/90">
          {children}
        </p>
      );
    },
    ul({ children }) {
      return <ul className="space-y-6 text-lg md:text-xl my-8 list-none">{children}</ul>;
    },
    ol({ children }) {
      return (
        <ol className="space-y-6 text-lg md:text-xl my-8 list-decimal pl-6">
          {children}
        </ol>
      );
    },
    li({ children }) {
      return (
        <li className="text-foreground/90 pl-2 flex items-center gap-3 leading-relaxed">
          <span className="text-accent shrink-0">▸</span>
          <span>{children}</span>
        </li>
      );
    },
    blockquote({ children }) {
      return (
        <blockquote className="border-l-4 border-accent pl-6 py-2 my-6 italic text-foreground-muted text-lg md:text-xl">
          {children}
        </blockquote>
      );
    },
    table({ children }) {
      return (
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse">{children}</table>
        </div>
      );
    },
    thead({ children }) {
      return <thead className="bg-surface">{children}</thead>;
    },
    th({ children }) {
      return (
        <th className="px-4 py-3 text-accent font-semibold border-b border-surface-light text-base md:text-lg">
          {children}
        </th>
      );
    },
    td({ children }) {
      return (
        <td className="px-4 py-3 border-b border-surface-light text-base md:text-lg">
          {children}
        </td>
      );
    },
    hr() {
      return <hr className="border-surface-light my-8" />;
    },
    strong({ children }) {
      return <strong className="font-semibold text-accent">{children}</strong>;
    },
    em({ children }) {
      return <em className="italic text-foreground/80">{children}</em>;
    },
    a({ href, children }) {
      return (
        <a
          href={href}
          className="text-accent hover:text-accent-secondary underline underline-offset-2 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
    img({ src, alt, ...props }) {
      return (
        <img
          src={src}
          alt={alt}
          className="max-h-[60vh] w-auto object-contain rounded-lg my-4"
          {...props}
        />
      );
    },
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
