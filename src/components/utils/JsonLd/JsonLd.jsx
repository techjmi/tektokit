/**
 * JsonLd Component
 * See utils/docs/jsonld.md for usage
 */

'use client';

/**
 * Remove undefined/null values recursively
 */
const removeUndefined = (obj) => {
  if (obj === null || obj === undefined) return null;
  if (typeof obj !=='object') return obj;
  if (Array.isArray(obj)) {
    return obj
      .map(removeUndefined)
      .filter((item) => item !== null && item !== undefined);
  }

  const cleaned = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined && value !== null) {
      const cleanedValue = removeUndefined(value);
      if (cleanedValue !== null && cleanedValue !== undefined) {
        cleaned[key] = cleanedValue;
      }
    }
  }
  return Object.keys(cleaned).length > 0 ? cleaned : null;
};

const JsonLd = ({ data, id }) => {
  if (!data) return null;

  try {
    // Handle array of schemas
    if (Array.isArray(data)) {
      return (
        <>
          {data.map((schema, index) => (
            <JsonLd key={id ? `${id}-${index}` : index} data={schema} />
          ))}
        </>
      );
    }

    // Clean the data
    const cleanedData = removeUndefined(data);
    
    if (!cleanedData) return null;

    return (
      <script
        type="application/ld+json"
        id={id}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cleanedData, null, 0),
        }}
      />
    );
  } catch (error) {
    if (process.env.NODE_ENV ==='development') {
      console.error('Error rendering JSON-LD:', error);
    }
    return null;
  }
};

export default JsonLd;
