/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: `${global.config.PREFIX}`,
  version: "1.0.0", 
  permission: 0,
  credits: "nayan",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  dependencies: {
	}
};


module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\n●❥𝄞⋆⃝   স্মৃতির!মাঝে!আটকে!থাকা\n ----------অদৃশ্য!এক!ছায়া🙂🏵️\n--মানুষটা!হারিয়ে!গেলেও\n---------ফুরায়!না!তার!মায়া.༊᭄࿐❥\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\●=❥𝄞⋆⃝   বাঁধিনি হৃদয় পিঞ্জরে\n ------------রেখেছি মুক্ত করে।🦋🍀\n--যাবি যদি দূরেই পাখি,🌺🌺\n--------যা রে উড়ে 🦋🦋🦋\nকরবোনা মানা তোরে.༊᭄࿐❥।\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\n❥❥◎⃝! শূন্যতায় ভাসি🙃\n ----❥কখনো হাসি -😁💚\n_আবার কখনো কাঁদি!-😅\n\n❥বেলা শেষে শূন্যতায় জড়িয়ে \n ---ও পূর্ণতা খুঁজি😊❤\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖-----𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\n❥»̶̶͓͓͓̽̽̽⑅⃝✺❥᭄❥\n___💚__পৃথিবীটা আজ...\nমিথ্যে মায়াতে ভরা...!💚🌺\n____🥀_তাই তো পৃথীবীর মানুষ আজ....!\nঅভিনয়ের সেরা...👎🥀\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\ ●༊᭄࿐❥মুক্তি করে দিলাম তোরে,\n----যেতে পারিস অনেক দূরে,,🙂🌺\n৷ ভালোবাসি,,,এই কথাটি 🦋🍀\n ------বলবো না আর তোরে,,🙂🥀🥀৷ \nসুখে যদি থাকিস রে তুই\n---আসিস না আর ফিরে,,🌺🥺৷ \nনা পাওয়ার সুখ খুজে নিবো\n---- সকল দুঃখের ভিরে,,●══❥𝄞⋆⃝ ৷\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\n___চোখের দেখায় নয়,মনের দেখায় ভালবাসি!!😇✨\n- কাছে থাকো কিংবা দূরে,তোমাকে ভেবেই হাসি!!🖤💖🦋\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\n༅༎💙🦋\n༆𝐓𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞_⚠︎🙅🏻‍♂️✨😽︵۵মানুষ! হচ্ছে!বৃষ্টির!মতো!Life a ! অনেক মানুষ !আসবে!অনেক মানুষ !যাবে!💔🥰\n:༅༎💙🦋 সঠিক!মানুষটা!ঠিকই!ছায়া!হয়ে!পাশে!থাকবে -/ ఌ︵💚🌻\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\nツ●───༊᭄࿐❥সময় আমাদের জীবনের কোনো কিছু নষ্ট করে না\n....!🙂🌼– শুধু শিখিয়ে দিয়ে যায় বাস্তবতা কি...! 🙂✌️°.ツ●───༊᭄࿐❥\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\●══❥𝄞⋆⃝   এত!মানুষকে হাসিয়ে!❛কি❛লাভ_\n❛____!❛❛যদি!দিন.!শেষে.!\nনিজেকে.!. হাঁসানোর!!!❛মতো.!\n কেউ.!!না.!থাকে.!__😥,💔😔\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\nকেঁদে না পাওয়া জিনিস গুলো\nহাসি মুখে ছেড়ে দেওয়াই ভালো.💞😪🖤\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\- 🦋🥀࿐💗 ~~ অপেক্ষায় আছি \nসেইদিনের জন্য~~ !😊🥀 যেদিন ডাক্তার আমার ফ্যামেলি কে বলবে, !!💔🙂🥀~~ I am sorry~~\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\n__❝স্বার্থের মায়াজালে\n-------পৃথিবীটা ঘেরা🥀🥀\n_❝ভালো থাকুক তারাই\n---যারা অভিনয়ের সেরা❣\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\n●─༊᭄࿐কাদঁতে থাকা মানুষ আমি,\nツ●───༊᭄࿐❥হাসতে ভালোবাসি,\n--তাইতো সবাই কাঁদায় আমায়,\n ---হাসতে দেয় না বেশি😥🌸●─❥\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\n-༅༎﹏𝐈 𝐖𝐢𝐬h﹏😔💔🦋\n༊༅༎”একদিন!!আমার!মৃত্যু”তে.!༅༎ຶ😌\n----কোনো এক কাফন বিক্রেতার!!\nমুখে হাঁসি!ফুটবে.!༊༅༎🙂💔\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\n জীবনে আর কাউকে হারানোর ভয় নাই 😊\n-----যাকে হারানোর ভয় ছিল.!😔\n সে আর আমার নাই....!🥺\n----..... !!🥀😭\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\n✿┼─⛈️🖇️𝗧𝗵𝗶𝘀 𝗔𝗯𝗼𝘂𝘁 𝗟𝗶𝗻𝗲-ᵉ💜🌻🔐___ আমার মতো তুমি হয়তো\n ----- বহু জনকে পাবে\n কিন্তু,তাদের মধ্যে তুমি কখনো\n ---- আমাকে পাবে না।!💙🦋🙂°\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\n ●━কারো প্রিয় হওয়ার \n------সামর্থ্য আমার নেই !🥀❤️‍🩹\nআমি প্রয়োজনেই সীমাবদ্ধ..!🥺❤️‍🩹\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\ ●༊᭄࿐❥মুক্তি করে দিলাম তোরে,\n----যেতে পারিস অনেক দূরে,,🙂🌺\n৷ ভালোবাসি,,,এই কথাটি 🦋🍀\n ------বলবো না আর তোরে,,🙂🥀🥀৷ \nসুখে যদি থাকিস রে তুই\n---আসিস না আর ফিরে,,🌺🥺৷ \nনা পাওয়ার সুখ খুজে নিবো\n---- সকল দুঃখের ভিরে,,●══❥𝄞⋆⃝ ৷\n✢━━━━━━━━━━━━━━━✢\n ----❖--",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\n___চোখের দেখায় নয়,মনের দেখায় ভালবাসি!!😇✨\n- কাছে থাকো কিংবা দূরে,তোমাকে ভেবেই হাসি!!🖤💖🦋\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖---- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\❥»̶̶͓͓͓̽̽̽⑅⃝✺❥᭄❥\n___💚__পৃথিবীটা আজ...\nমিথ্যে মায়াতে ভরা...!💚🌺\n____🥀_তাই তো পৃথীবীর মানুষ আজ....!\nঅভিনয়ের সেরা...👎🥀\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\❥❥◎⃝! শূন্যতায় ভাসি🙃\n ----❥কখনো হাসি -😁💚\n_আবার কখনো কাঁদি!-😅\n\n❥বেলা শেষে শূন্যতায় জড়িয়ে \n ---ও পূর্ণতা খুঁজি😊❤\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----",
"===  𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭  ===\n----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----\n✢━━━━━━━━━━━━━━━✢\nমুখের উপর মুখুশ থাকে !\n---------মিথ্যা ছবির আয়না..🙂\n যতই তুমি মানুষ চিনো\n -------বেইমান চেনা যায়ই না🙂\n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐍𝐀𝐙𝐑𝐔𝐋 -----❖----"
             ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/2S3TT0r5/received-837964947838832.jpg",
