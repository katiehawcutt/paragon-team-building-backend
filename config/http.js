// setting the port at which the app is going to listen on
// Nullish coalescing operator (??) - is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

module.exports = {
    HTTP_PORT: process.env.PORT ?? '8080',
}
