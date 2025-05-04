import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const accessToken = req.nextUrl.searchParams.get('accessToken');

    if (!accessToken) {
        return NextResponse.json({ error: 'Access token is required' }, { status: 400 });
    }

    const url = `https://graph.facebook.com/v18.0/me/accounts?access_token=${accessToken}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ error: 'Failed to fetch Facebook pages' }, { status: 500 });
    }
}
