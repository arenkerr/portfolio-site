import Markdown from 'react-markdown';
import rehypeExternalLinks from 'rehype-external-links';

interface MarkdownTextProps {
  text: string;
}

const MarkdownText = ({ text }: MarkdownTextProps) => (
  <Markdown
    rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }]]}
    className="markdown"
  >
    {text}
  </Markdown>
);

export default MarkdownText;
