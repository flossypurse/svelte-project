import readdirp from 'readdirp';

const rootDirectory = process.cwd();
const docsMarkdownDirectory = `${rootDirectory}/docs`

export async function get({params}){
  const markdownFilePaths = [];
  for await (const entry of readdirp(docsMarkdownDirectory)) {
    markdownFilePaths.push(entry);
  }
  return {
    status: 200,
    body: markdownFilePaths,
  }
}
