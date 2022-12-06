'use strict';

/**
 * A set of functions called "actions" for `download`
 */

module.exports = ({ strapi }) => ({
  /**
   *  Controller to manage the forgot password action at demo user
   *  @param {Object} ctx.params.key: request key
   *  @param {Object} ctx.query: request query
   *  @param {Object} ctx.body: request query
   *  This service manage the proccess of download report
   */
  download: async (ctx, next) => {
    try {
      // sdk way
      let key = ctx.params.key; // "IM_0001_0027_9097bc8dd1.dcm" + 'Download";
      // let { code } = ctx.query;
      // let _code = await strapi
      //   .service('api::download.download')
      //   .getSecurityCode(key);
      if (true/*!_code || code === _code*/) {
        let x = await strapi.service('api::download.download').download(key);
        ctx.type = x.ContentType;
        //ctx.set(`Content-Disposition: attachment; filename=${key}`);
        ctx.body = x.Body;
      } else {
        ctx.forbidden('You are not allowed to download the document');
      }
    } catch (err) {
      console.error(err);
      ctx.body = err;
    }
  },
});
