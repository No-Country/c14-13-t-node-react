import { Prisma } from '@prisma/client';
import { ZodError } from 'zod';
import { NextResponse } from 'next/server';

export const handlePrismaError = (error: Prisma.PrismaClientKnownRequestError) => {
  switch (error.code) {
    case 'P2001':
      return NextResponse.json(
        {
          message: 'El registro buscado no existe',
          error,
        },
        { status: 404 },
      );
    case 'P2002':
      return NextResponse.json(
        {
          message: 'Ya existe un usuario con este email o nombre de usuario',
          error,
        },
        { status: 409 },
      );
    case 'P2003':
      return NextResponse.json(
        {
          message: 'La restricción de clave externa falló en el campo: ' + error.meta?.target,
          error,
        },
        { status: 409 },
      );
    case 'P2004':
      return NextResponse.json(
        {
          message: 'Una restricción falló en la base de datos',
          error,
        },
        { status: 400 },
      );
    case 'P2010':
      return NextResponse.json(
        {
          message: 'La consulta en bruto falló',
          error,
        },
        { status: 400 },
      );
    case 'P2011':
      return NextResponse.json(
        {
          message: 'Violación de la restricción nula en la restricción: ' + error.meta?.target,
          error,
        },
        { status: 400 },
      );
    case 'P2012':
      return NextResponse.json(
        {
          message: 'Falta un valor requerido',
          error,
        },
        { status: 400 },
      );
    case 'P2013':
      return NextResponse.json(
        {
          message: 'Falta el argumento requerido para el campo',
          error,
        },
        { status: 400 },
      );
    case 'P2014':
      return NextResponse.json(
        {
          message: 'El cambio que intentas hacer violaría la relación requerida',
          error,
        },
        { status: 400 },
      );
    case 'P2015':
      return NextResponse.json(
        {
          message: 'No se pudo encontrar un registro relacionado',
          error,
        },
        { status: 404 },
      );
    case 'P2016':
      return NextResponse.json(
        {
          message: 'Error de interpretación de consulta',
          error,
        },
        { status: 400 },
      );
    case 'P2025':
      return NextResponse.json(
        {
          message:
            'Una operación falló porque depende de uno o más registros que eran necesarios pero no se encontraron',
          error,
        },
        { status: 400 },
      );
    default:
      return NextResponse.json(
        {
          message: 'Error desconocido de Prisma',
          error,
        },
        { status: 500 },
      );
  }
};

export const handleZodError = (error: ZodError) => {
  // Get the first validation error
  const firstError = error.issues[0];

  // Construct a human-readable error message
  const message = `${firstError.path[0]}: ${firstError.message}`;

  return NextResponse.json(
    {
      message,
      error,
    },
    { status: 400 },
  );
};

export const handleCommonError = (error: unknown) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // Handle known Prisma errors
    return handlePrismaError(error);
  } else if (error instanceof ZodError) {
    // Handle Zod validation errors
    return handleZodError(error);
  } else {
    // Handle other errors
    return NextResponse.json(
      {
        message: 'Error interno del servidor',
        error,
      },
      { status: 500 },
    );
  }
};
