'use strict';

exports = module.exports = class Template {

  constructor(){}

  static render( numbani ){
    let tmpl = numbani.template, data =  numbani.data;
    return tmpl.call( null, data );
  }

  static iterate( numbani ){
    let tmpl = numbani.template, data =  numbani.data, result = [];
    data.forEach( ( item, idx ) => {
      result.push( tmpl.call( null, item ) );
    });
    return result.join( '' );
  }

  static conditional( condition, numbani1, numbani2 ){
    return ( condition )? numbani1: numbani2;
  }

  static encode( numbani ){
    return encodeURIComponent( numbani );
  }

  static join( ...numbani ){
    return numbani.join( '' );
  }

  static escape( numbani ){
    return numbani.replace(/&/g, '&amp;')
      .replace(/>/g, '&gt;')
      .replace(/</g, '&lt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/`/g, '&#96;');
  }
}
