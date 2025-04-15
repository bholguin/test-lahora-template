import {createAssessment} from '@/app/_setup/helpers/createAssessment';
// import {sendEmail} from '@/app/_setup/services';
import {NextResponse} from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const score = await createAssessment({
      projectID: 'my-project-4298-1744655604290',
      recaptchaKey: '6LeZwxgrAAAAAFpOu-nKNBIWFZco4b6EKLgRlrQZ',
      token: data.token,
      recaptchaAction: 'contacto',
    });

    if (score && score >= 0.7) {
      /*    await sendEmail({
        body: data.body,
        from: data.email,
        host: process.env.NEXT_PUBLIC_API_HOST || '',
        sendto: 'brayan.holguin@nivelics.co',
        subject: data.subject,
      }); */
      return NextResponse.json({
        response: 'Correo enviado con exito',
      }, {
        status: 200,
      });
    }
    return NextResponse.json({
      response: 'Envio malicioso',
    }, {
      status: 404,
    });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({
      response: 'Ocurrio un error en el proceso',
    }, {
      status: 500,
    });
  }
}
