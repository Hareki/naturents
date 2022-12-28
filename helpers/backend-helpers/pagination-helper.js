import { connectToDB } from './db-helper';

export async function getTotalPagesNumber({
  docsPerPage,
  filter,
  collection
}) {
  const { errorMessage } = await connectToDB();
  if (errorMessage) return { errorMessage };

  const totalDocs = await collection.count(filter);
  return Math.ceil(totalDocs / docsPerPage);
}
