(this.webpackJsonpuzd_3_obm=this.webpackJsonpuzd_3_obm||[]).push([[0],{13:function(e,t,o){},15:function(e,t,o){"use strict";o.r(t);var r=o(1),s=o.n(r),a=o(8),i=o.n(a),c=o(2),n=o(3),d=o(5),l=o(4),p=(o(13),o(6)),m=o(0),u={background:"gold",color:"white"},g={background:"white",color:"gold"},h=function(e){Object(d.a)(o,e);var t=Object(l.a)(o);function o(e){var r;return Object(c.a)(this,o),(r=t.call(this,e)).how=function(){r.props.power?"gold"===r.state.hoveris.background?(r.setState({hoveris:g}),console.log("powerON white")):(r.setState({hoveris:u}),console.log("powerON gold")):"gold"===r.state.hoveris.background?(r.setState({hoveris:g}),console.log("powerOFF white")):(r.setState({hoveris:u}),console.log("powerOFF ogld"))},r.handleKeyPress=function(e){e.keyCode===r.props.skaicius&&(r.groti(),console.log(e.keyCode+" klavos mygtukai veikia"))},r.state={hoveris:u},r.groti=r.groti.bind(Object(p.a)(r)),r}return Object(n.a)(o,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"groti",value:function(){var e=this,t=document.getElementById(this.props.trigger);t.currentTime=0,t.play(),t.volume=this.props.volume,this.props.toggleInfo(this.props.id),this.how(),setTimeout((function(){e.how()}),100),console.log("groja")}},{key:"render",value:function(){return Object(m.jsxs)("div",{style:this.state.hoveris,id:this.props.skaicius,className:"drum-pad",onClick:this.groti,children:[Object(m.jsx)("audio",{id:this.props.trigger,className:"clip",src:this.props.url}),this.props.trigger]})}}]),o}(s.a.Component),k=function(e){Object(d.a)(o,e);var t=Object(l.a)(o);function o(e){var r;return Object(c.a)(this,o),r=t.call(this,e),console.log(e),r}return Object(n.a)(o,[{key:"render",value:function(){var e,t=this;return e=this.props.power?this.props.bank.map((function(e){return Object(m.jsx)(h,{skaicius:e.keyCode,trigger:e.keyTrigger,id:e.id,url:e.url,toggleInfo:t.props.toggleInfo,volume:t.props.volume,power:t.props.power})})):this.props.bank.map((function(e){return Object(m.jsx)(h,{skaicius:e.keyCode,trigger:e.keyTrigger,id:e.id,url:"#",toggleInfo:t.props.toggleInfo,volume:t.props.volume,power:t.props.power})})),Object(m.jsx)("div",{className:"pad-bank",children:e})}}]),o}(s.a.Component),f=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],y=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],v=function(e){Object(d.a)(o,e);var t=Object(l.a)(o);function o(e){var r;return Object(c.a)(this,o),(r=t.call(this,e)).changeVolume=function(e){r.state.power&&(r.setState({volume:e.target.value}),r.setState({info:"volume: "+Math.round(100*e.target.value)+" %"}),setTimeout((function(){r.setState({info:""})}),1e3),console.log(r.state.volume))},r.toggleInfo=function(e){r.state.power&&r.setState({info:e})},r.togglePower=function(){r.setState({power:!r.state.power,info:""})},r.toggleEffect=function(){r.state.power&&(r.state.bank===f?r.setState({bank:y,info:"Heater stuff"}):r.setState({bank:f,info:"Piano deal"}))},r.state={power:!0,bank:f,info:"",volume:".8"},r}return Object(n.a)(o,[{key:"render",value:function(){var e=this.state.power?{float:"right",background:"grey"}:{float:"left",background:"red"},t=this.state.bank===f?{float:"left",background:"grey"}:{float:"right",background:"grey"};return console.log("1----"),[].slice.call(document.getElementsByClassName("clip")).forEach((function(e){return console.log(e)})),console.log("2----"),Object(m.jsx)("div",{class:"app-wrapper",children:Object(m.jsxs)("div",{id:"drum-machine",children:[Object(m.jsx)(k,{bank:this.state.bank,toggleInfo:this.toggleInfo,volume:this.state.volume,power:this.state.power}),Object(m.jsx)("div",{className:"volume-wrapper",children:Object(m.jsx)("input",{className:"volume",type:"range",min:"0",max:"1",step:".01",value:this.state.volume,onChange:this.changeVolume})}),Object(m.jsxs)("div",{id:"display",children:[Object(m.jsxs)("div",{className:"power",children:[Object(m.jsxs)("p",{children:[" Power is: ",this.state.power?"On":"Off"]}),Object(m.jsx)("div",{className:"kva-wrapper",onClick:this.togglePower,children:Object(m.jsx)("div",{className:"kva",style:e})})]}),Object(m.jsx)("div",{className:"info-wrapper",children:this.state.info}),Object(m.jsxs)("div",{className:"effect",children:[Object(m.jsx)("p",{children:"Bank"}),Object(m.jsx)("div",{className:"kva-wrapper",onClick:this.toggleEffect,children:Object(m.jsx)("div",{className:"kva",style:t})})]})]})]})})}}]),o}(s.a.Component);i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ad8beb9f.chunk.js.map