(this["webpackJsonppic4share-frontend"]=this["webpackJsonppic4share-frontend"]||[]).push([[0],{121:function(n,e,t){"use strict";t.r(e);var a,i,c,r,o,s,l,d,j,b,p,u,x,h,f,O,m,g,v,y,w,k,S,P,C,q,z,I,D,E,B=t(0),L=t.n(B),A=t(13),M=t.n(A),F=t(33),J=t(12),N=t(38),T=t(20),Y=t(156),G=function(n){n.push("/Pic4Share-frontend/login")},H=function(n){n.push("/Pic4Share-frontend")},K=function(){var n=Object(J.f)();Object(B.useLayoutEffect)((function(){localStorage.getItem("token")||G(n)}),[n])},Q=t(7),R=t(8),U="#394674",V="#E2D6EB",W="#AFA3D2",X=t(160),Z=Object(R.a)(X.a)(a||(a=Object(Q.a)(["\n  width: 300px;\n"]))),$=R.a.div(i||(i=Object(Q.a)(["\n  background-color: ",";\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n"])),V),_=R.a.div(c||(c=Object(Q.a)(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),nn=R.a.form(r||(r=Object(Q.a)(["\n  height: 500px;\n  width: 500px;\n  border-radius: 25px;\n  background: #e2d6eb;\n  box-shadow: 35px 35px 70px #c0b6c8, -35px -35px 70px #fff6ff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 35px;\n"]))),en=R.a.header(o||(o=Object(Q.a)(["\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: white;\n  height: 100px;\n  width: 100%;\n  border-bottom: 2px solid ",";\n"])),W),tn=R.a.h1(s||(s=Object(Q.a)(['\n  font-size: 40px;\n  font-family: "Passion One", cursive;\n  margin: 0px;\n  color: ',";\n"])),U),an=R.a.h6(l||(l=Object(Q.a)(['\n  font-size: 20px;\n  font-family: "Passion One", cursive;\n  font-weight: 200;\n  margin: 0px;\n  color: ',";\n"])),U),cn=t(46),rn=function(n){var e=Object(B.useState)(n),t=Object(T.a)(e,2),a=t[0],i=t[1];return[a,function(n){var e=n.target,t=e.value,c=e.name;i(Object(N.a)(Object(N.a)({},a),{},Object(cn.a)({},c,t)))}]},on=t(31),sn=t.n(on),ln="http://ec2-54-172-103-84.compute-1.amazonaws.com",dn=t(2),jn=function(){K();var n=Object(J.f)(),e=rn({file:"",subtitle:""}),t=Object(T.a)(e,2),a=t[0],i=t[1];return Object(dn.jsxs)($,{children:[Object(dn.jsxs)(en,{children:[Object(dn.jsx)(tn,{children:"Pic4Share"}),Object(dn.jsx)("div",{}),Object(dn.jsx)(Y.a,{onClick:n.goBack,variant:"outlined",color:"primary",children:"Back"})]}),Object(dn.jsx)(_,{children:Object(dn.jsxs)(nn,{onSubmit:function(n){console.log(a),function(n){sn.a.post("".concat(ln,"/picture/create"),n,{headers:{Authorization:localStorage.getItem("token")}}).then((function(n){alert(n.data.message)})).catch((function(n){alert(n.response.data.error)}))}(Object(N.a)(Object(N.a)({},a),{},{tags:"teste"})),n.preventDefault()},children:[Object(dn.jsx)(an,{children:"New picture"}),Object(dn.jsx)(Z,{onChange:i,value:a.file,name:"file",required:!0,variant:"outlined",label:"image link",placeholder:"https://picsum.photos/800"}),Object(dn.jsx)(Z,{onChange:i,value:a.subtitle,name:"subtitle",required:!0,variant:"outlined",label:"title",placeholder:"my gf"}),Object(dn.jsx)(Y.a,{type:"submit",variant:"outlined",color:"primary",children:"create"})]})})]})},bn=R.a.div(d||(d=Object(Q.a)(["\n  \n"]))),pn=function(){return K(),Object(dn.jsx)(bn,{children:"errorpage"})},un=t(157),xn=t(82),hn=t.n(xn),fn=t(80),On=t.n(fn),mn=R.a.div(j||(j=Object(Q.a)(["\n  margin: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  width: 200px;\n  background-color: white;\n  border-radius: 10px;\n  transition: 500ms;\n  &:hover {\n    box-shadow: 5px -5px 10px #c0b6c8, -5px 5px 10px #fff6ff;\n    cursor: pointer;\n  }\n  overflow: hidden;\n"]))),gn=R.a.img(b||(b=Object(Q.a)(["\n  border-radius: 10px;\n  height: 200px;\n"]))),vn=R.a.img(p||(p=Object(Q.a)([""]))),yn=R.a.h6(u||(u=Object(Q.a)(["\n  color: ",";\n  position: absolute;\n  margin: 0px;\n  background-color: rgba(300, 300, 300, 0.7);\n  width: 200px;\n  height: 200px;\n  display: ",";\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  border-radius: 10px;\n  text-align: center;\n"])),U,(function(n){return n.view?"flex":"none"})),wn={width:"80vw",height:"80vh",alignSelf:"center",marginTop:"-40vh",marginLeft:"-40vw",overflowY:"scroll",display:"flex",alignItems:"center",flexDirection:"column"},kn=function(n){var e,t=Object(B.useState)(!1),a=Object(T.a)(t,2),i=a[0],c=a[1];return Object(dn.jsxs)(dn.Fragment,{children:[Object(dn.jsxs)(mn,{onClick:function(){return e.show()},onMouseLeave:function(){return c(!1)},onMouseEnter:function(){return c(!0)},children:[Object(dn.jsx)(gn,{src:n.img}),Object(dn.jsx)(yn,{view:i,children:n.title})]}),Object(dn.jsxs)(On.a,{dialogStyles:wn,hideOnOverlayClicked:!0,ref:function(n){return e=n},title:n.title,children:[Object(dn.jsxs)("p",{children:["posted by: ",n.author]}),Object(dn.jsx)(vn,{src:n.img})]})]})},Sn=function(n,e){var t=Object(B.useState)(n),a=Object(T.a)(t,2),i=a[0],c=a[1];return Object(B.useEffect)((function(){sn.a.get(e,{headers:{Authorization:localStorage.getItem("token")}}).then((function(n){c(n.data.result)}))}),[e]),i},Pn=t(81),Cn=t.n(Pn),qn=R.a.div(x||(x=Object(Q.a)(["\n  background-color: ",";\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n"])),V),zn=R.a.header(h||(h=Object(Q.a)(["\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: white;\n  height: 100px;\n  width: 100%;\n  border-bottom: 2px solid ",";\n"])),W),In=R.a.h1(f||(f=Object(Q.a)(['\n  font-size: 40px;\n  font-family: "Passion One", cursive;\n  margin: 0px;\n  color: ',";\n"])),U),Dn=R.a.div(O||(O=Object(Q.a)(["\n  display: none;\n  align-items: center;\n  gap: 15px;\n"]))),En=Object(R.a)(X.a)(m||(m=Object(Q.a)(["\n  width: 400px;\n"]))),Bn=R.a.section(g||(g=Object(Q.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 50px;\n"]))),Ln=Object(R.a)(un.a)(v||(v=Object(Q.a)(["\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  padding: 5px;\n  margin: 25px;\n"]))),An=function(){K();var n=Object(J.f)(),e=Sn([],"".concat(ln,"/picture/all")).map((function(n){return Object(dn.jsx)(kn,{author:n.author,img:n.file,title:n.subtitle},n.id)}));return Object(dn.jsxs)(qn,{children:[Object(dn.jsx)(Ln,{onClick:function(){return function(n){n.push("/Pic4Share-frontend/create")}(n)},children:Object(dn.jsx)(Cn.a,{style:{fontSize:50},color:"primary"})}),Object(dn.jsxs)(zn,{children:[Object(dn.jsx)(In,{children:"Pic4Share"}),Object(dn.jsxs)(Dn,{children:[Object(dn.jsx)(En,{variant:"outlined"}),Object(dn.jsx)(un.a,{children:Object(dn.jsx)(hn.a,{})})]}),Object(dn.jsx)(Y.a,{onClick:function(){return function(n){localStorage.removeItem("token"),G(n)}(n)},variant:"outlined",color:"primary",children:"Logout"})]}),Object(dn.jsx)(Bn,{children:e})]})},Mn=Object(R.b)(y||(y=Object(Q.a)(["\n  to {\n    height: 400px;\n    width: 400px;\n    border-radius: 50px;\n    gap: 25px;\n  }\n"]))),Fn=R.a.div(w||(w=Object(Q.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background-color: ",";\n  flex-direction: column;\n"])),V),Jn=R.a.h1(k||(k=Object(Q.a)(["\n  font-family: 'Passion One', cursive;\n  color: ",";\n  margin: 0px;\n"])),U),Nn=R.a.form(S||(S=Object(Q.a)(["\n  height: 300px;\n  width: 300px;\n  animation: "," 300ms linear forwards;\n  border-radius: 100px;\n  background: #e2d6eb;\n  box-shadow: 35px 35px 70px #c0b6c8, -35px -35px 70px #fff6ff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n"])),Mn),Tn=R.a.div(P||(P=Object(Q.a)(["\n  display: flex;\n  gap: 20px;\n"]))),Yn=function(){var n=Object(J.f)(),e=rn({password:"",nickname:""}),t=Object(T.a)(e,2),a=t[0],i=t[1];return Object(dn.jsx)(Fn,{children:Object(dn.jsxs)(Nn,{onSubmit:function(e){!function(n,e){sn.a.post("".concat(ln,"/user/login"),n).then((function(n){localStorage.setItem("token",n.data.token),H(e)})).catch((function(n){alert(n.response.data.error)}))}(a,n),e.preventDefault()},children:[Object(dn.jsx)(Jn,{children:"Pic4Shared"}),Object(dn.jsx)(X.a,{name:"nickname",onChange:i,value:a.nickname,required:!0,variant:"outlined",label:"nickname"}),Object(dn.jsx)(X.a,{required:!0,name:"password",onChange:i,value:a.password,type:"password",variant:"outlined",label:"password"}),Object(dn.jsxs)(Tn,{children:[Object(dn.jsx)(Y.a,{onClick:function(){return function(n){n.push("/Pic4Share-frontend/signup")}(n)},variant:"outlined",color:"primary",children:"Signup"}),Object(dn.jsx)(Y.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})},Gn=Object(R.b)(C||(C=Object(Q.a)(["\n  to {\n    height: 500px;\n    width: 500px;\n    border-radius: 50px;\n    gap: 25px;\n  }\n"]))),Hn=R.a.div(q||(q=Object(Q.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background-color: ",";\n  flex-direction: column;\n"])),V),Kn=R.a.h1(z||(z=Object(Q.a)(['\n  font-family: "Passion One", cursive;\n  color: ',";\n  margin: 0px;\n"])),U),Qn=R.a.form(I||(I=Object(Q.a)(["\n  height: 400px;\n  width: 350px;\n  animation: "," 300ms linear forwards;\n  border-radius: 100px;\n  background: #e2d6eb;\n  box-shadow: 35px 35px 70px #c0b6c8, -35px -35px 70px #fff6ff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n"])),Gn),Rn=R.a.div(D||(D=Object(Q.a)(["\n  display: flex;\n  gap: 20px;\n"]))),Un=Object(R.a)(X.a)(E||(E=Object(Q.a)(["\n  width: 300px;\n"]))),Vn=function(){var n=Object(J.f)(),e=rn({name:"",email:"",password:"",nickname:""}),t=Object(T.a)(e,2),a=t[0],i=t[1];return Object(dn.jsx)(Hn,{children:Object(dn.jsxs)(Qn,{onSubmit:function(e){!function(n,e){sn.a.post("".concat(ln,"/user/signup"),n).then((function(n){localStorage.setItem("token",n.data.token),H(e)})).catch((function(n){alert(n.response.data.error)}))}(a,n),e.preventDefault()},children:[Object(dn.jsx)(Kn,{children:"Signup"}),Object(dn.jsx)(Un,{onChange:i,value:a.name,name:"name",required:!0,variant:"outlined",label:"name"}),Object(dn.jsx)(Un,{onChange:i,value:a.email,name:"email",required:!0,type:"email",variant:"outlined",label:"email"}),Object(dn.jsx)(Un,{onChange:i,value:a.nickname,name:"nickname",required:!0,variant:"outlined",label:"nickname"}),Object(dn.jsx)(Un,{onChange:i,value:a.password,name:"password",required:!0,type:"password",variant:"outlined",label:"password"}),Object(dn.jsxs)(Rn,{children:[Object(dn.jsx)(Y.a,{onClick:function(){return n.goBack()},variant:"outlined",color:"primary",children:"back"}),Object(dn.jsx)(Y.a,{type:"submit",variant:"contained",color:"primary",children:"Signup"})]})]})})},Wn=function(){return Object(dn.jsx)(F.a,{children:Object(dn.jsxs)(J.c,{children:[Object(dn.jsx)(J.a,{exact:!0,path:"/Pic4Share-frontend/login",children:Object(dn.jsx)(Yn,{})}),Object(dn.jsx)(J.a,{exact:!0,path:"/Pic4Share-frontend/signup",children:Object(dn.jsx)(Vn,{})}),Object(dn.jsx)(J.a,{exact:!0,path:"/Pic4Share-frontend",children:Object(dn.jsx)(An,{})}),Object(dn.jsx)(J.a,{exact:!0,path:"/Pic4Share-frontend/create",children:Object(dn.jsx)(jn,{})}),Object(dn.jsx)(J.a,{children:Object(dn.jsx)(pn,{})})]})})},Xn=t(158),Zn=t(159),$n=t(83),_n=Object($n.a)({palette:{primary:{main:U},secondary:{main:W}}});var ne=function(){return Object(dn.jsxs)(Xn.a,{theme:_n,children:[Object(dn.jsx)(Zn.a,{}),Object(dn.jsx)(Wn,{})]})};M.a.render(Object(dn.jsx)(L.a.StrictMode,{children:Object(dn.jsx)(ne,{})}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.566b8618.chunk.js.map