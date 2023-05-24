"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[642],{4128:function(n,e,t){t.d(e,{nZ:function(){return u},Z7:function(){return c},ib:function(){return r},Hc:function(){return a},iY:function(){return o},Jq:function(){return i},Y5:function(){return l},z2:function(){return d}});t(6474),t(2031);var r=function(n,e){e(n.target.value)},o=function(n,e){e(n.target.value)},i=function(n,e){e(n.target.value)},u=function(n){n.map((function(n){return n("")}))},a=function(n){return(0,n.preventDefault)()},c=function(n){return n((function(n){return!n}))},l=(t(8692),function(n){n.target.value;return""}),s=t(1634),d=function(n,e){var t=n.target.value;e((0,s.M)(t))}},8692:function(n,e,t){t.d(e,{z:function(){return u}});var r=t(5206),o=t(3634),i=t(1634),u=function(n,e,t){n.preventDefault(),console.log(n.currentTarget);var u=n.currentTarget,a=u.name,c=u.number;t.find((function(n){return n.name.toLowerCase()===a.value.toLowerCase()}))?r.Am.warning("".concat(a.value," is already in contacts.")):(e((0,o.addContact)({name:a.value,number:c.value})),e((0,i.M)(""))),n.currentTarget.reset()}},1642:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,o,i,u,a=t(5440),c=t(2791),l=t(9434),s=t(2946),d=t(8692),f=t(4554),x=t(6459),p=t(6151),m=t(184),g=function(){var n=(0,l.I0)(),e=(0,l.v9)(s.A);return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(f.Z,{component:"form",sx:{padding:"20px",marginBottom:"20px",border:"2px solid rgba(128, 0, 128, 0.8)",maxWidth:"50vw",display:"flex",flexDirection:"column",justufyContent:"center",alignItems:"center",borderRadius:"20px",backgroundColor:"rgba(255, 255, 255, 0.7)","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.95)",border:"2px solid rgb(128, 0, 128, 1)"},"&:focus":{backgroundColor:"rgba(255, 255, 255, 0.95)",border:"2px solid rgb(128, 0, 128, 1)"}},noValidate:!0,onSubmit:function(t){return(0,d.z)(t,n,e)},children:[(0,m.jsx)(x.Z,{label:"Name",type:"text",id:"name",color:"secondary",required:!0,sx:{width:"90%",marginBottom:"20px"}}),(0,m.jsx)(x.Z,{label:"Phone",type:"tel",id:"number",color:"secondary",required:!0,sx:{width:"90%",marginBottom:"20px"}}),(0,m.jsx)(p.Z,{type:"submit",color:"secondary",sx:{fontWeight:600,"&:hover":{border:"1px solid rgba(128, 0, 128, 0.8)"}},children:"Add Contact"})]})})},h=t(168),b=t(225),v=b.Z.li(r||(r=(0,h.Z)(["\n  display: flex;\n  gap: 20px;\n  font-size: 20px;\n  margin-bottom: 10px;\n"]))),j=b.Z.button(o||(o=(0,h.Z)(["\n  display: inline-block;\n  align-self: center;\n  padding: 5px 20px;\n  border-radius: 10px;\n  cursor: pointer;\n"]))),C=t(3634),y=function(n){var e=n.item,t=e.name,r=e.phone,o=e.id,i=(0,l.I0)();return(0,m.jsxs)(v,{children:[(0,m.jsxs)("p",{children:[t,": ",r]}),(0,m.jsx)(j,{type:"button",onClick:function(n){var e=n.target.id;return i((0,C.deleteContact)(e))},id:o,children:"Delete"})]})},Z=function(n){return n.filter.value},k=function(n){var e=Z(n),t=(0,s.A)(n);return e?t.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):t},w=function(){var n=(0,l.v9)(k);return(0,m.jsx)("ul",{children:n.length?n.map((function(n){return(0,m.jsx)(y,{item:n},n.id)})):(0,m.jsx)("div",{children:"No matches"})})},z=b.Z.label(i||(i=(0,h.Z)(["\n  font-size: 24px;\n  margin-bottom: 20px;\n"]))),F=b.Z.input(u||(u=(0,h.Z)(["\n  display: inline-block;\n  padding: 5px 10px;\n"]))),A=t(4128),D=function(){var n=(0,l.I0)(),e=(0,l.v9)(Z);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(z,{htmlFor:"find",children:"Find contacts by name"}),(0,m.jsx)(F,{type:"text",name:"find",id:"find",value:e,onChange:function(e){return(0,A.z2)(e,n)},onBlur:A.Y5})]})},I=t(4217),q=function(){var n=(0,l.I0)(),e=(0,l.v9)(s.A),t=(0,l.v9)(s.x),r=(0,l.v9)(I.Dr);return(0,c.useEffect)((function(){r&&n((0,C.fetchContacts)())}),[n,r]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h3",{children:"Phonebook"}),(0,m.jsx)(g,{}),(0,m.jsx)("h3",{children:"Contacts"}),t?(0,m.jsx)(a.Vq,{color:"rgb(128, 0, 128, 0.8)",size:"75px"}):e.length>0?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(D,{}),(0,m.jsx)(w,{})]}):(0,m.jsx)("p",{children:"No contacts"})]})}}}]);
//# sourceMappingURL=642.75e13d51.chunk.js.map