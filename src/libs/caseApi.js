const DEMO_MODE = process.env.REACT_APP_DEMO_MODE === 'true';
const API_URL = process.env.REACT_APP_API_URL || '';

function demoAnalyzeCase({ caseTitle, caseDescription }) {
  const text = `${caseTitle} ${caseDescription}`.toLowerCase();
  let classification = 'Civil Matter';
  if (/criminal|theft|murder|assault|fir|police/.test(text)) classification = 'Criminal Case';
  else if (/property|land|lease|rent|tenant/.test(text)) classification = 'Property Dispute';
  else if (/family|divorce|custody|marriage/.test(text)) classification = 'Family Law';
  else if (/contract|breach|agreement|commercial/.test(text)) classification = 'Commercial / Contract';

  return {
    classification,
    suggestions:
      'Review applicable statutes, gather supporting documents, and consult relevant precedents. Consider mediation before litigation where appropriate.',
    summary: `Case "${caseTitle}" involves ${caseDescription.slice(0, 120)}${caseDescription.length > 120 ? '...' : ''}. Preliminary AI review classifies this as a ${classification.toLowerCase()} requiring structured legal assessment.`,
  };
}

export async function analyzeCase(formData) {
  if (DEMO_MODE) {
    await new Promise((r) => setTimeout(r, 800));
    return demoAnalyzeCase(formData);
  }

  const res = await fetch(`${API_URL}/analyze-case`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!res.ok) throw new Error('Failed to process case.');
  return res.json();
}
