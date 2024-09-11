import producer from '../../lib/kafka';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { username , email } = await req.json(); 
    if(!username && !email){
      return NextResponse.json({message:"all fields are required"},{status:404});
    }
    else if(!username && !username==""){
      return NextResponse.json({message:"Username is required"},{status:404});
    }
    else if(username.length<=2){
      return NextResponse.json({message:"Username must be of two or more Character"},{status:404});
    }
    else if(username == parseInt(username)){
      return NextResponse.json({message:"Username must be Alphabet , not number"},{status:404});
    }
    else if(!email){
      return NextResponse.json({message:"email is required"},{status:404});
    }
    else if(email.length<=10){
      return NextResponse.json({message:"email must be of 11 or more than Character"},{status:404});
    }
    else{await producer.send({
      topic: 'user_creation',
      messages: [
        {value: JSON.stringify({ username, email })},
      ],
    });

    return NextResponse.json({ message: 'User created and sent to Kafka topic' });}
    
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message to Kafka' }, { status: 500 });
  }
}
