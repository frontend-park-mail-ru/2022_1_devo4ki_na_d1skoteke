function pug_escape(e) { const a = `${e}`; const t = pug_match_html.exec(a); if (!t) return e; let r; let c; let n; let s = ''; for (r = t.index, c = 0; r < a.length; r++) { switch (a.charCodeAt(r)) { case 34: n = '&quot;'; break; case 38: n = '&amp;'; break; case 60: n = '&lt;'; break; case 62: n = '&gt;'; break; default: continue; }c !== r && (s += a.substring(c, r)), c = r + 1, s += n; } return c !== r ? s + a.substring(c, r) : s; }
var pug_match_html = /["&<>]/;
function pug_rethrow(e, n, r, t) { if (!(e instanceof Error)) throw e; if (!(typeof window === 'undefined' && n || t)) throw e.message += ` on line ${r}`, e; let o; let a; let i; let s; try { t = t || require('fs').readFileSync(n, { encoding: 'utf8' }), o = 3, a = t.split('\n'), i = Math.max(r - o, 0), s = Math.min(a.length, r + o); } catch (t) { return e.message += ` - could not read from ${n} (${t.message})`, void pug_rethrow(e, null, r); }o = a.slice(i, s).map((e, n) => { const t = n + i + 1; return `${(t == r ? '  > ' : '    ') + t}| ${e}`; }).join('\n'), e.path = n; try { e.message = `${n || 'Pug'}:${r}\n${o}\n\n${e.message}`; } catch (e) {} throw e; } function NoteContent(locals) {
  let pug_html = '';
  const pug_mixins = {};
  let pug_interp; let pug_debug_filename; let
    pug_debug_line; try {
    const locals_for_with = (locals || {});
    
    (function (bookStore, title) {
      pug_debug_line = 3; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__content"\u003E`;
      pug_debug_line = 4; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__content__navbar"\u003E`;
      pug_debug_line = 5; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__content__navbar__docname"\u003E`;
      pug_debug_line = 6; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cdiv\u003E`;
      pug_debug_line = 6; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html + (pug_escape((pug_interp = title) == null ? '' : pug_interp))}\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 7; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__content__navbar__actions"\u003E`;
      pug_debug_line = 8; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__content__navbar__actions__item" style="margin-right: 20px;"\u003E`;
      pug_debug_line = 9; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}Share\u003C\u002Fdiv\u003E`;
      pug_debug_line = 10; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__content__navbar__actions__item"\u003E`;
      pug_debug_line = 11; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Csvg viewbox="0 0 27 27"\u003E`;
      pug_debug_line = 12; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cpath d="M8.74414 24.6816C9.22266 24.6816 9.55469 24.4277 10.1504 23.9004L13.5195 20.9023H19.7891C22.6992 20.9023 24.2617 19.291 24.2617 16.4297V8.94922C24.2617 6.08789 22.6992 4.47656 19.7891 4.47656H7.21094C4.30078 4.47656 2.73828 6.07812 2.73828 8.94922V16.4297C2.73828 19.3008 4.30078 20.9023 7.21094 20.9023H7.67969V23.4414C7.67969 24.1934 8.06055 24.6816 8.74414 24.6816ZM9.14453 22.8945V20.0625C9.14453 19.5352 8.93945 19.3301 8.41211 19.3301H7.21094C5.23828 19.3301 4.31055 18.3242 4.31055 16.4199V8.94922C4.31055 7.04492 5.23828 6.04883 7.21094 6.04883H19.7891C21.752 6.04883 22.6895 7.04492 22.6895 8.94922V16.4199C22.6895 18.3242 21.752 19.3301 19.7891 19.3301H13.4609C12.9141 19.3301 12.6406 19.4082 12.2695 19.7891L9.14453 22.8945ZM8.4707 9.99414H18.4121C18.7246 9.99414 18.9688 9.75 18.9688 9.42773C18.9688 9.125 18.7246 8.87109 18.4121 8.87109H8.4707C8.1582 8.87109 7.9043 9.125 7.9043 9.42773C7.9043 9.75 8.1582 9.99414 8.4707 9.99414ZM8.4707 13.1777H18.4121C18.7246 13.1777 18.9688 12.9238 18.9688 12.6016C18.9688 12.2988 18.7246 12.0449 18.4121 12.0449H8.4707C8.1582 12.0449 7.9043 12.2988 7.9043 12.6016C7.9043 12.9238 8.1582 13.1777 8.4707 13.1777ZM8.4707 16.3516H14.9355C15.248 16.3516 15.4922 16.1074 15.4922 15.7949C15.4922 15.4727 15.248 15.2188 14.9355 15.2188H8.4707C8.1582 15.2188 7.9043 15.4727 7.9043 15.7949C7.9043 16.1074 8.1582 16.3516 8.4707 16.3516Z"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 13; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__content__navbar__actions__item"\u003E`;
      pug_debug_line = 14; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Csvg class="topbarUpdate" viewbox="0 0 20 20"\u003E`;
      pug_debug_line = 15; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cpath d="M10.0781 18.1562C14.5078 18.1562 18.1641 14.5 18.1641 10.0781C18.1641 5.65625 14.5 2 10.0703 2C5.64844 2 2 5.65625 2 10.0781C2 14.5 5.65625 18.1562 10.0781 18.1562ZM10.0781 16.5469C6.49219 16.5469 3.625 13.6641 3.625 10.0781C3.625 6.49219 6.49219 3.61719 10.0703 3.61719C13.6562 3.61719 16.5391 6.49219 16.5469 10.0781C16.5547 13.6641 13.6641 16.5469 10.0781 16.5469ZM6.14062 11.0625H10.0703C10.4297 11.0625 10.7031 10.7891 10.7031 10.4375V5.32812C10.7031 4.97656 10.4297 4.70312 10.0703 4.70312C9.72656 4.70312 9.45312 4.97656 9.45312 5.32812V9.8125H6.14062C5.78906 9.8125 5.51562 10.0859 5.51562 10.4375C5.51562 10.7891 5.78906 11.0625 6.14062 11.0625Z"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 16; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__content__navbar__actions__item"\u003E`;
      pug_debug_line = 17; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Csvg class="topbarComment" viewbox="0 0 20 20"\u003E`;
      pug_debug_line = 18; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cpath d="M4.77321 18.0645C5.14821 18.3457 5.60915 18.252 6.1404 17.8691L10.2029 14.8848L14.2576 17.8691C14.7888 18.252 15.2498 18.3457 15.6248 18.0645C15.992 17.7832 16.0701 17.3223 15.8591 16.7051L14.2576 11.9395L18.3513 9.00195C18.8826 8.62695 19.1013 8.20508 18.9529 7.76758C18.8045 7.33008 18.3904 7.11133 17.7341 7.11914L12.7185 7.1582L11.1873 2.36133C10.9841 1.73633 10.6638 1.40039 10.2029 1.40039C9.73415 1.40039 9.41383 1.73633 9.21071 2.36133L7.68727 7.1582L2.66383 7.11914C2.00758 7.11133 1.59352 7.33008 1.44508 7.75977C1.29665 8.20508 1.52321 8.62695 2.04665 9.00195L6.1404 11.9395L4.53883 16.7051C4.3279 17.3223 4.40602 17.7832 4.77321 18.0645Z"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 19; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__content__navbar__actions__item"\u003E`;
      pug_debug_line = 20; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Csvg viewbox="0 0 26 26"\u003E`;
      pug_debug_line = 21; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cpath d="M7.19922 13.2549C7.19922 12.0625 6.23242 11.1064 5.01855 11.1064C3.83691 11.1064 2.87012 12.0625 2.87012 13.2549C2.87012 14.4473 3.83691 15.4033 5.01855 15.4033C6.23242 15.4033 7.19922 14.4473 7.19922 13.2549ZM15.1484 13.2549C15.1484 12.0625 14.1924 11.1064 13 11.1064C11.8184 11.1064 10.8623 12.0625 10.8623 13.2549C10.8623 14.4473 11.8184 15.4033 13 15.4033C14.1924 15.4033 15.1484 14.4473 15.1484 13.2549ZM23.1299 13.2549C23.1299 12.0625 22.1738 11.1064 20.9814 11.1064C19.7676 11.1064 18.8115 12.0625 18.8115 13.2549C18.8115 14.4473 19.7676 15.4033 20.9814 15.4033C22.1738 15.4033 23.1299 14.4473 23.1299 13.2549Z"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 22; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__content__document__title"\u003E`;
      pug_debug_line = 23; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cdiv\u003E`;
      pug_debug_line = 23; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}image\u003C\u002Fdiv\u003E`;
      pug_debug_line = 24; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cdiv\u003E`;
      pug_debug_line = 24; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}buttons\u003C\u002Fdiv\u003E`;
      pug_debug_line = 25; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cdiv class="text_big" spellcheck="true" placeholder=" " data-content-editable-leaf="true" contenteditable="true"\u003E`;
      pug_debug_line = 25; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html + (pug_escape((pug_interp = title) == null ? '' : pug_interp))}\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 26; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__content__document__itself"\u003E`;
      pug_debug_line = 27; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
      // iterate bookStore
      (function () {
        const $$obj = bookStore;
        if (typeof $$obj.length === 'number') {
          for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
            var book = $$obj[pug_index0];
            pug_debug_line = 28; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
            pug_html = `${pug_html}\u003Cdiv class="text_regular" spellcheck="true" placeholder=" " data-content-editable-leaf="true" contenteditable="true"\u003E`;
            pug_debug_line = 29; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
            pug_html = `${pug_html}\u003Cdiv\u003E`;
            pug_debug_line = 29; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
            pug_html = `${pug_html + (pug_escape((pug_interp = book.title) == null ? '' : pug_interp))}\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
          }
        } else {
          var $$l = 0;
          for (var pug_index0 in $$obj) {
            $$l++;
            var book = $$obj[pug_index0];
            pug_debug_line = 28; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
            pug_html = `${pug_html}\u003Cdiv class="text_regular" spellcheck="true" placeholder=" " data-content-editable-leaf="true" contenteditable="true"\u003E`;
            pug_debug_line = 29; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
            pug_html = `${pug_html}\u003Cdiv\u003E`;
            pug_debug_line = 29; pug_debug_filename = 'public\u002Fcomponents\u002FNoteContent\u002FNoteContent.pug';
            pug_html = `${pug_html + (pug_escape((pug_interp = book.title) == null ? '' : pug_interp))}\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
          }
        }
      }).call(this);

      pug_html = `${pug_html}\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
    }.call(this, 'bookStore' in locals_for_with
      ? locals_for_with.bookStore
      : typeof bookStore !== 'undefined' ? bookStore : undefined, 'title' in locals_for_with
      ? locals_for_with.title
      : typeof title !== 'undefined' ? title : undefined));
  } catch (err) { pug_rethrow(err, pug_debug_filename, pug_debug_line); } return pug_html;
} export { NoteContent };
