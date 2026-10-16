// Compartilhado entre os scripts e o site (sem dependências do Node).

/** A entidade está em vigor na data? Datas parciais ("2026", "2026-10") valem pelo período inteiro. */
export function vigenteEm(e: { vigencia?: { de: string | null; ate: string | null } }, data: string): boolean {
  const de = e.vigencia?.de;
  const ate = e.vigencia?.ate;
  if (de && de.padEnd(10, "-01-01".slice(de.length - 4)) > data) return false;
  if (ate && ate.padEnd(10, "-12-31".slice(ate.length - 4)) < data) return false;
  return true;
}
