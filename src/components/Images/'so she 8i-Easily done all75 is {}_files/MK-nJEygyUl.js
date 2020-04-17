if (self.CavalryLogger) { CavalryLogger.start_js(["McUiZ"]); }

__d("MercuryAttachmentConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({SIDE_LENGTH:9});e.exports=a}),null);
__d("ChatImageArrowDirection",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({BOTH:null,LEFT:null,RIGHT:null});e.exports=a}),null);
__d("ChatImageWithArrow.react",["cx","ChatImageArrowDirection","CssBackgroundImage.react","Link.react","MercuryAttachmentConstants","React","XUISpinner.react","cssURL","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;var i=30,j=15;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$3=function(){return Math.max(this.props.width,j)}.bind(this),this.$6=function(){return Math.max(this.props.height,i)}.bind(this),this.$7=function(a,c,d,e){if(c===b("ChatImageArrowDirection").LEFT)return"translate("+d+"px, "+e+"px)rotate(45deg)";else return"translate("+(a-d)+"px, "+e+"px)rotate(45deg)"},this.$8=function(a,c,d,e){if(c===b("ChatImageArrowDirection").LEFT)return"rotate(-45deg)translate(-"+(this.$1+d)+"px,-"+e+"px)";else return"rotate(-45deg)translate(-"+(a-d)+"px, -"+e+"px)"}.bind(this),c}a.prototype.render=function(){this.$1=Math.floor(this.props.sideLength/Math.sqrt(2));this.$2=Math.ceil(this.$3()+this.$1);if(this.props.isLoading)return this.$4();var a=b("joinClasses")("_4yp6"+(this.props.round?" _3lk2":""),this.props.rootClassName);return this.$5(b("React").createElement("div",{className:a},b("React").createElement("div",{className:"_52kr"+(this.props.round?" _3_om":""),style:{width:this.$3(),height:this.$6()}},b("React").createElement(b("CssBackgroundImage.react"),{className:"_4yp9"+(this.props.isSpherical?" _3603":""),imageURI:this.props.source,backgroundPosition:"center",style:{width:this.$3(),height:this.$6(),borderRadius:"inherit"}},this.props.isSpherical?b("React").createElement("div",{className:"_64ks"}):null))))};a.prototype.$5=function(a){return this.props.onClick?b("React").createElement(b("Link.react"),{className:"_6jtk",onClick:this.props.onClick},a):a};a.prototype.$4=function(){var a={width:this.props.sideLength,height:this.props.sideLength};this.props.source&&(a.backgroundImage=b("cssURL")(this.props.source));a={width:this.props.sideLength,height:this.props.sideLength};this.props.source&&(a.opacity=0);a={width:this.$3(),height:this.$6()};this.props.source&&(a.backgroundImage=b("cssURL")(this.props.source),a.backgroundSize="cover");return b("React").createElement("div",{className:"_4yp6"},b("React").createElement("div",{className:"_4ypb _3_om",style:a},b("React").createElement(b("XUISpinner.react"),{size:"small"})))};a.propTypes={arrowDirection:c.oneOf(Object.keys(b("ChatImageArrowDirection"))),onClick:c.func,height:c.number.isRequired,isLoading:c.bool,isSpherical:c.bool,round:c.bool,rootClassName:c.string,sideLength:c.number,source:c.string,width:c.number.isRequired};a.defaultProps={sideLength:b("MercuryAttachmentConstants").SIDE_LENGTH,isLoading:!1,isSpherical:!1,round:!1};e.exports=a}),null);
__d("MessengerAttachmentImageBlockUtils.bs",["isFacebookURI","isLinkshimURI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d){__p&&__p();var e=function(a){return a.getPath().toString().indexOf("/moments_app")===0},f=function(a,b){if(a<=300)return b<=300;else return!1};if(f(a,c))return!0;else if(b("isFacebookURI")(d)&&!b("isLinkshimURI")(d))return!e(d);else return!1}f.isIcon=a}),null);
__d("MessengerAttachmentImageBlockUtils.re",["MessengerAttachmentImageBlockUtils.bs"],(function(a,b,c,d,e,f){a=b("MessengerAttachmentImageBlockUtils.bs").isIcon;f.isIcon=a}),null);
__d("MessengerAttachmentImageBlock.react",["cx","MessengerAttachmentImageBlockUtils.re","React","StoryAttachmentStyle","URI","cssURL","gkx","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){return b("React").createElement("div",{className:b("joinClasses")(this.props.className,this.$1())},this.$2(),b("React").createElement("div",{className:"_5swm"},this.props.children))};a.prototype.$2=function(){__p&&__p();if(!this.props.attachment.media||!this.props.attachment.media.image)return null;var a=this.$3(),c=a.height;a=a.width;var d=c>a,e=new(b("URI"))(this.props.attachment.uri);e=b("MessengerAttachmentImageBlockUtils.re").isIcon(c,a,e);c=c&&a?c/a*100:100;a=d||e?.2:1;e=d||e?c:52;d={backgroundImage:b("cssURL")(this.props.attachment.media.image),minHeight:"0px",paddingBottom:d&&c>150?"136px":e*a+"%"};this.props.attachment.description&&this.props.attachment.source&&(d.minHeight="112px");return b("React").createElement("div",{className:"_3xn1",style:d})};a.prototype.$1=function(){if(!this.props.attachment.media||!this.props.attachment.media.image)return"_3xn3 _5swn";var a=this.$3(),c=a.height;a=a.width;var d=c>a,e=new(b("URI"))(this.props.attachment.uri);e=b("MessengerAttachmentImageBlockUtils.re").isIcon(c,a,e);return"_3xn3"+(e&&!d?" _3xn5":"")+(d?" _3xn6":"")+(a>=c&&!e?" _3xn7":"")+(b("gkx")("678605")&&this.$4()?" _2e9e":"")};a.prototype.$4=function(){var a=this.props.attachment.style_list;return Array.isArray(a)&&a[0]==b("StoryAttachmentStyle").LIGHTWEIGHT_ACTION};a.prototype.$5=function(){var a=this.props.attachment.properties;return!a||!a.height||!a.width?null:{height:a.height,width:a.width}};a.prototype.$3=function(){var a=this.$5()||this.props.attachment.media.image_size||{},b=a.height;a=a.width;if(b&&a){b=parseInt(b,10);a=parseInt(a,10);return{height:b,width:a}}return{height:0,width:0}};function a(){h.apply(this,arguments)}a.propTypes={attachment:c.object.isRequired};e.exports=a}),null);
__d("MercuryFallbackShareAttachmentTextBlock.react",["cx","LineClamp.react","MercuryShareAttachmentReactShape","MercuryShareAttachmentRenderLocations","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){if(!this.props||!this.props.attachment)return b("React").createElement("div",{className:"__6j"});return b("MercuryShareAttachmentRenderLocations").MESSENGER===this.props.location?b("React").createElement("div",{className:"__6j"},this.renderMessengerTitle(),this.renderMessengerDescription(),this.renderMessengerSource()):b("React").createElement("div",{className:"__6j"},this.renderTitle(),this.renderDescription(),this.renderSource(),this.props.extraComponent)};a.prototype.renderMessengerTitle=function(){return!this.props.attachment.title?null:b("React").createElement("div",{className:"__6k"},b("React").createElement(b("LineClamp.react"),{customEllipsis:" ",lines:2,lineHeight:18},this.props.attachment.title))};a.prototype.renderMessengerDescription=function(){return!this.props.attachment.description?null:b("React").createElement("div",{className:"__6l"},b("React").createElement(b("LineClamp.react"),{customEllipsis:" ",lines:2,lineHeight:16},this.props.attachment.description))};a.prototype.renderMessengerSource=function(){return!this.props.attachment.source?null:b("React").createElement("div",{className:"__6m"},this.props.attachment.source)};a.prototype.renderTitle=function(){return!this.props.attachment.title?null:b("React").createElement("div",{className:"__6k"+(!this.props.attachment.uri&&!this.props.attachment.description||this.props.attachment.target!=null&&this.props.attachment.target.lwa_type!=null&&this.props.attachment.target.lwa_state==="INITIATED"?" _2xsq":"")+(this.props.extraComponent?" _1dw9":"")},this.props.attachment.title)};a.prototype.renderDescription=function(){return!this.props.attachment.description?null:b("React").createElement("div",{className:"__6l"},this.props.attachment.description)};a.prototype.renderSource=function(){return!this.props.attachment.source?null:b("React").createElement("div",{className:"__6m"},this.props.attachment.source)};function a(){h.apply(this,arguments)}a.propTypes={attachment:b("MercuryShareAttachmentReactShape"),extraComponent:c.object,location:c.oneOf(b("MercuryShareAttachmentRenderLocations").getValues())};e.exports=a}),null);
__d("MercuryShareImage.react",["cx","ChatImageArrowDirection","ChatImageWithArrow.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){return b("React").createElement("div",{className:"_4hsl"},b("React").createElement(b("ChatImageWithArrow.react"),{arrowDirection:b("ChatImageArrowDirection").BOTH,height:this.props.height,round:!!this.props.round,source:this.props.source,width:this.props.width}))};function a(){h.apply(this,arguments)}a.propTypes={height:c.number.isRequired,round:c.bool,source:c.string.isRequired,width:c.number.isRequired};e.exports=a}),null);
__d("MercuryFallbackShareAttachmentContent.react",["cx","Image.react","ImageBlock.react","MercuryFallbackShareAttachmentTextBlock.react","MercuryShareAttachmentReactShape","MercuryShareAttachmentRenderLocations","MercuryShareImage.react","MessengerAttachmentImageBlock.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;var i=72;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.renderTextBlock=function(){return b("React").createElement(b("MercuryFallbackShareAttachmentTextBlock.react"),this.props)};a.prototype.renderChatImage=function(a){return b("React").createElement(b("ImageBlock.react"),{className:a,spacing:"medium"},b("React").createElement(b("MercuryShareImage.react"),{height:i,source:this.props.attachment.media.image,width:i}),b("React").createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",height:i}},this.renderTextBlock()))};a.prototype.renderMessengerImage=function(a){return b("React").createElement(b("MessengerAttachmentImageBlock.react"),{className:a,attachment:this.props.attachment},this.renderTextBlock(),this.props.children)};a.prototype.renderDefaultImage=function(a){return b("React").createElement(b("ImageBlock.react"),{className:b("joinClasses")(this.props.className,a)},b("React").createElement(b("Image.react"),{className:"__6n",src:this.props.attachment.media.image,width:i}),this.renderTextBlock(),this.props.children)};a.prototype.getCSSClasses=function(){var a=this.props.attachment,c=this.props.location;return(b("MercuryShareAttachmentRenderLocations").CHAT===c?"_49or":"")+(b("MercuryShareAttachmentRenderLocations").CHAT_PREVIEW===c?" _324d":"")+(b("MercuryShareAttachmentRenderLocations").CHAT!==c?" _tih":"")+(a&&a.media.image?"":" _49ou")+" _310t"};a.prototype.render=function(){var a=this.props.attachment,c=this.props.location,d=this.getCSSClasses();if(a.media&&a.media.image){if(b("MercuryShareAttachmentRenderLocations").CHAT===c||b("MercuryShareAttachmentRenderLocations").CHAT_PREVIEW===c)return this.renderChatImage(d);else if(b("MercuryShareAttachmentRenderLocations").MESSENGER===c)return this.renderMessengerImage(d);return this.renderDefaultImage(d)}return b("React").createElement("div",{className:b("joinClasses")(this.props.className,d)},this.renderTextBlock(),this.props.children)};function a(){h.apply(this,arguments)}a.propType={attachment:b("MercuryShareAttachmentReactShape"),location:c.oneOf(b("MercuryShareAttachmentRenderLocations").getValues())};e.exports=a}),null);
__d("XMessengerDotComSavedForLaterNuxSeenController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/save/savemessagenux/",{})}),null);
__d("MercuryFallbackShareAttachment.react",["cx","fbt","AsyncRequest","CollectionCurationMechanisms","CollectionsDisplaySurface","Link.react","MercuryFallbackShareAttachmentContent.react","MercuryShareAttachmentReactShape","MercuryShareAttachmentRenderLocations","MessengerAdsWebTypedLogger","MessengerDotComSaveModule","MNAdsLoggerEventEnum","React","ReactFragment","SaveMessageUtils","XMessengerDotComSavedForLaterNuxSeenController","XUIAmbientNUX.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;var j="focus",k="click",l="scroll",m=1e4,n=3e4;d=babelHelpers.inherits(a,b("React").Component);i=d&&d.prototype;function a(){i.constructor.call(this),this.state={showNux:!1,nuxDisabled:!1}}a.prototype.renderLink=function(a){return b("MercuryShareAttachmentRenderLocations").isPreview(this.props.location)||!this.props.attachment.uri?a:b("React").createElement(b("Link.react"),{className:"_5rw4",href:this.props.attachment.uri,onClick:this.$1.bind(this),target:"_blank"},a,this.renderLayers())};a.prototype.render=function(){return this.renderLink(b("React").createElement(b("MercuryFallbackShareAttachmentContent.react"),babelHelpers["extends"]({ref:"mercury_fallback_share_attachment"},this.props)))};a.prototype.$1=function(a){__p&&__p();if(this.props.isSponsored){a=this.props.attachment&&this.props.attachment.subattachments;if(!a)return;for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;new(b("MessengerAdsWebTypedLogger"))().setEvent(b("MNAdsLoggerEventEnum").LINK_CLICK).setIsSponsored(this.props.isSponsored).setItemID(e&&e.id).setMessageID(this.props.messageID).setPageID(this.props.pageID).log()}}if(this.state.nuxDisabled||!this.$2())return;this.$3();this.interactionTime=0;this.cancelMinConsumeTimeout=setTimeout(function(){this.$4()||this.setState({showNux:!0,nuxDisabled:!0})}.bind(this),m);this.cancelMaxConsumeTimeout=setTimeout(function(){this.$4()||(this.setState({showNux:!1,nuxDisabled:!1}),this.clearTimeouts())}.bind(this),n);var f=Date.now();this.cancelWindowInteractionTimeout=setTimeout(function(){this.$5(function(){this.interactionTime||(this.interactionTime=Date.now()-f)}.bind(this))}.bind(this),0)};a.prototype.clearTimeouts=function(){this.cancelWindowInteractionTimeout&&(clearTimeout(this.cancelWindowInteractionTimeout),this.cancelWindowInteractionTimeout=null),this.cancelMaxConsumeTimeout&&(clearTimeout(this.cancelMaxConsumeTimeout),this.cancelMaxConsumeTimeout=null),this.cancelMinConsumeTimeout&&(clearTimeout(this.cancelMinConsumeTimeout),this.cancelMinConsumeTimeout=null)};a.prototype.onNUXCloseButtonClick=function(){this.setState({showNux:!1}),this.$6(),this.$7(),this.clearTimeouts()};a.prototype.renderLayers=function(){return this.$2()?b("ReactFragment").create(b("React").createElement(b("XUIAmbientNUX.react"),{contextRef:function(){return this.refs.mercury_fallback_share_attachment}.bind(this),shown:this.state.showNux,onCloseButtonClick:this.onNUXCloseButtonClick.bind(this),position:"below",width:"custom",customwidth:300},h._("You can now save links and videos to Facebook by right clicking on a message."))):null};a.prototype.$3=function(){this.$8||(this.$9=[],this.$8=[Event.listen(window,"click",this.$10.bind(this,k)),Event.listen(window,"focus",this.$10.bind(this,j)),Event.listen(window,"scroll",this.$10.bind(this,l))])};a.prototype.$10=function(a){this.$9.forEach(function(b){b.call(this,a)},this)};a.prototype.$5=function(a){this.$9.push(a)};a.prototype.$4=function(){return this.interactionTime&&this.interactionTime>0};a.prototype.$7=function(){if(this.$8){while(this.$8.length)this.$8.pop().remove();this.$8=null;this.$9=null}};a.prototype.$2=function(){return b("MessengerDotComSaveModule").eligible_for_nux&&this.$11()};a.prototype.$11=function(){var a=this.props.attachment;if(!a)return!1;a=a.style_list;return b("SaveMessageUtils").isSavableMessageAttachment(a)};a.prototype.$6=function(){new(b("AsyncRequest"))().setURI(b("XMessengerDotComSavedForLaterNuxSeenController").getURIBuilder().getURI()).setData({action:"impression",surface:b("CollectionsDisplaySurface").MESSENGER_DOT_COM_MESSAGE,mechanism:b("CollectionCurationMechanisms").SAVE_MESSAGE_NUX,object_id:this.props.message_id,collection_id:98}).send()};a.propTypes={attachment:b("MercuryShareAttachmentReactShape"),isSponsored:c.bool,location:c.oneOf(b("MercuryShareAttachmentRenderLocations").getValues()),messageID:c.string,pageID:c.string};e.exports=a}),null);