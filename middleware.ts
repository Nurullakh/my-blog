import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Проверяем, есть ли у пользователя кука email, которая устанавливается только после регистрации/авторизации
  if (request.cookies.get('email')) {
    return NextResponse.next()
  } else {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: '/admin'
}