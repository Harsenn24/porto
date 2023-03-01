const { search_something } = require("../helper/search_something")

function get_product_query(search_product) {
    let query = [
        {
            '$lookup': {
                'from': 'users',
                'localField': 'user_id',
                'foreignField': '_id',
                'as': 'data_user',
                'pipeline': [
                    {
                        '$project': {
                            'full_name': {
                                '$reduce': {
                                    'input': '$full_name',
                                    'initialValue': '',
                                    'in': {
                                        '$concat': [
                                            '$$value',
                                            { '$cond': [{ '$eq': ['$$value', ''] }, '', ' '] },
                                            '$$this'
                                        ]
                                    }
                                }
                            },
                            'status': {
                                '$cond': {
                                    'if': { '$eq': ['$status', true] },
                                    'then': 'Aktif',
                                    'else': 'Tidak Aktif'
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            '$addFields': {
                'full_name': { '$ifNull': [{ '$first': '$data_user.full_name' }, '-'] },
                'status': { '$ifNull': [{ '$first': '$data_user.status' }, '-'] },
            }
        },
        {
            '$match': {
                '$and': [
                    { 'status': 'Aktif' },
                    { 'deleted': false }
                ]
            }
        },
        {
            '$match': search_something('name', search_product)
        },
        {
            '$project': {
                'product_name': '$name',
                'price': '$price',
                'owner': '$full_name',
                'quantity': '$quantity',

            }
        }

    ]

    return query
}

module.exports = { get_product_query }