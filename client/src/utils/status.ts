type OrderStatus = 'pending' | 'inProgress' | 'finished';
type ZodStatus = 'Pendiente' | 'En proceso' | 'Finalizado';
/**
 * La validación de zod regresa 'Pendiente', 'En proceso', 'Finalizado' como status,
 *  pero en la base de datos se guardan como 'pending', 'inProgress', 'finished'.
 * Por conveniencia en el Frontend, se generan como 'Pendiente', 'En proceso', etc.
 */

export const convertStatusFromZod = (status: ZodStatus): OrderStatus => {
  switch (status) {
    case 'Pendiente':
      return 'pending';
    case 'En proceso':
      return 'inProgress';
    case 'Finalizado':
      return 'finished';
    default:
      return 'pending';
  }
};
export const convertStatusFromPrisma = (status: OrderStatus): ZodStatus => {
  switch (status) {
    case 'pending':
      return 'Pendiente';
    case 'inProgress':
      return 'En proceso';
    case 'finished':
      return 'Finalizado';
    default:
      return 'En proceso';
  }
};
