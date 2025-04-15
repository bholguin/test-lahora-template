import {NextRequest, NextResponse} from 'next/server';
import {generateTokenOffline} from './app/_setup/services';

function hashFunction(key: string) {
  const splittedWord = key.toLowerCase().split('');
  const codes = splittedWord.map((letter) => `${letter}${String(letter).charCodeAt(0)}`);
  return codes.join('');
}

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('x-request-pathname', req.nextUrl.pathname);
  response.headers.set('x-request-query', req.nextUrl.searchParams.get('query') ?? '');
  if ((!req.cookies.has('LaHora') || !req.cookies.get('LaHora')?.value) && process.env.NEXT_PUBLIC_IS_OFFLINE === 'true') {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const browserId = hashFunction(date.getTime().toString());
    const token = await generateTokenOffline(browserId);
    response.cookies.set('LaHora', token);
    response.cookies.set('browserId', browserId, {
      expires: date,
    });
  }

  return response;
}


