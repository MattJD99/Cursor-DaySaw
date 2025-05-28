import fs from 'fs';
import path from 'path';
import Markdown from 'markdown-to-jsx';

export default function TermsAndConditionsPage() {
  const filePath = path.join(process.cwd(), 'terms_and_conditions.md');
  let content = '';
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error("Error reading terms and conditions markdown file:", error);
    return <p>Error loading terms and conditions.</p>;
  }

  return (
    <div className="prose lg:prose-xl mx-auto p-4">
      <Markdown>{content}</Markdown>
    </div>
  );
}
