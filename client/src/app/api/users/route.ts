import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import {
  existingUserByEmail,
  existingUserByUsername,
  createUser,
  getUsers,
} from '@/server/services/user';
import { handleCommonError } from '@/server/errorHandlers';
import { AuthBaseSchema as NewUserSchema } from '@/schemas/AuthSchema';

export async function GET(request: Request) {
  try {
    const users = await getUsers();
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, username, password } = NewUserSchema.parse(body);
    const emailExists = await existingUserByEmail(email);
    if (emailExists) {
      return NextResponse.json(
        { message: 'Ya existe un usuario con este email' },
        { status: 409 },
      );
    }
    const usernameExists = await existingUserByUsername(username);
    if (usernameExists) {
      return NextResponse.json({ message: 'El nombre de usuario ya existe' }, { status: 409 });
    }
    const hashedPassword = await hash(password, 10);
    const newUser = await createUser({ email, username, password: hashedPassword });
    return NextResponse.json(
      { user: newUser, message: 'Usuario creado exitosamente' },
      { status: 201 },
    );
  } catch (error) {
    return handleCommonError(error);
  }
}

export function PUT() {
  return NextResponse.json({ message: 'PUT' }, { status: 200 });
}
