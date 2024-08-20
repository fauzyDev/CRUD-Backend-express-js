export const response = ( status, data, message, res ) => {
    res.json([ 
        {
            status,
            data,
            message
        }
    ])
}