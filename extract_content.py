"""
Helper script to extract content from Word files and format it for the OOPs Review App
Requires: pip install python-docx
"""

try:
    from docx import Document
    import json
    import sys

    def extract_text_from_docx(file_path):
        """Extract text content from a Word document"""
        doc = Document(file_path)
        content = []
        
        for paragraph in doc.paragraphs:
            text = paragraph.text.strip()
            if text:
                content.append(text)
        
        return content

    def format_for_app(content_lines):
        """Format extracted content for the app's data structure"""
        topics = []
        current_topic = None
        
        for line in content_lines:
            # Check if line looks like a topic heading (all caps, ends with colon, or is short and bold)
            if (len(line) < 100 and 
                (line.isupper() or 
                 line.endswith(':') or 
                 line.startswith('Chapter') or 
                 line.startswith('Topic') or
                 line.startswith('1.') or
                 line.startswith('2.') or
                 line.startswith('3.') or
                 line.startswith('4.') or
                 line.startswith('5.'))):
                if current_topic:
                    topics.append(current_topic)
                current_topic = {
                    'title': line.replace(':', '').strip(),
                    'content': []
                }
            elif current_topic:
                current_topic['content'].append(line)
        
        if current_topic:
            topics.append(current_topic)
        
        return topics

    if __name__ == "__main__":
        if len(sys.argv) < 2:
            print("Usage: python extract_content.py <path_to_word_file.docx>")
            sys.exit(1)
        
        file_path = sys.argv[1]
        print(f"Extracting content from: {file_path}")
        
        content = extract_text_from_docx(file_path)
        topics = format_for_app(content)
        
        print(f"\nFound {len(topics)} topics:")
        for i, topic in enumerate(topics, 1):
            print(f"{i}. {topic['title']}")
        
        print("\nContent preview:")
        print(json.dumps(topics[:2], indent=2))

except ImportError:
    print("python-docx not installed. Install it with: pip install python-docx")
