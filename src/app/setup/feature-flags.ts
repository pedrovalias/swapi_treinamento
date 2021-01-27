export const isEnabled = (key: string) => {
  switch (key) {
    case 'fake':
    case 'estoriaA': // tratamento correto do id (ao invés de url) e da população e diametro para null ao invés de "unknown"
      return true;
    case 'estoriaB': // persistência no mongodb
    default:
      return false;
  }
};