"https://i.postimg.cc/FzFz7cpx/received-1012122773152363.jpg", 
"https://i.postimg.cc/NFNMTMPv/received-1044805776545594.jpg",
"https://i.postimg.cc/FsR1vy7r/received-1323913614877290.jpg",
"https://i.postimg.cc/Lsz8Dv0T/received-1524114968332604.jpg",
"https://i.postimg.cc/TP8PnBQ1/received-192792037032768.jpg","https://i.postimg.cc/t4nTZ938/received-224178193618507.jpg",
"https://i.postimg.cc/nVTMNRVS/received-316377320794272.jpg",
"https://i.postimg.cc/63t5mRkN/received-663674872376071.jpg",
"https://i.postimg.cc/L6b58J1z/received-783227146912189.jpg",
"https://i.postimg.cc/FRps5zvk/received-866250925155240.jpg",
"https://i.postimg.cc/zGvhdmnk/received-1002240864356837.jpg",
"https://i.postimg.cc/vB5MbBdt/1693733217206.jpg",
"https://i.postimg.cc/kgh7yzcK/received-1299579530679519.jpg",
"https://i.postimg.cc/yxPH3bxJ/received-1454686131975039.jpg",
"https://i.postimg.cc/Hs6mpRFR/received-1902222993511852.jpg",
"https://i.postimg.cc/W4BjBZx4/received-250064730761753.jpg",
"https://i.postimg.cc/CMjLVvhp/received-294303219887713.jpg",
"https://i.postimg.cc/fyZsLNzn/received-3482844302029668.jpg",
"https://i.postimg.cc/m2jLPt1d/received-352224697127377.jpg",
"https://i.postimg.cc/qqXkX7bv/received-619283457045318.jpg",
"https://i.postimg.cc/6pTXTzX3/received-6857638590914043.jpg",
"https://i.postimg.cc/7L2rn6br/received-831269811726708.jpg",
"https://i.postimg.cc/GmN1DYLj/received-837964947838832.jpg",
"https://i.postimg.cc/gkzdbmt3/received-997447868139985.jpg",


  
];
	 var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
