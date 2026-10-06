import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const HOST = 'nexlorn.com.br';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

export const onSuccess = async ({ constants }) => {
  if (process.env.CONTEXT !== 'production') return;

  try {
    const files = await readdir(constants.PUBLISH_DIR);
    const keyFile = files.find((file) => /^[a-f0-9]{32}\.txt$/.test(file));
    if (!keyFile) throw new Error('arquivo de chave não encontrado');

    const key = keyFile.replace('.txt', '');
    const sitemap = await readFile(join(constants.PUBLISH_DIR, 'sitemap.xml'), 'utf8');
    const urlList = [...sitemap.matchAll(/<loc>(.+?)<\/loc>/g)].map((match) => match[1]);

    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList }),
    });
    console.log(`IndexNow: ${urlList.length} URLs enviadas (status ${response.status})`);
  } catch (error) {
    console.log(`IndexNow não enviado: ${error.message}`);
  }
};
