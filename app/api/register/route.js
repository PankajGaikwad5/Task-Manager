import { NextResponse } from 'next/server';
import connectMongoDB from '../../../libs/mongodb';
import User from '../../../models/user';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedpass = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, password: hashedpass });
    return NextResponse.json({ msg: 'user registered' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { msg: 'An error occured while registeration' },
      { status: 500 }
    );
  }
}
