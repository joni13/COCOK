const menus = (prefix, pushname, waktoo, wib, hari, tanggal, bulan1, tahun) => {
  return `Halo ${pushname}👋
  
Jam : ${waktoo} || ${wib} WIB
Tanggal : ${hari}, ${tanggal} ${bulan1} ${tahun}

   *Berikut Adalah list Menu Bot🤖*

*CONVERT*
 •${prefix}sticker
 •${prefix}stickergif
 •${prefix}toimg
  
*OWNER*
 •${prefix}self
 •${prefix}public
 •${prefix}banchat
 •${prefix}unbanchat
  
*STORAGE*
 •${prefix}addcmd
 •${prefix}delcmd
 •${prefix}listcmd
  
*GROUP*
 •${prefix}welcome
 •${prefix}setwelcome
 •${prefix}delwelcome
 •${prefix}left
 •${prefix}setleft
 •${prefix}delleft

*Bot Creator By ©Rapaa021*`
}

exports.menus = menus