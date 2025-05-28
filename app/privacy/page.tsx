import fs from 'fs';
import path from 'path';
import Markdown from 'markdown-to-jsx'; // We'll install this next

export default function PrivacyPolicyPage() {
  const filePath = path.join(process.cwd(), 'privacy_policy.md');
  let content = '';
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error("Error reading privacy policy markdown file:", error);
    return <p>Error loading privacy policy.</p>;
  }

  return (
    <div className="prose lg:prose-xl mx-auto p-4">
      <Markdown>{content}</Markdown>
    </div>
  );
}
