import { writable } from 'svelte/store';
//import readdirp from 'readdirp';
//import fs from 'fs-extra';
//import MarkdownIt from 'markdown-it';

export const docpages = writable([]);
// let loaded = false;
//
// export async function getMarkdownFiles(host) {
//   if (loaded) return;
//   const url = `http://${host}/api/docs/`;
//   const res = await fetch(url);
//   const data = await res.json();
//   docpages.set(data);
//   loaded = true;
// }
//
// getMarkdownFiles();
//
//
// export const getMarkdownFiles = async () => {
//   const url = `http://localhost:3000/src/routes/api/docs`;
//   const res = await myFetch(url);
//   const data = await res.json();
//   docpages.set(data);
// }
//
//   const url = `/routes/api/docs`;
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data);
//   //const markdownFiles = [];
//   // for await (const entry of readdirp(docsMarkdownDirectory)) {
//   //   console.log(entry);
//   //   // const file = new File(entry.basename, entry.fullPath);
//   //   //markdownFiles.push(file);
//   // }
//
//   // const pages = [
//   //   {
//   //     id: "1",
//   //     title: "Hello",
//   //     content: "something cool",
//   //   },
//   //   {
//   //     id: "2",
//   //     title: "Bye",
//   //     content: "something cool",
//   //   }
//   // ]
//   docpages.set(data);
// }
//
// getMarkdownFiles(page);

// let md = new MarkdownIt();
// var result = md.render('# markdown-it rulezz!');
// console.log(result);
