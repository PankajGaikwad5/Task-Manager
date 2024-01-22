import connectMongoDB from '../../../libs/mongodb';
import Topic from '../../../models/topic';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ msg: 'Topic Created' }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topic = await Topic.find();
  return NextResponse.json({ topic });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ msg: 'deleted' }, { status: 200 });
}
