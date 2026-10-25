// EdgeOne Makers Node.js connectivity probe for Folia.
// This is an isolated test, not the production NetEase API.
export default async function handler(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Cache-Control', 'no-store');
  if (request.method === 'OPTIONS') {
    response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    return response.status(204).end();
  }
  if (request.method !== 'GET') return response.status(405).json({error:'Method not allowed'});
  return response.status(200).json({service:'folia-edgeone-test',ok:true,time:new Date().toISOString()});
}
