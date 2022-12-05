
module.exports = {

    /**
     * Create a error object to save it into a database.
     * @param {Context} ctx 
     * @param {Error} globalError 
     * @returns true because we dont need anything in another part.
     */
    async createErrorObject(ctx, globalError){
        let userId = 0;
        if(ctx.state.hasOwnProperty('user')) {
          userId = ctx.state.user.id;
        }
        const error = {
            errorCode: ctx.response.status,
            path: ctx.originalUrl,
            method: ctx.request.method,
            body: ctx.request.body,
            userId,
            date: new Date().toISOString(),
            message: globalError.message,
            stack: globalError.stack
        }
        await module.exports.logError(error);
        return true;
    },

    async logError(error){
        const isOk = await strapi.query("api::error.error").create({
            data: error
        });
        return true;
    },

}