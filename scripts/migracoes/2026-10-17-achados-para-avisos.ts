// Migração única (2026-10-17): o tipo "achado" passa a se chamar "aviso" (D37).
// "Achado de auditoria" era uma metáfora do mantenedor e confundia com as auditorias reais do
// TCU e da CGU. Renomeia pasta, ids, tipo, campo tipo_achado e as menções em texto.
import { mkdirSync, readFileSync, readdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DADOS = join(import.meta.dirname, "..", "..", "dados");
mkdirSync(join(DADOS, "avisos"), { recursive: true });
for (const nome of readdirSync(join(DADOS, "achados"))) {
  renameSync(join(DADOS, "achados", nome), join(DADOS, "avisos", nome));
}

const trocar = (texto: string) =>
  texto
    .replace(/\bachado:/g, "aviso:")
    .replace(/"tipo_achado"/g, '"tipo_aviso"')
    .replace(/"tipo": "achado"/g, '"tipo": "aviso"')
    .replace(/\bachados\b/g, "avisos")
    .replace(/\bAchados\b/g, "Avisos")
    .replace(/\bachado\b/g, "aviso")
    .replace(/\bAchado\b/g, "Aviso");

for (const pasta of readdirSync(DADOS)) {
  for (const nome of readdirSync(join(DADOS, pasta))) {
    if (!nome.endsWith(".json")) continue;
    const caminho = join(DADOS, pasta, nome);
    const antes = readFileSync(caminho, "utf8");
    const depois = trocar(antes);
    if (depois !== antes) writeFileSync(caminho, depois);
  }
}
console.log("Achados renomeados para avisos.");
