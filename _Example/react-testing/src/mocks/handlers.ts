import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('https://the-one-api.dev/v2/character', () => {
        return HttpResponse.json({
            "docs": [
                {
                    "_id": "5cd99d4bde30eff6ebccfbbe",
                    "name": "Adanel",
                }
            ]
        }, { status: 200 })
    }),
]