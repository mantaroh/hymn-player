export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export async function GET(request) {
    console.log(request);
    const params = new URLSearchParams(request.url.split('?')[1]);
    if (params.size <= 0 || !params.has('no')) {
        return new Response('No query parameters provided', { status: 400 });
    }

    const currentNo = parseInt(params.get('no'));
    const url = `https://jelc.or.jp/wp-content/uploads/sanbi-mid/${('0000'+currentNo).slice(-3)}.mid`;

    const resp = await fetch(url);

    if (!resp.ok) {
        return new Response('Failed to fetch MIDI file', { status: 500 });
    }
    const respBinary = await resp.arrayBuffer();

    return new Response(respBinary, {
        headers: {
            'Content-Type': 'audio/midi',
            'Content-Disposition': `attachment; filename="hymn-${currentNo}.mid"`
        }
    });
}
