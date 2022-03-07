function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function Enter(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (ENTER_TYPE, inputForms) {
      ;pug_debug_line = 1;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
const btn_msg = (ENTER_TYPE==='login') ? 'Log in' : 'Sign Up'
const alter_variant_text = (ENTER_TYPE==='login') ? 'Don\'t have an account?' : 'I already have an account'
const opposite_variant = (ENTER_TYPE==='login') ? 'signup' : 'login'

;pug_debug_line = 6;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([ENTER_TYPE], [true]), false, false)) + "\u003E";
;pug_debug_line = 7;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + "\u003Cimg class=\"logo\" src=\".\u002Fimg\u002Fsignup_login_logo.png\"\u002F\u003E";
;pug_debug_line = 8;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = btn_msg) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + "\u003Cform" + (pug_attr("class", pug_classes([ENTER_TYPE+'-form'], [true]), false, false)) + "\u003E";
;pug_debug_line = 10;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
// iterate inputForms
;(function(){
  var $$obj = inputForms;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var input = $$obj[pug_index0];
;pug_debug_line = 11;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + "\u003Cdiv class=\"form\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + "\u003Clabel class=\"my-label\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = input.labelname) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
;pug_debug_line = 13;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attr("type", input.type, true, false)+pug_attr("name", input.name, true, false)+pug_attr("placeholder", input.placeholder, true, false)+pug_attr("id", input.name+'-input', true, false)) + "\u002F\u003E";
;pug_debug_line = 19;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"bad-input\""+pug_attr("id", 'bad-'+input.name, true, false)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var input = $$obj[pug_index0];
;pug_debug_line = 11;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + "\u003Cdiv class=\"form\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + "\u003Clabel class=\"my-label\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = input.labelname) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
;pug_debug_line = 13;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + "\u003Cinput" + (pug_attr("type", input.type, true, false)+pug_attr("name", input.name, true, false)+pug_attr("placeholder", input.placeholder, true, false)+pug_attr("id", input.name+'-input', true, false)) + "\u002F\u003E";
;pug_debug_line = 19;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"bad-input\""+pug_attr("id", 'bad-'+input.name, true, false)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

;pug_debug_line = 20;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + "\u003Cbutton" + (" class=\"submit-btn\""+" type=\"submit\""+pug_attr("id", ENTER_TYPE+'-submit-btn', true, false)) + "\u003E";
;pug_debug_line = 20;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = btn_msg) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E";
;pug_debug_line = 21;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"alternative-variant\""+pug_attr("href", opposite_variant, true, false)+pug_attr("data-section", opposite_variant, true, false)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "public\u002Fcomponents\u002FEnter\u002FEnter.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = alter_variant_text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "ENTER_TYPE" in locals_for_with ?
        locals_for_with.ENTER_TYPE :
        typeof ENTER_TYPE !== 'undefined' ? ENTER_TYPE : undefined, "inputForms" in locals_for_with ?
        locals_for_with.inputForms :
        typeof inputForms !== 'undefined' ? inputForms : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;} export {Enter}