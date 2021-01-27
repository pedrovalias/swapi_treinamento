export const isEnabled = (key: string) => {
  switch (key) {
    case 'fake':
    case 'estoriaB': // persistência no mongodb
      return true;
    case 'estoriaA': // tratamento correto do id (ao invés de url) e da população e diametro para null ao invés de "unknown"
    default:
      return false;
  }
};
