import{_ as v,a5 as C,ab as k,r,b as c,c as u,Q as h,a8 as x,a9 as w,d as a,w as l,e as p,H as n,t as B,g as y,p as f,F}from"./index-94cddbf2.js";import{F as U}from"./FileUploader-22e9b494.js";const I={name:"InsertImage",props:["editor"],expose:["openDialog"],data(){return{addVideoDialog:{url:"",file:null,show:!1}}},components:{Button:C,Dialog:k,FileUploader:U},methods:{openDialog(){this.addVideoDialog.show=!0},onVideoSelect(i){let o=i.target.files[0];o&&(this.addVideoDialog.file=o)},addVideo(i){this.editor.chain().focus().insertContent(`<video src="${i}"></video>`).run(),this.reset()},reset(){this.addVideoDialog=this.$options.data().addVideoDialog}}},N={class:"flex items-center space-x-2"},S=["src"],b={class:"flex gap-2"};function A(i,o,L,P,e,t){const s=r("Button"),g=r("FileUploader"),V=r("Dialog");return c(),u(F,null,[h(i.$slots,"default",x(w({onClick:t.openDialog}))),a(V,{options:{title:"Add Video"},modelValue:e.addVideoDialog.show,"onUpdate:modelValue":o[2]||(o[2]=d=>e.addVideoDialog.show=d),onAfterLeave:t.reset},{"body-content":l(()=>[a(g,{"file-types":"video/*",onSuccess:o[0]||(o[0]=d=>e.addVideoDialog.url=d.file_url)},{default:l(({file:d,progress:m,uploading:_,openFileSelector:D})=>[p("div",N,[a(s,{onClick:D},{default:l(()=>[n(B(_?`Uploading ${m}%`:e.addVideoDialog.url?"Change Video":"Upload Video"),1)]),_:2},1032,["onClick"]),e.addVideoDialog.url?(c(),y(s,{key:0,onClick:()=>{e.addVideoDialog.url=null,e.addVideoDialog.file=null}},{default:l(()=>[n(" Remove ")]),_:2},1032,["onClick"])):f("",!0)])]),_:1}),e.addVideoDialog.url?(c(),u("video",{key:0,src:e.addVideoDialog.url,class:"mt-2 w-full rounded-lg",type:"video/mp4",controls:""},null,8,S)):f("",!0)]),actions:l(()=>[p("div",b,[a(s,{variant:"solid",onClick:o[1]||(o[1]=d=>t.addVideo(e.addVideoDialog.url))},{default:l(()=>[n(" Insert Video ")]),_:1}),a(s,{onClick:t.reset},{default:l(()=>[n("Cancel")]),_:1},8,["onClick"])])]),_:1},8,["modelValue","onAfterLeave"])],64)}const E=v(I,[["render",A]]);export{E as default};
//# sourceMappingURL=InsertVideo-21cc1587.js.map