const timerstart = () =>{
  const shortId = document.getElementById('short');

  if (shortId){

  'use strict'
  
              let status = 0;
              let currentTime = 1800;
              let startTime;
              let timerID;
              
  
              const timerTxt = document.getElementById('timer');
              console.log(timerTxt)
  
          
              window.onclick = ()=>{
  
                  switch(status){
                      //スタート待ち
                      case 0:
                      default:
                          status = 1;
                          currentTime = 1800;
                          count();
                          break;
                      //動作中
                      case 1:
                          status = 2;
                          clearTimeout(timerID);
                          timerID = 0;
                          break;
                      //終了
                      case 2:
                          status = 0;
                          timerTxt.textContent = 'READY';
                          break;
                  }
              }
  
              function count(){
                  //テキスト書き換え
                  if(currentTime > 0){
                      // audio_sec.pause();
                      // audio_sec.currentTime = 0;
                      timerTxt.textContent = String(currentTime);
                      // audio_sec.play();
                  }else if(currentTime === 0){
                      timerTxt.textContent = 'End';
                      startTime = new Date();
                      // audio_start.play();
                  }else{
                      const time = new Date(Date.now() - startTime);
                      const min = String(time.getMinutes()).padStart(2,'0');
                      const sec = String(time.getSeconds()).padStart(2,'0');
  
                      //00:00
                      timerTxt.textContent = `${min}:${sec}`;
                  }
  
                  currentTime--;
  
                  //タイマースタート
                  timerID = setTimeout(()=>{
                      count();
                  },1000);
              }
            }
          }
  
            window.addEventListener("turbolinks:load", timerstart);