const _0x19993d=_0x1a35;(function(_0x4c1cb4,_0x538c44){const _0x1bb904=_0x1a35,_0x23ddf0=_0x4c1cb4();while(!![]){try{const _0x4c5f03=parseInt(_0x1bb904(0xb0))/0x1*(parseInt(_0x1bb904(0xa3))/0x2)+parseInt(_0x1bb904(0xb4))/0x3+-parseInt(_0x1bb904(0xae))/0x4+-parseInt(_0x1bb904(0xb8))/0x5*(parseInt(_0x1bb904(0x9f))/0x6)+-parseInt(_0x1bb904(0xb3))/0x7*(-parseInt(_0x1bb904(0x96))/0x8)+-parseInt(_0x1bb904(0xa2))/0x9*(-parseInt(_0x1bb904(0xb6))/0xa)+-parseInt(_0x1bb904(0xad))/0xb;if(_0x4c5f03===_0x538c44)break;else _0x23ddf0['push'](_0x23ddf0['shift']());}catch(_0x181bc8){_0x23ddf0['push'](_0x23ddf0['shift']());}}}(_0x4f5d,0xae83d));function _0x1a35(_0x2d6522,_0x1e4c82){const _0x4f5d36=_0x4f5d();return _0x1a35=function(_0x1a35f9,_0x277fd8){_0x1a35f9=_0x1a35f9-0x95;let _0x171ed9=_0x4f5d36[_0x1a35f9];return _0x171ed9;},_0x1a35(_0x2d6522,_0x1e4c82);}function _0x4f5d(){const _0x34f9a7=['help','Invite\x20Bot','setURL','534sliAFJ','util','glob','9YpXhbe','15898egORyA','split','Link','Quran\x20Bot\x202','map','addComponents','../../config.json','length','log','Feeling\x20lost?','16803732YgQueP','90568qHBOJZ','setLabel','79SspNUr','exports','&permissions=8&scope=bot%20applications.commands','1106273KFVMxA','2415519MQXEVy','user','9896560NFTKBL','displayAvatarURL','17740svrOfH','devtools-ts','https://discord.com/oauth2/authorize?client_id=1243397693456384012','https://discord.com/oauth2/authorize?client_id=','Server\x20Support','Quran\x20Bot\x203','description','discord.js','8SjivNd','setStyle','reply','cwd','addFields','name'];_0x4f5d=function(){return _0x34f9a7;};return _0x4f5d();}const {ActionRowBuilder,ButtonBuilder,ButtonStyle,Events,EmbedBuilder}=require(_0x19993d(0x95)),{glob}=require(_0x19993d(0xa1)),{promisify}=require(_0x19993d(0xa0)),{prefix}=require(_0x19993d(0xa9)),{Utils}=require(_0x19993d(0xb9)),utilites=new Utils();module[_0x19993d(0xb1)]={'name':_0x19993d(0x9c),'description':_0x19993d(0xac),'cooldown':0x1388,async 'execute'(_0x2732b6,_0x234fd4,_0x48b296){const _0x34dcff=_0x19993d;try{const _0x395757=promisify(glob),_0x14a925=await _0x395757(process[_0x34dcff(0x99)]()+'/commands/music/**/*.js');let _0x1c2fdb=new EmbedBuilder()['setThumbnail'](_0x2732b6[_0x34dcff(0xb5)][_0x34dcff(0xb7)]({'dynamic':!![]}));_0x14a925[_0x34dcff(0xa7)](_0x562bd0=>{const _0x1a6774=_0x34dcff,_0x5d789e=require(_0x562bd0),_0x577af0=_0x562bd0[_0x1a6774(0xa4)]('/'),_0x2fa670=_0x577af0[_0x577af0[_0x1a6774(0xaa)]-0x2];if(_0x5d789e['name']){const _0x1f51fe={'directory':_0x2fa670,..._0x5d789e};_0x1c2fdb[_0x1a6774(0x9a)]({'name':''+prefix+_0x1f51fe[_0x1a6774(0x9b)],'value':''+_0x1f51fe[_0x1a6774(0xbe)],'inline':![]});}});let _0x26c213=new ActionRowBuilder()[_0x34dcff(0xa8)](new ButtonBuilder()['setStyle'](ButtonStyle[_0x34dcff(0xa5)])[_0x34dcff(0xaf)](_0x34dcff(0x9d))[_0x34dcff(0x9e)](_0x34dcff(0xbb)+_0x2732b6['user']['id']+_0x34dcff(0xb2)))[_0x34dcff(0xa8)](new ButtonBuilder()[_0x34dcff(0x97)](ButtonStyle['Link'])[_0x34dcff(0xaf)](_0x34dcff(0xa6))[_0x34dcff(0x9e)](_0x34dcff(0xba)))['addComponents'](new ButtonBuilder()[_0x34dcff(0x97)](ButtonStyle[_0x34dcff(0xa5)])['setLabel'](_0x34dcff(0xbd))[_0x34dcff(0x9e)]('https://discord.com/oauth2/authorize?client_id=1243397693456384012'))[_0x34dcff(0xa8)](new ButtonBuilder()[_0x34dcff(0x97)](ButtonStyle[_0x34dcff(0xa5)])[_0x34dcff(0xaf)](_0x34dcff(0xbc))[_0x34dcff(0x9e)]('https://discord.gg/tmKA3XhBfU'));_0x234fd4[_0x34dcff(0x98)]({'embeds':[_0x1c2fdb],'components':[_0x26c213]});}catch(_0x1a85c2){console[_0x34dcff(0xab)](_0x1a85c2);}}};