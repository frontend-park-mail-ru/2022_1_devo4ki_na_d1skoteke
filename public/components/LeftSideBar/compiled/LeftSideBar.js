function pug_escape(e) { const a = `${e}`; const t = pug_match_html.exec(a); if (!t) return e; let r; let c; let n; let s = ''; for (r = t.index, c = 0; r < a.length; r++) { switch (a.charCodeAt(r)) { case 34: n = '&quot;'; break; case 38: n = '&amp;'; break; case 60: n = '&lt;'; break; case 62: n = '&gt;'; break; default: continue; }c !== r && (s += a.substring(c, r)), c = r + 1, s += n; } return c !== r ? s + a.substring(c, r) : s; }
var pug_match_html = /["&<>]/;
function pug_rethrow(e, n, r, t) { if (!(e instanceof Error)) throw e; if (!(typeof window === 'undefined' && n || t)) throw e.message += ` on line ${r}`, e; let o; let a; let i; let s; try { t = t || require('fs').readFileSync(n, { encoding: 'utf8' }), o = 3, a = t.split('\n'), i = Math.max(r - o, 0), s = Math.min(a.length, r + o); } catch (t) { return e.message += ` - could not read from ${n} (${t.message})`, void pug_rethrow(e, null, r); }o = a.slice(i, s).map((e, n) => { const t = n + i + 1; return `${(t == r ? '  > ' : '    ') + t}| ${e}`; }).join('\n'), e.path = n; try { e.message = `${n || 'Pug'}:${r}\n${o}\n\n${e.message}`; } catch (e) {} throw e; } function LeftSideBar(locals) {
  let pug_html = '';
  const pug_mixins = {};
  let pug_interp; let pug_debug_filename; let
    pug_debug_line; try {
    const locals_for_with = (locals || {});
    
    (function (bookStore, name) {
      pug_debug_line = 1; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Clink rel="stylesheet" href="styles.css"\u002F\u003E`;
      pug_debug_line = 3; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar"\u003E`;
      pug_debug_line = 4; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__bio"\u003E`;
      pug_debug_line = 5; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__bio__profilename"\u003E`;
      pug_debug_line = 6; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv\u003E`;
      pug_debug_line = 7; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cimg class="notion__sidebar__bio__img" src="https:\u002F\u002Flh3.googleusercontent.com\u002Fa-\u002FAOh14Ggo62gr8BTTecwfg3uGVTFoxat5d2cDxL59mUTWrA=s100"\u002F\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 8; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv\u003E`;
      pug_debug_line = 9; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html += (pug_escape((pug_interp = name) == null ? '' : pug_interp));
      pug_debug_line = 9; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}&apos;s Notion\u003C\u002Fdiv\u003E`;
      pug_debug_line = 10; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Csvg class="notion__sidebar__bio__profilename__switch" viewbox="-1 -1 9 11"\u003E`;
      pug_debug_line = 11; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cpath id="path0_stroke" d="M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 12; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__bio__colapser"\u003E`;
      pug_debug_line = 13; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv\u003E`;
      pug_debug_line = 14; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Csvg viewbox="0 0 14 14"\u003E`;
      pug_debug_line = 15; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cpath d="M7 2.225L5.775 1L0 7.125L5.775 13.25L7 12.025L2.45 7.125L7 2.225ZM14 2.225L12.775 1L7 7.125L12.775 13.25L14 12.025L9.45 7.125L14 2.225Z"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 16; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__navigation"\u003E`;
      pug_debug_line = 17; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__navigation__item"\u003E`;
      pug_debug_line = 17; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}Quick Find\u003C\u002Fdiv\u003E`;
      pug_debug_line = 18; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__navigation__item"\u003E`;
      pug_debug_line = 18; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}All Updates\u003C\u002Fdiv\u003E`;
      pug_debug_line = 19; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__navigation__item"\u003E`;
      pug_debug_line = 19; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}Settings &amp; Members\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 20; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote"\u003E`;
      pug_debug_line = 21; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      // iterate bookStore
      (function () {
        const $$obj = bookStore;
        if (typeof $$obj.length === 'number') {
          for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
            var book = $$obj[pug_index0];
            pug_debug_line = 22; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item"\u003E`;
            pug_debug_line = 23; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__bio"\u003E`;
            pug_debug_line = 24; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Cdiv\u003E`;
            pug_debug_line = 24; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html + (pug_escape((pug_interp = book.title) == null ? '' : pug_interp))}\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
            pug_debug_line = 25; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__action"\u003E`;
            pug_debug_line = 26; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__action_item"\u003E`;
            pug_debug_line = 27; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Csvg viewbox="0 0 16 16"\u003E`;
            pug_debug_line = 28; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Cpath d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E`;
            pug_debug_line = 29; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__action_item"\u003E`;
            pug_debug_line = 30; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Csvg viewbox="0 0 26 26"\u003E`;
            pug_debug_line = 31; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Cpath d="M7.19922 13.2549C7.19922 12.0625 6.23242 11.1064 5.01855 11.1064C3.83691 11.1064 2.87012 12.0625 2.87012 13.2549C2.87012 14.4473 3.83691 15.4033 5.01855 15.4033C6.23242 15.4033 7.19922 14.4473 7.19922 13.2549ZM15.1484 13.2549C15.1484 12.0625 14.1924 11.1064 13 11.1064C11.8184 11.1064 10.8623 12.0625 10.8623 13.2549C10.8623 14.4473 11.8184 15.4033 13 15.4033C14.1924 15.4033 15.1484 14.4473 15.1484 13.2549ZM23.1299 13.2549C23.1299 12.0625 22.1738 11.1064 20.9814 11.1064C19.7676 11.1064 18.8115 12.0625 18.8115 13.2549C18.8115 14.4473 19.7676 15.4033 20.9814 15.4033C22.1738 15.4033 23.1299 14.4473 23.1299 13.2549Z"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
          }
        } else {
          var $$l = 0;
          for (var pug_index0 in $$obj) {
            $$l++;
            var book = $$obj[pug_index0];
            pug_debug_line = 22; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item"\u003E`;
            pug_debug_line = 23; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__bio"\u003E`;
            pug_debug_line = 24; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Cdiv\u003E`;
            pug_debug_line = 24; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html + (pug_escape((pug_interp = book.title) == null ? '' : pug_interp))}\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
            pug_debug_line = 25; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__action"\u003E`;
            pug_debug_line = 26; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__action_item"\u003E`;
            pug_debug_line = 27; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Csvg viewbox="0 0 16 16"\u003E`;
            pug_debug_line = 28; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Cpath d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E`;
            pug_debug_line = 29; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__action_item"\u003E`;
            pug_debug_line = 30; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Csvg viewbox="0 0 26 26"\u003E`;
            pug_debug_line = 31; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
            pug_html = `${pug_html}\u003Cpath d="M7.19922 13.2549C7.19922 12.0625 6.23242 11.1064 5.01855 11.1064C3.83691 11.1064 2.87012 12.0625 2.87012 13.2549C2.87012 14.4473 3.83691 15.4033 5.01855 15.4033C6.23242 15.4033 7.19922 14.4473 7.19922 13.2549ZM15.1484 13.2549C15.1484 12.0625 14.1924 11.1064 13 11.1064C11.8184 11.1064 10.8623 12.0625 10.8623 13.2549C10.8623 14.4473 11.8184 15.4033 13 15.4033C14.1924 15.4033 15.1484 14.4473 15.1484 13.2549ZM23.1299 13.2549C23.1299 12.0625 22.1738 11.1064 20.9814 11.1064C19.7676 11.1064 18.8115 12.0625 18.8115 13.2549C18.8115 14.4473 19.7676 15.4033 20.9814 15.4033C22.1738 15.4033 23.1299 14.4473 23.1299 13.2549Z"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
          }
        }
      }).call(this);

      pug_debug_line = 35; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item"\u003E`;
      pug_debug_line = 36; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__bio"\u003E`;
      pug_debug_line = 37; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}Note&apos;s Name &amp; Pic\u003C\u002Fdiv\u003E`;
      pug_debug_line = 38; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__action"\u003E`;
      pug_debug_line = 39; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__action_item"\u003E`;
      pug_debug_line = 40; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Csvg viewbox="0 0 16 16"\u003E`;
      pug_debug_line = 41; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cpath d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 42; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__action_item"\u003E`;
      pug_debug_line = 43; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Csvg viewbox="0 0 26 26"\u003E`;
      pug_debug_line = 44; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cpath d="M7.19922 13.2549C7.19922 12.0625 6.23242 11.1064 5.01855 11.1064C3.83691 11.1064 2.87012 12.0625 2.87012 13.2549C2.87012 14.4473 3.83691 15.4033 5.01855 15.4033C6.23242 15.4033 7.19922 14.4473 7.19922 13.2549ZM15.1484 13.2549C15.1484 12.0625 14.1924 11.1064 13 11.1064C11.8184 11.1064 10.8623 12.0625 10.8623 13.2549C10.8623 14.4473 11.8184 15.4033 13 15.4033C14.1924 15.4033 15.1484 14.4473 15.1484 13.2549ZM23.1299 13.2549C23.1299 12.0625 22.1738 11.1064 20.9814 11.1064C19.7676 11.1064 18.8115 12.0625 18.8115 13.2549C18.8115 14.4473 19.7676 15.4033 20.9814 15.4033C22.1738 15.4033 23.1299 14.4473 23.1299 13.2549Z"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 45; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item"\u003E`;
      pug_debug_line = 46; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__bio"\u003E`;
      pug_debug_line = 47; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}Note&apos;s Name &amp; Pic\u003C\u002Fdiv\u003E`;
      pug_debug_line = 48; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__action"\u003E`;
      pug_debug_line = 49; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__action_item"\u003E`;
      pug_debug_line = 50; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Csvg viewbox="0 0 16 16"\u003E`;
      pug_debug_line = 51; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cpath d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 52; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__action_item"\u003E`;
      pug_debug_line = 53; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Csvg viewbox="0 0 26 26"\u003E`;
      pug_debug_line = 54; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cpath d="M7.19922 13.2549C7.19922 12.0625 6.23242 11.1064 5.01855 11.1064C3.83691 11.1064 2.87012 12.0625 2.87012 13.2549C2.87012 14.4473 3.83691 15.4033 5.01855 15.4033C6.23242 15.4033 7.19922 14.4473 7.19922 13.2549ZM15.1484 13.2549C15.1484 12.0625 14.1924 11.1064 13 11.1064C11.8184 11.1064 10.8623 12.0625 10.8623 13.2549C10.8623 14.4473 11.8184 15.4033 13 15.4033C14.1924 15.4033 15.1484 14.4473 15.1484 13.2549ZM23.1299 13.2549C23.1299 12.0625 22.1738 11.1064 20.9814 11.1064C19.7676 11.1064 18.8115 12.0625 18.8115 13.2549C18.8115 14.4473 19.7676 15.4033 20.9814 15.4033C22.1738 15.4033 23.1299 14.4473 23.1299 13.2549Z"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 55; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__basics"\u003E`;
      pug_debug_line = 56; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item"\u003E`;
      pug_debug_line = 57; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__bio"\u003E`;
      pug_debug_line = 58; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}Templates\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 59; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item"\u003E`;
      pug_debug_line = 60; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__bio"\u003E`;
      pug_debug_line = 61; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}Import\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 62; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item"\u003E`;
      pug_debug_line = 63; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__deathnote__item__bio"\u003E`;
      pug_debug_line = 64; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}Trash\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 65; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__newpage"\u003E`;
      pug_debug_line = 66; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__newpage__container"\u003E`;
      pug_debug_line = 67; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv class="notion__sidebar__newpage__container__plus"\u003E`;
      pug_debug_line = 68; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Csvg viewbox="0 0 16 16"\u003E`;
      pug_debug_line = 69; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cpath d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E`;
      pug_debug_line = 70; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}\u003Cdiv\u003E`;
      pug_debug_line = 71; pug_debug_filename = 'public\u002Fcomponents\u002FLeftSideBar\u002FLeftSideBar.pug';
      pug_html = `${pug_html}New page\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E`;
    }.call(this, 'bookStore' in locals_for_with
      ? locals_for_with.bookStore
      : typeof bookStore !== 'undefined' ? bookStore : undefined, 'name' in locals_for_with
      ? locals_for_with.name
      : typeof name !== 'undefined' ? name : undefined));
  } catch (err) { pug_rethrow(err, pug_debug_filename, pug_debug_line); } return pug_html;
} export { LeftSideBar };
