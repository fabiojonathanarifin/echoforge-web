// Structured data is built from our own constants (no user input), so inline
// injection is safe. Escaping "<" prevents a value from closing the script tag.
export default function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
