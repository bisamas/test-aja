export async function GET(){

    const raw = [
        {
            name : 'malik'
        }
    ]

    const data= JSON.stringify(raw)

    return new Response(data)
}