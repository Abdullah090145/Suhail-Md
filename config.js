const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348118739123";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_48_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1LFxuICAgICAgICA1OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI1LFxuICAgICAgICA1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA1LFxuICAgICAgICA5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzksXG4gICAgICAgIDU5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk0LFxuICAgICAgICA1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxODcsXG4gICAgICAgIDk1LFxuICAgICAgICAxODUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMixcbiAgICAgICAgODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExLFxuICAgICAgICA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDMwLFxuICAgICAgICA2NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODYsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgOTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU3LFxuICAgICAgICA0LFxuICAgICAgICA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NyxcbiAgICAgICAgOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN1RjbldWOU9ETzhzMEV4QVVuUEtKMG9rNjU4WDdiUDNlWkRHUUZCM3BrQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTUlENUNucnVTQlM4Yzh5V2FNWjljUVwiLFxuICBcInBob25lSWRcIjogXCJlM2MwYzFlNy0wYmU5LTQ1NGYtYTM2My0wNGJiMzQyYWRiYTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgOTEsXG4gICAgICA5MSxcbiAgICAgIDUzLFxuICAgICAgMjA1LFxuICAgICAgMTAwLFxuICAgICAgMTMsXG4gICAgICAxMjUsXG4gICAgICAxNzAsXG4gICAgICAyNDgsXG4gICAgICAxOTcsXG4gICAgICA2MyxcbiAgICAgIDQxLFxuICAgICAgMCxcbiAgICAgIDksXG4gICAgICAxNDUsXG4gICAgICA4NSxcbiAgICAgIDI0NSxcbiAgICAgIDEwNixcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICA4NSxcbiAgICAgIDIwNSxcbiAgICAgIDg2LFxuICAgICAgNDAsXG4gICAgICAxMjksXG4gICAgICAyNTQsXG4gICAgICAxOTYsXG4gICAgICAxMDUsXG4gICAgICAxNDAsXG4gICAgICA5OCxcbiAgICAgIDEzNSxcbiAgICAgIDE4NSxcbiAgICAgIDY0LFxuICAgICAgNTEsXG4gICAgICAxMzEsXG4gICAgICAxNTcsXG4gICAgICAxNSxcbiAgICAgIDIyMyxcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktCQ1JMVlhaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTE4NzM5MTIzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzODYyNDc5MTg4Nzk3MDoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQelF6YW9IRU5pRzE3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRpUG9qeWNYZnMyWGswV3VPV2xzMDFEbVVqTHBWblRrQitaL2wzOWZaa2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZmlFWlJwbldJOEJFWDloUXFPbzI4ZGNlVElYeHd6TUtaYTBTSnhmSzYxaWNFb091N3B0empLb2VPdFBBcHgzRjVnRlVhd2xyYlh5cUdHRktiL1lWRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibStHVXlKRkgzSWQ1YllGb2dtS3JZREl4ekRjaWN5QS9NSkkyZ0NYUkU2WCt1MlhXMnU4YTJ2a3AyUytoUTd3V2VlRmhwTnJBcDVwMXo1aUNoTTRDalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODExODczOTEyMzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwOTA5MDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEYW1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURhbS5qc29uIjogIntcImtleURhdGFcIjpcImp1cmhEUzhEa0ZNaFBBOG82SS9ZdkR6c3pZSnZPUXhjdDR4NXQwTDBPcms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk2ODQwMDUwNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTA5MDQ3MzgzNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
