function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function Settings(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (inputForms, userInfo) {
      ;pug_debug_line = 1;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cdiv class=\"popup\" id=\"settingsPopup\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cdiv class=\"popup__body\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cdiv class=\"menu-content popup__content\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cdiv class=\"menu-content__sidebar sidebar\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cdiv class=\"sidebar__username\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = userInfo.nickname) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Ca class=\"sidebar__tab sidebar__tab_account-settings\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "Account Settings";
;pug_debug_line = 7;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cimg class=\"sidebar__tab_icon\" src=\"..\u002F..\u002Fimg\u002Fsettings__account-icon.svg\"\u002F\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 8;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Ca class=\"sidebar__tab sidebar__tab_members\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "Members";
;pug_debug_line = 9;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cimg class=\"sidebar__tab_icon\" src=\"..\u002F..\u002Fimg\u002Fsettings__members-icon.svg\"\u002F\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cdiv class=\"menu-content__settings settings\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cdiv class=\"settings__title\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "Personal info\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cform class=\"settings__form\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cdiv class=\"settings__avatar\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cimg class=\"avatar\" src=\"..\u002F..\u002Fimg\u002Favatar-example.jpg\"\u002F\u003E";
;pug_debug_line = 15;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cinput type=\"file\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
// iterate inputForms
;(function(){
  var $$obj = inputForms;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var input = $$obj[pug_index0];
;pug_debug_line = 17;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cdiv class=\"setting-field\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Clabel class=\"my-label setting-field__label\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = input.labelname) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
;pug_debug_line = 19;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cdiv class=\"setting-field__input\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"inputField\""+pug_attr("type", input.type, true, false)+pug_attr("name", input.name, true, false)+pug_attr("placeholder", input.placeholder, true, false)+pug_attr("value", input.default_value, true, false)+pug_attr("id", input.name + '-input', true, false)) + "\u002F\u003E";
;pug_debug_line = 27;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"bad-input setting-field__bad-input\""+pug_attr("id", 'bad-' + input.name, true, false)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var input = $$obj[pug_index0];
;pug_debug_line = 17;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cdiv class=\"setting-field\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Clabel class=\"my-label setting-field__label\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = input.labelname) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
;pug_debug_line = 19;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cdiv class=\"setting-field__input\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"inputField\""+pug_attr("type", input.type, true, false)+pug_attr("name", input.name, true, false)+pug_attr("placeholder", input.placeholder, true, false)+pug_attr("value", input.default_value, true, false)+pug_attr("id", input.name + '-input', true, false)) + "\u002F\u003E";
;pug_debug_line = 27;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"bad-input setting-field__bad-input\""+pug_attr("id", 'bad-' + input.name, true, false)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

;pug_debug_line = 28;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cdiv class=\"settings__buttons setting-field\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cinput class=\"submit-btn close-popup settings__buttons_save\" type=\"submit\" id=\"save-btn\" value=\"Save\"\u002F\u003E";
;pug_debug_line = 30;pug_debug_filename = "public\u002Fcomponents\u002FSettings\u002FSettings.pug";
pug_html = pug_html + "\u003Cinput class=\"submit-btn close-popup settings__buttons_logout\" type=\"submit\" id=\"logout-btn\" value=\"Logout\"\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "inputForms" in locals_for_with ?
        locals_for_with.inputForms :
        typeof inputForms !== 'undefined' ? inputForms : undefined, "userInfo" in locals_for_with ?
        locals_for_with.userInfo :
        typeof userInfo !== 'undefined' ? userInfo : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;} export {Settings}