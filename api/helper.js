'use strict';

/**
 * 
 * @param {object} params 
 * @param {array} properties 
 * Renvoie l'object avec les clés communes entre un objet et un tableau
 */
const getCommonAttributes = (params, properties) => {
    if (!params) return [];

    let paramsKeys = Object.keys(params);

    paramsKeys = paramsKeys.filter(value => properties.includes(value));

    let commonAttributes = Object.keys(params)
                        .filter(key => paramsKeys.includes(key))
                        .reduce((obj, key) => {
                            obj[key] = params[key];
                            return obj;
                        }, {});

    return commonAttributes;
};

module.exports = {
    getCommonAttributes: getCommonAttributes
};