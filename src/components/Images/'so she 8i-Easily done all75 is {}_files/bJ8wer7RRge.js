if (self.CavalryLogger) { CavalryLogger.start_js(["uqCf5"]); }

__d("StickerContextualDialog.react",["cx","ContextualLayerAutoFlipHorizontal","ReactAbstractContextualDialog","ReactLayer"],(function(a,b,c,d,e,f,g){"use strict";a=7;c=b("ReactLayer").createClass(b("ReactAbstractContextualDialog").createSpec({addedBehaviors:[b("ContextualLayerAutoFlipHorizontal")],displayName:"StickerXUIContextualDialog",theme:{wrapperClassName:"_53ii",arrowDimensions:{offset:a,length:16}}}));c.WIDTH={NORMAL:312,WIDE:400};e.exports=c}),null);
__d("ChatStickerButton.react",["cx","fbt","AutoFocusableLink.react","BootloadedComponent.react","JSResource","React","StickerContextualDialog.react","StickersActions","StickersStateStore","XUISpinner.react","emptyFunction","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;d=278;f=babelHelpers.inherits(a,b("React").PureComponent);i=f&&f.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$1=!1,this.state={shown:!!this.props.clicked},this.renderLayers=function(){if(!this.state.shown)return null;var a=this.props.ContextualDialogClass;return b("React").createElement(a,{alignment:this.props.flyoutAlignment,className:"_5e-r",contextRef:function(){return this.refs.link}.bind(this),onBeforeHide:this.$5,onBlur:this.$3,position:"above",shown:this.state.shown,width:this.props.flyoutWidth,key:"contextualDialog"},b("React").createElement(b("BootloadedComponent.react"),{bootloadPlaceholder:b("React").createElement("div",{style:{padding:"30px",textAlign:"center"}},b("React").createElement(b("XUISpinner.react"),{size:"large"})),bootloadLoader:b("JSResource")("StickersFlyout.react").__setRef("ChatStickerButton.react"),className:this.props.flyoutClassName,onShown:function(a){this.props.onFlyoutShown&&this.props.onFlyoutShown(a)}.bind(this),onHidden:function(){this.props.onFlyoutHidden&&this.props.onFlyoutHidden()}.bind(this),onEscKeyDown:this.$3,onStickerSelect:this.$6,shown:this.state.shown}))}.bind(this),this.$4=function(){this.$1=this.state.shown}.bind(this),this.showFlyout=function(a){a&&a.stopPropagation();if(this.$1||this.props.disabled){this.$1=!1;return}b("StickersActions").showStickerFlyout(this.props.threadID)}.bind(this),this.$5=function(){this.state.shown&&this.$3()}.bind(this),this.$3=function(){b("StickersActions").hideStickerFlyout()},this.$6=function(a){this.props.onStickerSelect(a)}.bind(this),this.$7=function(a){this.$3()}.bind(this),c}a.prototype.componentDidMount=function(){__p&&__p();this.props.onLoad&&this.props.onLoad(this),this.$2=b("StickersStateStore").addListener(function(){__p&&__p();var a=b("StickersStateStore").getState();if(a.get("showFlyout")&&a.get("threadID")===this.props.threadID){if(this.$1||this.props.disabled){this.$1=!1;return}this.setState({shown:!0})}else{a=this.props.getInput&&this.props.getInput();a&&a.focus&&a.focus();this.setState({shown:!1})}}.bind(this))};a.prototype.componentWillUnmount=function(){this.state.shown&&this.$3(),this.$2&&this.$2.remove()};a.prototype.render=function(){return b("React").createElement("span",null,b("React").createElement(b("AutoFocusableLink.react"),{autoFocus:this.props.autoFocus,className:b("joinClasses")(this.props.className,this.state.shown?"open":""),href:"#",onClick:this.showFlyout,onMouseDown:this.$4,role:"button",title:h._("Choose a sticker"),ref:"link"}),this.renderLayers())};a.propTypes={autoFocus:c.bool,className:c.string,clicked:c.bool,ContextualDialogClass:c.func.isRequired,disabled:c.bool,flyoutClassName:c.string,flyoutWidth:c.number,getInput:c.func,onLoad:c.func,onStickerSelect:c.func.isRequired,onFlyoutShown:c.func,onFlyoutHidden:c.func,threadID:c.string};a.defaultProps={clicked:!1,ContextualDialogClass:b("StickerContextualDialog.react"),disabled:!1,flyoutWidth:d,onStickerSelect:b("emptyFunction")};e.exports=a}),null);