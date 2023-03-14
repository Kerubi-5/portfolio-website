const space = process.env.SPACE_ID;
const accessToken = process.env.CONTENT_DELIVERY_API;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries(myContent) {
  const entries = await client.getEntries({ content_type: myContent });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export default fetchEntries;
